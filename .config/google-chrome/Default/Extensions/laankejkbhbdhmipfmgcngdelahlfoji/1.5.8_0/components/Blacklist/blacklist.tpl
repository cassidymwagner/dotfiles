    <h3>
        Blocked Sites
    </h3>
    <p id="blockedSitesMsg" class="attention"></p>
    <div id="outgoingLinks" class="hideOnBypass">
        <h4>The Stalker Option</h4>
        <p>
            <input type="checkbox" name="stalkerOption" id="stalkerOption"><label for="stalkerOption">Keep the StayFocusd timer running while visiting links from blocked sites, even if those sites aren't blocked.</label>
        </p>
        <p>
            <a href="#" id="howDoesThisWork">How does this work?</a>
        </p>
        <div id="stalkerExplanation" style="display:none;">
            <p>
                The Stalker Option is designed to follow you when you visit links clicked from blocked sites. Sites like Reddit, Feedly, and RSS readers are notorious time-wasters, and blocking them doesn't do much good. The problem is, you don't waste a lot of time on the sites themselves. Instead, you waste time visiting the sites they link to. You might spend 5 minutes on Reddit, and 5 hours on sites you clicked from there.
            </p>
            <p>
                The Stalker Option solves this problem by keeping your countdown running whenever you're visiting sites via links from blocked sites.
            </p>
            <p>
                For example, if you have Reddit blocked, and you click a link to Wikipedia from there, time will be deducted while you're on Wikipedia ... even though Wikipedia isn't a blocked site. And if you click a link from Wikipedia to yet another site, the timer will <i>still</i> keep running. As long as your click path ultimately leads back to a blocked site, time will be deducted.
            </p>
        </div>
    </div>
    <p>
        Add site(s) to block in the text box below, then click "Add Blocked Site(s)".
        <ul class="tips">
            <li>To block multiple sites, add one per line.</li>
            <li>Do not type the http://</li>
            <li>If you want to block the entire site, leave off the www (i.e. cnn.com instead of www.cnn.com)</li>
            <li>You can use a preceding asterisk as a wildcard (i.e. *.com blocks all .com sites, or *foo blocks all domains with the word "foo" in them)</li>
        </ul>
    </p>
    <p>
        <i>Want some suggestions of sites you should block? <a href="#" id="showSuggestedSitesList">Check out this list</a>.</i>
    </p>
    <p>
        <i>Want to stop yourself from disabling StayFocusd? <a href="#" id="blockExtensionsPage">Block the Chrome Extensions page</a>!</i>
    </p>
    <div id="suggestedSites">
        <p>
            Click the <img src="common/img/add_10x10.png"> to add a site to your Blocked Sites list.
        </p>
        <ul class="siteList" id="suggestedSitesList"></ul>
    </div>
    <textarea id="newBlockedSites"></textarea>
    <p>
        <input type="button" name="addBlockedSites" value="Add Blocked Site(s)">
    </p>
    <p class="hideOnBypass">
        Click the <img src="common/img/remove_10x10.png"> to remove a site from the list.
    </p>

    <ul class="siteList" id="blockedSitesList">{{list}}</ul>

    <p>
        <em class="disclaimer">You cannot remove a site from the Blocked Sites list once your time for the day has expired.</em>
    </p>