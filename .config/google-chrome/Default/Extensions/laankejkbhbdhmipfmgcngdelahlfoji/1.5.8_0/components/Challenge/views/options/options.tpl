<link href="components/Challenge/views/options/options.css" rel="stylesheet" type="text/css">
<h3>
    Require Challenge
</h3>
<ul>
    <li>
        <p id="requireChallengeMsg" class="attention"></p>
        <p>
            If this option is selected, you will be required to complete a difficult -- but not impossible -- challenge before you are allowed to change any settings.
            This makes it inconvenient for you to change settings, therefore reducing the chances that you'll cheat.
        </p>
        <p>
            <i>Want to test the challenge before you turn it on? <a href="#" id="showChallenge">Click here</a>.</i>
        </p>
        <p>
            <input type="checkbox" id="requireChallengeCheckbox" {{checked}}>&#160;
            <label for="requireChallengeCheckbox">Yes, I would like to be challenged before being allowed to change any settings (including this one).</label>
        </p>
    </li>
    <li>
        <h4>
            Customize Challenge Text
        </h4>
        <p>
            Enter custom text to be used in the challenge (min {{minChallengeTextLength}} chars).
        </p>
        <textarea id="customChallenge">{{customChallenge}}</textarea>
        <p>
            <input type="button" name="setCustomChallenge" value="Set custom text">&#160;
            <a href="#" id="resetCustomChallenge">Reset to default</a>
        </p>
        <p>
            <em class="disclaimer">BE WARNED: If you enter something really long and difficult, you will have to complete the challenge with that text before you can change it.</em>
        </p>
    </li>
</ul>