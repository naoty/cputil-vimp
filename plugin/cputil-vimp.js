var INFO = xml`
<plugin name="copyfortweet-vimp.js"
    version="0.1"
    summary="Copy the title of a current page"
    href="http://github.com/naoty/cputil-vimp"
    xmlns="http://vimperator.org/namespaces/liberator">
    <author email="naoty.k@gmail.com">Naoto Kaneko</author>
    <license href="http://opensource.org/licenses/mit-license.php">MIT</license>
    <project name="Vimperator" minVersion="3.3"/>
    <p>Copy the title of a current page</p>
    <item>
    <tags>:cputil</tags>
    <spec>:cputil</spec>
    <description>
        <p>Copy the title of a current page</p>
    </description>
    </item>
</plugin>
`;

(function () {
    var description;

    description = "Copy the title";
    commands.addUserCommand(["cptitle"], description, function (args) {
        var title = content.document.title;
        util.copyToClipboard(title);
        liberator.echo("Copy to clipboard: " + title);
    });

    description = "Copy the title in a format `<title> <url>` for tweet";
    commands.addUserCommand(["cptweet"], description, function (args) {
        var title = content.document.title;
        var url = content.document.location.href;
        var text = title + " " + url;
        util.copyToClipboard(text);
        liberator.echo("Copy to clipboard: " + text);
    });

    description = "Copy the title in a format `[<url>](<url>)` for markdown";
    commands.addUserCommand(["cpmdurl"], description, function (args) {
        var url = content.document.location.href;
        var text = "[" + url + "]" + "(" + url + ")";
        util.copyToClipboard(text);
        liberator.echo("Copy to clipboard: " + text);
    });

    description = "Copy the title in a format `[<title>](<url>)` for markdown";
    commands.addUserCommand(["cpmdtitle"], description, function (args) {
        var title = content.document.title;
        var url = content.document.location.href;
        var text = "[" + title + "]" + "(" + url + ")";
        util.copyToClipboard(text);
        liberator.echo("Copy to clipboard: " + text);
    });
})();
