// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    
    // Validar que el nombre no esté vacío
    if (nombre === '') {
        mostrarAlerta('Por favor, ingrese un nombre válido.');
        return;
    }
    
    // Validar que el nombre no esté repetido
    if (amigos.includes(nombre)) {
        mostrarAlerta('Este nombre ya está en la lista.');
        return;
    }
    
    // Validar longitud mínima
    if (nombre.length < 2) {
        mostrarAlerta('El nombre debe tener al menos 2 caracteres.');
        return;
    }
    