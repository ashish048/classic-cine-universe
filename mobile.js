// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.background = "#046081";
    document.getElementById("a").style.color = "white";
    document.getElementById("b").style.color = "white";
    document.getElementById("c").style.color = "white";
    document.getElementById("d").style.color = "white";
    document.getElementById("e").style.color = "white";
    document.getElementById("f").style.color = "white";
    document.getElementById("g").style.color = "white";
  } else {
    document.getElementById("navbar").style.background = "white";
    document.getElementById("a" ).style.color = "black";
      document.getElementById("b").style.color = "black";
    document.getElementById("c").style.color = "black";
    document.getElementById("d").style.color = "black";
    document.getElementById("e").style.color = "black";
    document.getElementById("f").style.color = "black";
    document.getElementById("g").style.color = "black";
  }
}