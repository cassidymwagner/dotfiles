<ul id="header">
    <li id="logo"><img src="/common/img/logo_popup.png" title="StayFocusd" alt="StayFocusd"></li>
    <li id="close-button">
        <a href="#" class="close" data-i18n="close">close</a>
    </li>
</ul>

<ul id="body">

    <li id="current-domain">
        <div class="label" data-i18n="currentlyOn">You are currently on:</div>
        <div class="domain base-domain">{{baseDomain}}</div>
    </li>

    <li id="status-msg"></li>

    <li id="left-col">
        <ul class="options">
            <li class="option">
                <a href="#" id="block-entire" title="Block all pages on this site">
                    <b data-i18n="block">Block</b> <span data-i18n="thisEntireSite">this entire site</span>
                </a>
            </li>
            <li class="more-options">
                <a href="#" id="show-advanced-options" data-i18n="advancedOptions">
                    Advanced options
                </a>
            </li>
        </ul>
    </li>

    <li id="right-col">
        <ul id="timer-box">
            <li id="timer-label" data-i18n="timeRemaining">TIME REMAINING</li>
            <li id="display-timer" data-i18n="loading">loading</li>
        </ul>
    </li>

    <li class="clear-fix"></li>

    <li id="advanced-options">
        <ul class="options">
            <li class="option">
                <a href="#" id="allow-entire" class="allow">
                    <b data-i18n="allow">Allow</b> <span data-i18n="thisEntireSite">this entire site</span>
                </a>
            </li>
            <li class="option only-allow">
                <a href="#" id="only-allow" class="allow"><span data-i18n="onlyAllowPagesOn">Only allow pages on</span> <b class="full-domain">{{fullDomain}}</b></a>
            </li>
            <li class="option only-block">
                <a href="#" id="only-block"><span data-i18n="onlyBlockPagesOn">Only block pages on</span> <b class="full-domain">{{fullDomain}}</b></a>
            </li>
            <li class="custom">
                <div class="label" data-i18n="enterCustomURL">Enter a custom url</div>
                <input type="text" id="custom-url" value="" />
                <a href="#" id="block-custom" data-i18n="blockCustomURL">
                    Block custom url
                </a>
                <span class="allow">
                    &#160;|&#160;
                    <a href="#" id="allow-custom" data-i18n="allowCustomURL">
                        Allow custom url
                    </a>
                </span>
            </li>
            <li class="option">
                <span data-i18n="blockAllowMultipleSites">Want to block or allow multiple sites at once?</span> <a href="#" id="showBlockedSitesOptions" data-i18n="clickHere">Click here</a>.
            </li>
        </ul>
    </li>
    <li id="footer">
        <ul class="options">
            <li class="more-options">
                <img src="/common/img/eye_16x16_nuclear.png" alt="Nuclear Option" id="nuclearOptionIcon" />
                <a href="#" id="show-nuclear-option" data-i18n="nuclearOption">
                    Nuclear Option
                </a> &#160;|&#160;
                <a href="#" id="show-options" data-i18n="settings">
                    Settings
                </a> &#160;|&#160;
                <a href="#" id="show-help" data-i18n="helpFAQ">
                    Help/FAQ
                </a>
            </li>
        </ul>
    </li>
</ul>