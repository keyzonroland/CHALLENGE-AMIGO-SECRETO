CHALLENGE AMIGO SECRETO
Aplicación web simple (HTML, CSS y JavaScript) para gestionar una lista de nombres y realizar un sorteo aleatorio de “amigo secreto”. Forma parte del challenge de Oracle ONE/Alura.

Características
Añadir nombres a una lista mediante un input y botón.
Validaciones:
No permite nombres vacíos.
No permite duplicados.
Mínimo 2 caracteres por nombre.
Para sortear se requieren al menos 2 nombres.
Muestra los nombres agregados como texto simple (sin botones extra).
Sorteo aleatorio con pequeño efecto de carga en el botón.
Mensajes de alerta mediante un modal accesible.
Soporte de teclado: Enter agrega; Escape cierra el modal.
Cómo usar
Abre index.html en tu navegador.
Escribe un nombre y pulsa “Añadir” (o Enter).
Repite hasta tener al menos 2 nombres.
Pulsa “Sortear amigo” para obtener el resultado.
Estructura del proyecto

index.html         
Página principalstyle.css          
Estilos (diseño responsivo + modal)app.js              
Lógica: agregar, validar, listar y sortearassets/             
Imágenes utilizadas en la UI
Nota: El archivo app_clean.js no es utilizado por la página. Puede eliminarse si no se requiere.

Tecnologías
HTML5
CSS3
JavaScript 
Accesibilidad y UX
Modal con enfoque enviado al botón “OK”.
Cierre del modal con Escape o clic fuera del contenido.
Anuncios de resultado con aria-live en la lista de resultados.
Ejecutar localmente
No requiere instalación ni servidor. Basta con abrir index.html en un navegador moderno.
Opcional: usar una extensión como “Live Server” para recarga automática.
Despliegue (opcional)
Puedes publicar la carpeta en GitHub Pages desde la rama main (opción “Deploy from a branch”) y apuntar al directorio raíz.

Licencia
Uso educativo con fines de práctica del challenge. Ajusta la licencia según tus necesidades.
