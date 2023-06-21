async function obtenerDatos() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const datos = await respuesta.json();
    return datos;
}
