const nombreInput = document.querySelector("#amigo");
const listaAmigos = document.querySelector("#listaAmigos");

let amigos = [];

function agregarAmigo() {
    const nombre = nombreInput.value;
    
    if (!nombre || !nombre.trim()) {
        alert("Por favor, inserte un nombre.");
        nombreInput.value = "";
        return;
    }

    amigos.push(nombre);
    nombreInput.value = ""
    actualizarLista()
};

function actualizarLista() {
    listaAmigos.innerHTML = ""

    for (const amigo of amigos) {
        listaAmigos.innerHTML += `<li>${amigo}</li>`
    }
}