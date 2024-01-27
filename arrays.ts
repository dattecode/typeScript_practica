//Arrays
//para podes usar nuestro arrays tenemos que tiparlos
// le pasamos el tipo y un [] para señalar de que tipo es el array

const languages: string[] = [];
//const languages:Array<string> = [] otra forma de declararlo

languages.push("JavaScript");

// si queremos un array con mas de 1 tipo de datos que pasarle entre parentesis los tipos

const typeLenguages: (string | number)[] = [];
typeLenguages.push("typeScript");
typeLenguages.push(5);

//matrices
/*
 [
  ["X","0","X"]
  ["0","X","0"]
  ["X","","0"]
]
*/
//definimos los tipos que puede llevar nuestras celdas el cual solo son 3
type CellValues = "X" | "0" | "";

// le decimos los espacios que pueden llevar nuestras celdas que son 3 para que no se pase
// le pasamos los valores que aceptan esas 3 celdas ya definido anteriormente
type GameBoard = [
  [CellValues, CellValues, CellValues],
  [CellValues, CellValues, CellValues],
  [CellValues, CellValues, CellValues]
];

// ejemplos de como se veria esta definicion de fomar limpia
const gameBoard: GameBoard = [
  ["X", "0", "X"],
  ["0", "X", "0"],
  ["X", "", "0"],
];
