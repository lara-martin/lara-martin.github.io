function convertLinks() {
  var y = document.getElementsByTagName("a");
  var i;
  for (i = 0; i < y.length; i++) {
    var parent = y[i].parentNode;
    if (parent.getAttribute("class") == "dropdown-content" || parent.getAttribute("id") == "stay"){
      continue;
    }
    if (y[i].getAttribute("class") == "screen-reader-only") {
    	continue;
    }
    y[i].setAttribute("target", "_blank");
    y[i].setAttribute("rel", "noopener noreferrer");
  }
}
