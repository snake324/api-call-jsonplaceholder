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
    let tabla = document.getElementById('tablaUsuarios');
    datos.forEach(usuario => {
        let fila = tabla.insertRow();
        fila.insertCell().textContent = usuario.id;
        fila.insertCell().textContent = usuario.name;
        fila.insertCell().textContent = usuario.address.city;
    });
}
crearTabla();

async function obtenerUsuario() {
    const id = document.getElementById('idUsuario').value;
    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const usuario = await respuesta.json();
    document.getElementById('resultado').innerHTML = `Nombre: ${usuario.name}, Teléfono: ${usuario.phone}`;
}