// NAVBAR
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// LANDING Image

function Back() {
    document.getElementById("Landing_page").style.backgroundImage = "url(Images/Pot_plant.jpg)";
 }