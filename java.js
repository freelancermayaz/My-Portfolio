const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Web Devoleper";
    }, 0);
    setTimeout(() => {
        text.textContent = "Web Digainer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Grafix Digainer";
    }, 8000); //1s = 1000 milliseconds
    setTimeout(() => {
        text.textContent = "Digital Marketer";
    }, 12000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 16000);

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}