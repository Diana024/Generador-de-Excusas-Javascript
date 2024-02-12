/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // Declaración de arrays dentro de una function () {aqui}
  function excusas() {
    let who = ["The dog", "My grandma", "His turtle"];
    let action = ["ate", "peed", "crushed", "broke "];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch"
    ];

    // Valor ramdom de cada array
    let indice1 = Math.floor(Math.random() * who.length);
    let indice2 = Math.floor(Math.random() * action.length);
    let indice3 = Math.floor(Math.random() * what.length);
    let indice4 = Math.floor(Math.random() * when.length);

    // Concatenación de valores Ramdom para armar oración
    return (
      who[indice1] +
      " " +
      action[indice2] +
      " " +
      what[indice3] +
      " " +
      when[indice3]
    );
  }
  // Parte del scrip para ver resultados en HTML
  document.getElementById("excuse").innerHTML = excusas();
};
