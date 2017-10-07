<link href="components/Challenge/views/overlay/overlay.css" rel="stylesheet" type="text/css">
<div class="modalOverlay">
    <a href="#" class="close small">close</a>
    <h3>Challenge</h3>
    <p class="instructions">
        In order to change your settings, you'll have to pass this challenge first. You must re-type the paragraph below, letter for letter, <b>without making a single typo</b>. If you make a typo, or hit the backspace or delete key, everything you typed will be cleared, and you'll have to start again.
    </p>
    <fieldset>
        <legend>Re-type the text below</legend>
        <div id="challengeSource">{{text}}</div>
    </fieldset>
    <textarea id="challengeText"></textarea>
    <a href="#" class="close"><b>Nevermind, I give up.</b></a>
    <a id="productivityBypass">Let me access <i>limited</i> settings so I can be more productive</a>
</div>