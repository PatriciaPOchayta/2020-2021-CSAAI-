//-- Manejador del evento clic sobre el párrafo test
//-- Cada vez que se hace clic en el párrafo se invoca a esta función
function manejador_parrafo()
{
  console.log("Clic sobre el párrafo...")
}

console.log("Ejecutando js...")

//-- Leer el párrafo identificado como test
const test = document.getElementById('test')

//-- Configurar el manejador para el evento de
//-- pulsación de botón: que se ejecute la
//-- funcion manejador_parrafo()
test.onclick = manejador_parrafo;



//Estamos usando la función manejador_parrafo como un objeto, y por eso NO usamos manejador_parrafo() con los paréntesis al final.
//Si se ponen los paréntesis lo que se hace es llamar a la función primero y asignar a onclick el valor devuelto por ella.

