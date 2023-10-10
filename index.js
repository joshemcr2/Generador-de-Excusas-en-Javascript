window.onload = function() {
    
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
  