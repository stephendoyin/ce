addCSSMain('style.css');

// Include CSS file
function addCSSMain(filename){
    var head = document.getElementsByTagName('head')[0];

    var style = document.createElement('link');
    style.href = 'https://ce.lennertderyck.be/library/elements.css';
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.setAttribute['crossorigin','anonymous'];
    head.append(style);
}

// addCSSOptions('style.css');

// Include CSS file options
/* function addCSSOptions(filename){
  var head = document.getElementsByTagName('head')[0];

  var style = document.createElement('link');
  style.href = 'custom-elements/options.css';
  style.type = 'text/css';
  style.rel = 'stylesheet';
  head.append(style);
} */

addCSSFonts('style.css');

// Include CSS file
function addCSSFonts(filename){
    var head = document.getElementsByTagName('head')[0];

    var style = document.createElement('link');
    style.href = 'https://ce.lennertderyck.be/library/fonts.css';
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.setAttribute['crossorigin','anonymous'];
    head.append(style);
}

// Add collapse-function
function collapse(div) {
  var className = div.getAttribute("class");
  if(className=="collapse-area") {
    div.className = "collapse-area-active";
  }
  else{
    div.className = "collapse-area";
  }
}

// Add toggle function
/* function toggle(this) {
  this.classList.toggle("toggle-active");
  //div.classList.toggle("toggle-inact");
}

// Add toggle function
function addToggle() {
  classList.add("toggle-active");
}

// Hide html-element with 'toggle-active' class
function removeToggle() {
  var element = document.getElementsByClassName("toggle-active");
  element.classList.remove("toggle-active");
} */ 