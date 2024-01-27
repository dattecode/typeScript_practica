// enums nos sirve para una coleccion de datos finita para su futuro uso
// el enum tambien se puede utilizar como un type
//les podemos asignar valores para asi tener un control aun mas estricto de nuestro enum

const enum ERROR_TYPES {
  NOT_FOUND = "notFound",
  UNAUTHORIZED = "unauthorized",
  FORBIDDEN = "forbidden",
}

const mostrarMensaje = (tipoDeError: ERROR_TYPES) => {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log("no se encuentra el recurso");
  }
  if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log("no tienes permiso de acceso");
  }
  if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log("no tienes permiso de acceso");
  }
};

//aserciones de tipos 
const canvas = document.querySelector("canvas")

if (canvas instanceof HTMLCanvasElement){
  const ctx = canvas.getContext("2d")
}
