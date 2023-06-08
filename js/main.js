//preguntas para la función final

let boyorgirl = prompt('¿Eres un chico, una chica o prefieres no utilizar un pronombre?').toLowerCase();
let nombre = prompt('¿Cuál es tu nombre?');
let comida = prompt('¿Cuál es tu comida favorita?');

//número del pokemon del 1 al 9, dejando alertas también para los casos donde no completan con los valores requeridos


let promptpokemon = 0; 
while (promptpokemon < 1 || promptpokemon > 9) {
   userInput = prompt('Elige tu pokemon utilizando su número, del 1 al 9');
 
   if (isNaN(userInput)) {
     alert('¡Ingresa un valor numérico!');
   } else {
     promptpokemon = parseInt(userInput);
   }
 
   if (promptpokemon < 1 || promptpokemon > 9) {
     alert('¡Del 1 al 9 te dije!');
   }
 }
let nropokemon = parseInt(promptpokemon);

//acá se le asigna el nombre al pokemon usando el número que ingresaron

let pokemonName;
switch (nropokemon) {
  case 1:
    pokemonName = 'Bulbasaur';
    break;
  case 2:
    pokemonName = 'Ivysaur';
    break;
  case 3:
    pokemonName = 'Venusaur';
    break;
  case 4:
    pokemonName = 'Charmander';
    break;
  case 5:
    pokemonName = 'Charmeleon';
    break;
  case 6:
    pokemonName = 'Charizard';
    break;
  case 7:
    pokemonName = 'Squirtle';
    break;
  case 8:
    pokemonName = 'Wartortle';
    break;  
  case 9:
     pokemonName = 'Blastoise';
     break;
  default:
    pokemonName = 'MissingNo';
}

//función donde se conjugan todos los datos para saludar al usuario y se le informa de su pokemon elegido


function saludarEntrenador() {
   if (boyorgirl === "chico") {
     alert('¡Hola, entrenador ' + nombre + ' de pueblo ' + comida + '!' + ' Has elegido a ' + pokemonName + '.');
   } else if (boyorgirl === "chica") {
     alert('¡Hola, entrenadora ' + nombre + ' de pueblo ' + comida + '!' + ' Has elegido a ' + pokemonName + '.');
   } else {
     alert('Te damos la bienvenida, ' + nombre + ' de pueblo ' + comida + '!' + ' Has elegido a ' + pokemonName + '.');
   }
 }

 saludarEntrenador();

 