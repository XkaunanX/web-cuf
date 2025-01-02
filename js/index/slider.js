// Esperar a que la página se cargue completamente
document.addEventListener("DOMContentLoaded", function() {

    // Seleccionamos las flechas de navegación
    const beforeArrow = document.getElementById("before");
    const nextArrow = document.getElementById("next");

    // Seleccionamos todas las secciones del slider
    const sliderBodies = document.querySelectorAll(".slider-body");

    let currentSlide = 0; // Inicializamos en el primer slide

    // Función para mostrar el slide actual
    function showSlide(index) {
        // Ocultamos todos los slides
        sliderBodies.forEach((slide, i) => {
            slide.classList.remove("slider-body--show");
        });
        
        // Mostramos el slide actual
        sliderBodies[index].classList.add("slider-body--show");
    }

    // Función para ir al slide anterior
    function prevSlide() {
        // Si estamos en el primer slide, volvemos al último
        currentSlide = (currentSlide === 0) ? sliderBodies.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    }

    // Función para ir al siguiente slide
    function nextSlide() {
        // Si estamos en el último slide, volvemos al primero
        currentSlide = (currentSlide === sliderBodies.length - 1) ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    }

    // Añadir evento a la flecha izquierda (anterior)
    beforeArrow.addEventListener("click", prevSlide);

    // Añadir evento a la flecha derecha (siguiente)
    nextArrow.addEventListener("click", nextSlide);

    // Inicializamos mostrando el primer slide
    showSlide(currentSlide);

});
