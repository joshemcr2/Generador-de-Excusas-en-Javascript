/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {
  let who = ["El Perro", "Mi Abuela", "su tortuga", "mi ave"];
  let action = ["comio", "robo", "quebro", "rompio"];
  let what = ["mi tarea", "las llaves", "el reloj"];
  let when = ["hoy", "ayer", "el lunes", "hace un mes", "hace unas horas"];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
