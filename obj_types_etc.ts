import * as crypto from 'crypto';

// podemos usar nuestro metodos de js en ts sin problemas como forEach
const arrNames = ["name1", "name2", "name3"];
arrNames.forEach((namee) => console.log(namee));

// cuando declaramos nuestro obj queda inmediatamente con sus valores predeterminados
// lo cual despues no podemos cambiar ni agregar mas propiedades tal como si fuera un contracto con el obj

const persona = {
  name: "miguel",
  age: 30,
};

console.log(persona.name + "," + persona.age);

// types alias nos permite definir el objeto y ls propiedas que llevara
// siempre que creamos un tipo de obj se hace en pascal case

type Hero = {
  name: string;
  age: number;
};

let hero1: Hero = {
  name: "thor",
  age: 1500,
};

let hero2: Hero = {
  name: "naruto",
  age: 13,
};

// al crear una function que creara nuestro objeto para que sea tomada de nuetro typo
// es necesario declararle el typo del objeto tal como declaramos el tipo de las variables
// si no le decimos el tipo creara un obj con lso mismo valores pero seran de distinto tipo
// esto puede consumir procesos inecesario
function createHero(name: string, age: number): Hero {
  return { name, age };
}

// otra definicion
const createHero2 = (hero: Hero): Hero => {
  const { name, age } = hero;
  return { name, age };
};

//templates union Tipes le damos una estructura de como tiene que ser
// este tipo como usaremos uuid nos da 5 bloques de codigo string exactos para la id
// entonces creamos un tipo que nos diga como tiene que ser y se lo pasamos al tipo de obj
type HeroId = `${string}-${string}-${string}-${string}-${string}`;

// optional propities
// cuando le pasamos un ? al nuestra propiedad la hacemos opcional
// esto significa que si esta bien, pero si no el objeto no hay problema todo bien igual
type HeroPro = {
  readonly id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean;
};
// al da la propiedad reandonly le decimos que solo sera de lectura
// entonces si o si tiene que ser declarada al crearse y es inmutable
function createHeroOptional(name: string, age: number): HeroPro {
  return { id: crypto.randomUUID(), name, age, isActive: true };
}

//templates union type
//ejemplo 2
type HexadecimalColor = `#${string}`;

const color: HexadecimalColor = "#033ff";

//union types
// con lo union  types podemos crear tipos los cuales pueden heradar nuestro codigo
// muy buen concepto para separar por categorias nuestra informacion como cargos tipo de producto etc,
type HeroPowerScale =
  | "local"
  | "planetary"
  | "galatic"
  | "universal"
  | "multiversal";

type HeroPro2 = {
  readonly id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean;
  powerScale?: HeroPowerScale;
};

// intersection types nos sirve para crear un objeto con 2 propiedades
// con esto podemos separa nuestros valores por prioridades y depues unirlos
//tambien podemos tomar lo mas importante y depues agregar valores secundarios
type HeroBasicInfo = {
  name: string;
  age: number;
};

type HeroProperties = {
  readonly id?: HeroId;
  isActive?: boolean;
  powerScale?: HeroPowerScale;
};

type PerfectHero = HeroBasicInfo & HeroProperties;

// typeof en typeScript podemos typar objetos ya creados para la reutilizacion del mismo}
// entonces extraemos los valores para reutilizarlo

const address = {
  planet: "Earth",
  city: "bersalles",
};

type Address = typeof address;

const address2: Address = {
  planet: "marte",
  city: "MuskCity",
};

// type from functions

const createAddress = () => {
  return {
    planet: "tierra",
    city: "antofagasta",
  };
};

// el returnType nos devuelve el tipo de la funcion y lo guarda como un typo
// entonces podemos recuperar los tipos de la funcion para reutilizarlos 
type AddressFunc = ReturnType<typeof createAddress>;
const adres: AddressFunc = {
  planet:"hola",
  city:"mundo"
}

console.log(adres);

