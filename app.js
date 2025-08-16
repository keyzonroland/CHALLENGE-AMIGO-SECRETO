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
        
    // Añadir el nombre al array
    amigos.push(nombre);
    
    // Limpiar el input
    inputAmigo.value = '';
    
    // Actualizar la lista visual
    actualizarListaAmigos();
    
    // Limpiar resultado anterior si existe
    limpiarResultado();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    
    if (amigos.length === 0) {
        lista.innerHTML = '';
        return;
    }
    
    lista.innerHTML = '';
    
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.style.cssText = 'list-style: none; margin: 5px 0; padding: 0; background: none; border: none; box-shadow: none; color: inherit; font-size: inherit;';
        lista.appendChild(li);
    });
}
// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya al menos 2 amigos para sortear
    if (amigos.length < 2) {
        mostrarAlerta('Debe añadir al menos 2 amigos para realizar el sorteo.');
        return;
    }
    
    // Añadir efecto de carga al botón
    const btnSortear = document.querySelector('.button-draw');
    btnSortear.classList.add('sorteo-loading');
    btnSortear.disabled = true;
    btnSortear.innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sorteando...';
    
    // Simular tiempo de sorteo para crear suspenso
    setTimeout(() => {
        // Generar índice aleatorio
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];
        
        // Mostrar resultado
        mostrarResultado(amigoSorteado);
        
        // Restaurar botón
        btnSortear.classList.remove('sorteo-loading');
        btnSortear.disabled = false;
        btnSortear.innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sortear amigo';
    }, 1500);
}