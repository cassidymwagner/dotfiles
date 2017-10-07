// Saves options to localStorage.
function save_options() {
  for (index=0; index < document.iconSelect.icon.length; index++) {
    if (document.iconSelect.icon[index].checked) {
      var radioValue = document.iconSelect.icon[index].value;
      break;
    }
  }

  localStorage["pf_icon"] = radioValue;

  // Select the icon if any value is found in local storage
  if(radioValue) {
    chrome.browserAction.setIcon({
      path: "images/" + radioValue + ".png"
    });
  }

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = chrome.i18n.getMessage("options_saved");
  // Timeout value Tweakable
  setTimeout(function() { status.innerHTML = "";}, 1750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var currentIcon = localStorage["pf_icon"];
  if (!currentIcon) {
    currentIcon = 'print-friendly-green-19px';
  }

  for (index=0; index < document.iconSelect.icon.length; index++) {
    if (document.iconSelect.icon[index].value == currentIcon) {
      document.iconSelect.icon[index].checked = true;
      break;
    }
  }
}

function localize() {
  var elements = document.getElementsByClassName('localize');
  for(var i = 0; i < elements.length; i++){
    var el = elements[i];
    el.innerHTML = chrome.i18n.getMessage(el.id) || el.innerHTML;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  restore_options();
  localize();
  document.getElementById('save_button').addEventListener('click', save_options);
});
