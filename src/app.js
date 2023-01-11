/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let palo = ["♣", "♠", "♥", "♦"];
  let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

  let sorteoPalo = Math.floor(Math.random() * palo.length);
  let sorteoNumber = Math.floor(Math.random() * number.length);

  let contenedorNumber = number[sorteoNumber];
  let contenedorPalo = palo[sorteoPalo];

  let color = contenedorPalo == "♦" || contenedorPalo == "♥" ? "red" : "black";

  document.getElementById("header").innerHTML = contenedorPalo;
  document.getElementById("header").style.color = color;
  document.getElementById("body").innerHTML = contenedorNumber;
  document.getElementById("body").style.color = color;
  document.getElementById("footer").innerHTML = contenedorPalo;
  document.getElementById("footer").style.color = color;
};
