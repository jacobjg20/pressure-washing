
let nav_links = document.getElementsByClassName('nav-links');

function hideNavLinks() {
  nav_links[0].style = "right: -200px";
}

function showNavLinks(){
  nav_links[0].style = "right: 0px";
}
