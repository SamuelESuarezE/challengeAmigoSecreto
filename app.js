const nombreInput = document.querySelector("#amigo");

let amigos = [];

function agregarAmigo() {
    const nombre = nombreInput.value;
    
    if (!nombre || !nombre.trim()) {
        alert("Por favor, inserte un nombre.");
        nombreInput.value = ""
        return;
    }

    amigos.push(nombre);
    nombreInput.value = ""
};