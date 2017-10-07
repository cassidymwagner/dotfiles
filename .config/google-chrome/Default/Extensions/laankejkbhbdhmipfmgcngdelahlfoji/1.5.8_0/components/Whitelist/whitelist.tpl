    <h3>
        Allowed Sites
    </h3>
    <p>
        Add site(s) to allow in the text box below, then click "Add Allowed Site(s)". Some tips:
        <ul class="tips">
            <li>To allow multiple sites, add one per line.</li>
            <li>Do not type the http://</li>
            <li>If you want to allow the entire site, leave off the www (i.e. cnn.com instead of www.cnn.com)</li>
            <li>You can use a preceding asterisk as a wildcard (i.e. *.com allows all .com sites, or *foo allows all domains with the word "foo" in them)</li>
        </ul>
    </p>
    <textarea id="newAllowedSites"></textarea>
    <p>
        <input type="button" name="addAllowedSites" value="Add Allowed Site(s)">
    </p>
    <p>
       Click the <img src="common/img/remove_10x10.png"> to remove a site from the list.
    </p>
    <ul class="siteList" id="allowedSitesList">{{list}}</ul>
    <p>
        <em class="disclaimer">You can remove sites from the Allowed Sites list at any time, regardless of whether your time has expired.</em>
    </p>