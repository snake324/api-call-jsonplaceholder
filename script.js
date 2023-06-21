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

async function crearTabla() {
    const datos = await obtenerDatos();
    let tabla = '<table><tr><th>ID</th><th>Nombre</th><th>Ciudad</th></tr>';
    datos.forEach(usuario => {
        tabla += `<tr><td>${usuario.id}</td><td>${usuario.name}</td><td>${usuario.address.city}</td></tr>`;
    });
    tabla += '</table>';
    document.body.innerHTML = tabla;
}
crearTabla();