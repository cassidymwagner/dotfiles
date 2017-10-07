var os = require('os');
var fs = require('fs');
var crypto = require('crypto');
var path = require('path');
var request = require('request');

var stubVersion = {
  supported: function() {
    return false;
  },
  setAppID: function() {
    return false;
  },
  show: function() {
    console.error('unsupported');
  },
  hide: function() {
    console.error('unsupported');
  }
};

var correctType = (os.type() == 'Windows_NT');
var correctPlatform = (os.platform() == 'win32');

if (correctType && correctPlatform) {
  try {
    var toasterLib = require('./discord_toaster.node');
  }
  catch (e) {
    try {
      var toasterLib = require('./build/Release/discord_toaster');
    }
    catch (e) {
      toasterLib = stubVersion;
    }
  }
}
else {
  toasterLib = stubVersion;
}

var CACHE_MAX_AGE = 24/*hours*/ * 60/*minutes*/ * 60/*seconds*/ * 1000 /*to milliseconds*/;
var tempDir = path.join(os.tmpdir(), 'discord_toaster_images');
var iconCache = {};

function hash(someString) {
  var shasum = crypto.createHash('sha1');
  shasum.update(someString);
  return shasum.digest('hex');
}

function ensureTempDir() {
  try {
    fs.mkdirSync(tempDir);
  }
  catch (e) {
    // catch for when it already exists.
  }
  try {
    const tempStat = fs.statSync(tempDir);
    return tempStat.isDirectory();
  }
  catch (e) {
    console.error('fs.statSync error:', e);
  }
  return false;
}

function iconExistsAndIsOld(localPath) {
  try {
    const iconStat = fs.statSync(localPath);
    if (iconStat.isFile()) {
      const age = Date.now() - iconStat.mtime.getTime();
      if (age >= CACHE_MAX_AGE) {
        return true;
      }
    }
  }
  catch (e) {
    // meh
  }
  return false;
}

function cleanUpTempDir() {
  // clean up cache
  try {
    const toDelete = fs.readdirSync(tempDir);
    toDelete.forEach(fname => {
      const localPath = path.join(tempDir, fname);
      if (iconExistsAndIsOld(localPath)) {
        fs.unlinkSync(localPath);
      }
    });
  }
  catch (e) {
    // don't really care that much
    console.error('error clearing cache dir:', e);
  }
}

function checkIfIconCached(key, nodeLocalPath, uriPath) {
  // first try the iconCache
  const cachedRes = iconCache[key];
  if (cachedRes === '') {
    return cachedRes;
    // otherwise, fall through and verify that the file still exists
  }
  // then see if the file is already there
  try {
    const iconStat = fs.statSync(nodeLocalPath);
    if (iconStat.isFile()) {
      const age = Date.now() - iconStat.mtime.getTime();
      if (age < CACHE_MAX_AGE) {
        return uriPath;
      }
    }
  }
  catch (e) {
    // nope, does not exist
  }
  return null;
}

var wrapper = {
  isInited: false,
  init: function() {
    if (this.isInited) {
      return true;
    }
    if (toasterLib.supported() && ensureTempDir()) {
      process.on('exit', () => {
        cleanUpTempDir();
      });
      this.isInited = true;
      return true;
    }
    return false;
  },
  supported: function() {
    return toasterLib.supported();
  },
  setAppID: function(appID) {
    return toasterLib.setAppID(appID);
  },
  show: function(notice) {
    let doFetch = false;
    if (notice.icon.indexOf('http') === 0) {
      doFetch = true;
    }
    else if (notice.icon.indexOf('//') !== 0) {
      doFetch = true;
      notice.icon = 'https:' + notice.icon;
    }
    else if (notice.icon.indexOf('file:') !== 0) {
      notice.icon = '';
    }

    if (doFetch) {
      const key = hash(notice.icon);
      const nodeLocalPath = path.join(tempDir, key);
      const parts = nodeLocalPath.split(path.sep);
      const uriPath = 'file:///' + parts.join('/');

      function doFetchedShow(localUriPath) {
        iconCache[key] = localUriPath;
        notice.icon = localUriPath;
        try {
          toasterLib.show(notice);
        }
        catch (e) {
          console.error('error in toaster:', e);
        }
      }

      // first try the iconCache
      const cachedUri = checkIfIconCached(key, nodeLocalPath, uriPath);
      if (cachedUri !== null) {
        doFetchedShow(cachedUri);
      }
      else {
        // then download
        const url = notice.icon;
        request.get({url, encoding: null}, (error, response, body) => {
          if (error) {
            console.error('error fetching ' + url + ': ' + error);
            doFetchedShow('');
            return;
          }

          if (response.statusCode !== 200) {
            console.error('error code fetching ' + url + ': ' + response.statusCode);
            doFetchedShow('');
            return;
          }

          if (!ensureTempDir()) {
            console.error('can\'t create temp dir');
            doFetchedShow('');
            return;
          }

          const file = fs.createWriteStream(nodeLocalPath);
          file.on('finish', () => {
            doFetchedShow(uriPath);
          });
          file.end(body);
        });
      }
    }
    else {
      return toasterLib.show(notice);
    }
    return true;
  },
  hide: function(notice) {
    return toasterLib.hide(notice);
  }
};

wrapper.init();

module.exports = wrapper;
