
let nav_links = document.getElementsByClassName('nav-links');

function hideNavLinks() {
  nav_links[0].style = "right: -200px";
}

function showNavLinks(){
  nav_links[0].style = "right: 0px";
}


// function reveal() {
//     var reveals = document.querySelectorAll(".reveal");
//
//     for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;
//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }
//
//
// window.addEventListener("scroll", reveal);
