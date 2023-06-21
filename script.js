async function obtenerDatos() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const datos = await respuesta.json();
    return datos;
}


async function imprimirDatos() {
    const datos = await obtenerDatos();
    console.log(datos);
}
imprimirDatos();

