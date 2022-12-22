var scoWin;
var API;
var hasTerminated = false;
var hasInitialized = false;
var optionsOpen = true;
var initTimeoutMax = 20000;
var initTimeout = 0;
var fullPath = document.location.href.substr(0, document.location.href.lastIndexOf("/"));
var parentFolder = fullPath.substr(fullPath.lastIndexOf("/") + 1, fullPath.length);
var timeoutErrorDisplayed = false;
var launchWithEmbeddedParam = false;
var launchWithCustomApiProperty = false;
var storageObject;

loadManifest();
function loadManifest() {
  console.log("INICIA API");
  var xmlDoc = null;
  var file = "Curso/imsmanifest.xml";

  console.log(file);

  var useManifest = function () {
    try {
      var m = xmlDoc.getElementsByTagName("manifest")[0];

      var orgs = xmlDoc.getElementsByTagName("organizations")[0];
      var org = orgs.getElementsByTagName("organization")[0];
      var orgTitle = org.getElementsByTagName("title")[0].firstChild.nodeValue;

      var items = org.getElementsByTagName("item");
      var item = items[0];
      var itemTitle = item.getElementsByTagName("title")[0].firstChild.nodeValue;
      var itemMasteryScore = item.getElementsByTagName("adlcp:masteryscore")[0].firstChild.nodeValue;
      var itemIdentifier = item.getAttribute("identifier");
      var itemIdentifierRef = item.getAttribute("identifierref");

      var resources = xmlDoc.getElementsByTagName("resources")[0];
      var resource = resources.getElementsByTagName("resource");
      var itemResource = null;
      for (var i = 0; i < resource.length; i++) {
        var id = resource[i].getAttribute("identifier");
        var scormtype = resource[i].getAttribute("adlcp:scormtype");
        if (id == itemIdentifierRef && scormtype.toLowerCase() == "sco") {
          itemResource = resource[i];
          console.log(itemResource);
        }
      }
      var itemResourceHref = itemResource.getAttribute("href");

      console.log("IMS Manifest: Organization Title = &quot;" + orgTitle + "&quot;", "entry");
      if (items.length > 1) {
        console.log("IMS Manifest: SimpleAPI detected multiple SCO references - Only the first will be launched.", "entry");
      }
      console.log("IMS Manifest: First SCO Item = &quot;" + itemTitle + "&quot; (Mastery Score: " + itemMasteryScore + " / Identifier: &quot;" + itemIdentifier + "&quot;)", "entry");
      console.log("IMS Manifest: Resource &quot;" + itemIdentifierRef + "&quot; HREF for Item &quot;" + itemIdentifier + "&quot; = &quot;" + itemResourceHref + "&quot;");

      var obj = {};
      obj.id = m.getAttribute("identifier");
      obj.orgTitle = orgTitle;
      obj.itemTitle = itemTitle;
      obj.itemMasteryScore = itemMasteryScore;
      obj.itemResourceHref = itemResourceHref;

      $("launchFileAlt").value = itemResourceHref;

      return obj;
    } catch (e) {
      error = e.message;
      console.log("IMS Manifest: Cannot locate or parse manifest - " + error, "error");
      return false;
    }
  };

  /* - For Webkit - Not now though...
    // Check for the various File API support.
    if (window.File && window.FileReader) {
      alert('Great success! All the File APIs are supported.');
    } else {
      alert('The File APIs are not fully supported in this browser.');
    }
    */

  try {
    //Internet Explorer
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = false;
    xmlDoc.onreadystatechange = function () {
      if (xmlDoc.readyState == 4) {
        useManifest();
      }
    };
    var success = xmlDoc.load(file);
  } catch (e) {
    try {
      //Firefox, Mozilla, Opera, etc.
      xmlDoc = document.implementation.createDocument("", "", null);
      xmlDoc.async = false;
      xmlDoc.onload = function () {
        useManifest();
      };
      var success = xmlDoc.load(file);
    } catch (e) {
      try {
        //Google Chrome
        var xmlhttp = new window.XMLHttpRequest();
        xmlhttp.open("GET", file, false);
        xmlhttp.send(null);
        xmlDoc = xmlhttp.responseXML.documentElement;
        console.log(success);
      } catch (e) {
        error = e.message;
        console.log("IMS Manifest: Cannot locate or parse manifest - " + error, "error");

        return false;
      }
    }
  }
}

function launchSCO() {
  var launchFile = "Curso/sco/index.html";
  scoWin = newWin = window.open(launchFile);
  newWin.focus();

  if (scoWin !== null) {
    try {
      console.log("SCO Launched", "info");
      scoWin.focus();
      this.watchWin();
    } catch (e) {
      console.log("ERROR: " + e.description, "error");
    }
  } else {
    console.log("ERROR: SCO windows unable to open.  Please disable any popup blockers you might have enabled and ensure the launch file path is correct.", "error");
  }
  return scoWin;
}
