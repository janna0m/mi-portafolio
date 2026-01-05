// JavaScript Document
function resposiveNav() {
  const nav = document.getElementById("myTopnav");
  const icon = document.getElementById("bars");
  console.log("holii")
  if (nav.className === "topnav") {
    console.log(icon)
    icon.className = "fa fa-times"

    //además de ser de la clase topnav, también lo va a ser de responsive
    nav.className += " responsive";
  } else {
    //vuelve a ser solo de la clase topnav
    nav.className = "topnav";
    icon.className = "fa fa-bars"

  }
}
