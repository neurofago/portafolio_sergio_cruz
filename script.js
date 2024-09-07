// Función para mostrar la sección seleccionada y ocultar las demás
function showSection(sectionId) {
    // Guardar la sección actual en localStorage
    localStorage.setItem('currentSection', sectionId);
    // Obtener todas las secciones
    var sections = document.querySelectorAll('.section');
    // Ocultar todas las secciones
    sections.forEach(function(section) {
        section.classList.add('hidden');
    });
    // Mostrar la sección seleccionada
    document.getElementById(sectionId).classList.remove('hidden');
}

// Mostrar la sección guardada en localStorage al cargar la página
window.onload = function() {
    var currentSection = localStorage.getItem('currentSection');
    if (currentSection) {
        showSection(currentSection);
    } else {
        showSection('index');
    }
};


// Script para hacer el header sticky al hacer scroll
window.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0); // Verifica el estado inicial

    window.addEventListener("scroll", function() {
        header.classList.toggle("sticky", window.scrollY > 30);
    });
});

// Script para inicializar Slick Slider
$(document).ready(function(){
    $('.galeria').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        dots: true
    });
});

// script para hacer el hover tactil
document.querySelectorAll('.mi-elemento').forEach(function(elemento) {
    elemento.addEventListener('touchstart', function() {
        elemento.classList.add('hover');
    });
    elemento.addEventListener('touchend', function() {
        elemento.classList.remove('hover');
    });
});