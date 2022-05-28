// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};
var windowHeight = window.innerHeight; 
console.log(windowHeight)

function scrollFunction() {
  if ((document.body.scrollTop > (0.2*windowHeight)) || (document.documentElement.scrollTop > (0.2*windowHeight))) {
    document.getElementById("id_logo").style.gridRow = "3/4";
    document.getElementById("id_logo").style.padding = "0.5vh 4vw 0.5vh 4vw";
    document.getElementById("id_logo").style.marginLeft = 0;
    document.getElementById("id_nav").style.gridColumnStart = 2;
    document.getElementById("id_cortina").style.gridColumnStart = 2;
    document.getElementById("id_nav").style.marginLeft = "3vw";
    console.log("Abajo");

  } else {
    document.getElementById("id_logo").style.gridRow = "1/3";
    document.getElementById("id_logo").style.padding = 0;
    document.getElementById("id_logo").style.marginLeft = "1vw";
    document.getElementById("id_nav").style.gridColumnStart = 1;
    document.getElementById("id_cortina").style.gridColumnStart = 1;
    document.getElementById("id_nav").style.marginLeft = 0;
    console.log("Arriba");
  }
}
