//type script es un lenguaje de tipado fuerte, una ves declaradas las variables
// no le podemos cambiar el tipo que es. eso nos da un grado de seguridad que js no tiene
// cuando declaramos una variable sin valor queda con valor any que toma como cualquier valor
//lo mejor seria declararla con los : string para que no tenga valor pero sepa lo que resivira como en D
let a = "hola";
let b: number = 3;
let c: boolean = true;
let d: string;

//como declaramos nuestras functiones arrow en el parametro tenemos que pasarle el tipo
const suma = (a: number, b: number) => {
  return a + b;
};

// para mejorar nuestro codigo siempre se pasa que tipo es el parametro
function saludar(name: string) {
  console.log(`hola ${name}`);
}

//tambien podemos definir los argumento y depues los tipos

function def2({ name, age }: { name: string; age: number }) {
  console.log(name, age);
}

//tambien podemos pasaru n obj y declara su contenido en la function
//al hacer esto tenemos que hacer uan destructuracion a nuestro obj para tener los valores
function defPersona(persona: { name: string; age: number }) {
  const { name, age } = persona;
  console.log(name, age);
}

//al tener inferencia en lo que retorna saba que lo que nos tiene que dar el return esun number
// tambien despues de pasar los argumentos podemos declarar el retorno de nuestra funcion
const inferenciaReturn = (name: string, age: number): number => {
  console.log(`${name}, ${age}`);
  return age;
};

// para tipar las funciones como es en el siguiente ejemplo lo hacemos como los demas ejemplos
//pero tenemos que que pasarle el parametro que resive y el tipo y le señalamos lo que devuelve con una flecha
//si la funcion no devuelve un tipo explicito como en el ejemplo anterior que le deciamos que es lo que devuelve
//le pasamos void y sabemos que la function no tiene return
const functionDeFunction = (fn: (name: string) => void) => {
  fn("perro");
};

const laFuntion = (name: string) => {
  console.log(name);
};

functionDeFunction(laFuntion);

//podemos tipar de 2 formas nuestras arrow funciones
const suma1 = (a: number, b: number): number => {
  return a + b;
};

const restar: (a: number, b: number) => number = (a, b) => {
  return a - b;
};

// never es para funciones que nunca devolveran nada,
// es bueno para la captura de errores en el proceso cual se monta la aplicacion
function throwError(message: string): never {
  throw new Error(message);
}
