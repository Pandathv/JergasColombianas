document.addEventListener('DOMContentLoaded', function() {
    // Ya no necesitas 'randomImageContainer' para la imagen de fondo,
    // ahora modificaremos el estilo del 'hero-with-overlay'.
    const heroSection = document.querySelector('.hero-with-overlay');

    const images = [
        '/JergasColombianas-main/img/unoCarru.jpeg',
        '/JergasColombianas-main/img/dosCarru.jpg', 
        '/JergasColombianas-main/img/tresCarru.jpg',
        '/JergasColombianas-main/img/cuatCarru.png',
        '/JergasColombianas-main/img/cincCarru.jpeg'
    ];
    
    function setRandomBackgroundImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        const imgSrc = images[randomIndex];
        
        // Establecer la imagen como background-image del .hero-with-overlay
        heroSection.style.backgroundImage = `url('${imgSrc}')`;
        // Asegúrate de que las propiedades background-size y background-position estén bien en CSS.
    }
    
    // Mostrar imagen al cargar
    setRandomBackgroundImage();
    
    // Manejar búsqueda
    document.querySelector('.big-search-button').addEventListener('click', function() {
        const searchTerm = document.querySelector('.big-search-input').value;
        if(searchTerm.trim() !== '') {
            alert(`Buscando: "${searchTerm}"`);
            // Lógica de búsqueda aquí
        }
    });
});

//Este es para las palabras destacadas 
document.addEventListener('DOMContentLoaded', function() {
 let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');

    // Verifica si los elementos se encontraron
    if (next && prev) {
        next.addEventListener('click', function() {
            let items = document.querySelectorAll('.item');
            // Verifica si hay items antes de manipularlos
            if (items.length > 0) {
                document.querySelector('.slide').appendChild(items[0]);
            }
        });

        prev.addEventListener('click', function() {
            let items = document.querySelectorAll('.item');
            // Verifica si hay items antes de manipularlos
            if (items.length > 0) {
                document.querySelector('.slide').prepend(items[items.length - 1]);
            }
        });
    } else {
        console.error("Error: Los botones 'next' o 'prev' no se encontraron en el DOM.");
    }
});