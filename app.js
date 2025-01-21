const nombreInput = document.querySelector("#amigo");
const listaAmigos = document.querySelector("#listaAmigos");
const resultado = document.querySelector("#resultado")

let amigos = [];

function agregarAmigo() {
    const nombre = nombreInput.value;
    
    if (!nombre || !nombre.trim()) {
        alert("Por favor, inserte un nombre.");
        nombreInput.value = "";
        return;
    }

    if (amigos.includes(nombre)) {
        alert("¡Este amigo ya esta en la lista!")
        nombreInput.value = "";
        return;
    }

    amigos.push(nombre);
    nombreInput.value = "";
    actualizarLista();
};

function actualizarLista() {
    listaAmigos.innerHTML = "";

    for (const amigo of amigos) {
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    }
}

function sortearAmigo() {
    if (!amigos.length) {
        alert("No hay amigos aun.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio]

    resultado.innerHTML = amigoSecreto
    amigos = []
    actualizarLista()
}