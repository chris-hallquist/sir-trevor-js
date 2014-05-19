/* Our base formatters */
(function(){

  var Bold = SirTrevor.Formatter.extend({
    title: "bold",
    cmd: "bold",
    keyCode: 66,
    text : "B"
  });

  var Italic = SirTrevor.Formatter.extend({
    title: "italic",
    cmd: "italic",
    keyCode: 73,
    text : "i"
  });

  var Color = SirTrevor.Formatter.extend({
    title: "color",
    cmd: "ForeColor",
    text: "color",

    onClick: function() {
      var color = prompt("Enter a color");
      document.execCommand(this.cmd, false, color);
    }
  });

  var Image = SirTrevor.Formatter.extend({
    title: "image",
    cmd: "InsertImage",
    text: "img",

    onClick: function() {
      var url = prompt("Enter image url");
      document.execCommand(this.cmd, false, url);
    }
  });

  var Link = SirTrevor.Formatter.extend({

    title: "link",
    iconName: "link",
    cmd: "CreateLink",
    text : "link",

    onClick: function() {

      var link = prompt(i18n.t("general:link")),
          link_regex = /((ftp|http|https):\/\/.)|mailto(?=\:[-\.\w]+@)/;

      if(link && link.length > 0) {

       if (!link_regex.test(link)) {
         link = "http://" + link;
       }

       document.execCommand(this.cmd, false, link);
      }
    },

    isActive: function() {
      var selection = window.getSelection(),
          node;

      if (selection.rangeCount > 0) {
        node = selection.getRangeAt(0)
                        .startContainer
                        .parentNode;
      }

      return (node && node.nodeName == "A");
    }
  });

  var UnLink = SirTrevor.Formatter.extend({
    title: "unlink",
    iconName: "link",
    cmd: "unlink",
    text : "link"
  });

  /*
    Create our formatters and add a static reference to them
  */
  SirTrevor.Formatters.Bold = new Bold();
  SirTrevor.Formatters.Italic = new Italic();
  SirTrevor.Formatters.Color = new Color();
  SirTrevor.Formatters.Image = new Image();
  SirTrevor.Formatters.Link = new Link();
  SirTrevor.Formatters.Unlink = new UnLink();

})();