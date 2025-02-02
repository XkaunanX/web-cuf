// Esperar a que el documento se haya cargado completamente
window.addEventListener('load', function() {
    // Usar fetch para cargar el archivo contenido.html
    fetch('../../components/header.html')
        .then(response => response.text())  // Leer el archivo como texto
        .then(htmlString => {
            // Usar DOMParser para analizar el HTML
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlString, 'text/html');
            const contenido = doc.body.firstChild;  // Obtener el primer nodo del cuerpo del HTML

            // Insertar el contenido en el documento actual
            document.body.appendChild(contenido);
        })
        .catch(error => console.error('Error al cargar el archivo:', error)); // Manejo de errores
});