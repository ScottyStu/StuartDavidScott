// NAVBAR
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// SKILLS

window.onload = function calledEvent() {
  var elem = document.querySelectorAll(".container");
  var width = 10;
  var id = setInterval(frame, 15);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem[0].style.width = width + "%";
      elem[1].style.width = width + "%";
      elem[2].style.width = width + "%";
      elem[3].style.width = width + "%";
      elem[4].style.width = width + "%";
      // document.querySelector(".skills_html").innerHTML = width * 1 + "%";
      // document.querySelector(".skills_css").innerHTML = width * 1 + "%";
      // document.querySelector(".skills_js").innerHTML = width * 1 + "%";
      // document.querySelector(".skills_python").innerHTML = width * 1 + "%";
      // document.querySelector(".skills_wp").innerHTML = width * 1 + "%";
    }
  }
}
