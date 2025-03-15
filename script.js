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

// Función para mostrar la sección seleccionada y ocultar las demás
function showSection2(sectionId, event) {
    // Prevenir comportamiento predeterminado del enlace
    if (event) event.preventDefault();

    // Guardar la sección actual en localStorage
    localStorage.setItem('currentSection2', sectionId);

    // Obtener todas las secciones
    var sections = document.querySelectorAll('.section_galery');

    // Ocultar todas las secciones
    sections.forEach(function (section) {
        section.classList.add('hidden_galery');
    });

    // Mostrar la sección seleccionada
    document.getElementById(sectionId).classList.remove('hidden_galery');
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
$(document).ready(function () {
    $('.galeria').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 8000,
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

// Evento de scroll centrado
let isAdjusting = false; // Variable para controlar el magnetismo

window.addEventListener("scroll", () => {
    if (isAdjusting) return; // Detener el efecto si está en enfriamiento

    // Selecciona todos los elementos con la clase 'magnetic'
    const magneticElements = document.querySelectorAll(".totalbox1, .totalbox2");
    const viewportHeight = window.innerHeight;

    magneticElements.forEach((element) => {
        const elementRect = element.getBoundingClientRect();
        const centerOffset = 10; // Rango muerto de 50px alrededor del centro del viewport

        // Verifica si el elemento está cerca del centro del viewport
        if (
            elementRect.top + centerOffset < viewportHeight / 2 &&
            elementRect.bottom - centerOffset > viewportHeight / 2
        ) {
            // Centra el elemento en el viewport
            const offset =
                elementRect.top + elementRect.height / 2 - viewportHeight / 2;

            window.scrollBy({
                top: offset,
                behavior: "smooth",
            });

            // Agrega una clase para resaltar el elemento centrado
            element.classList.add("centered");

            // Activa el enfriamiento del efecto magnético
            isAdjusting = true;
            setTimeout(() => {
                isAdjusting = false; // Desactiva el enfriamiento después de 500ms
            }, 400);
        } else {
            // Quita la clase si el elemento deja de estar centrado
            element.classList.remove("centered");
        }
    });
});

// Script para mostrar el elemento cuando está en el viewport
document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos todos los elementos con la clase '.lateral'
    const laterales = document.querySelectorAll(".lateral, .loading");
  
    if (laterales.length === 0) {
      console.error("No se encontraron elementos con la clase '.lateral'.");
      return;
    }
  
    // Crear un IntersectionObserver para detectar cuándo un elemento está visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Si el elemento aparece en pantalla, agrega la clase "visible"
          entry.target.classList.add("visible");
  
          // Después de 2 segundos, quita la clase "visible"
          setTimeout(() => {
            entry.target.classList.remove("visible");
          }, 1000); // 2 segundos
        }
      });
    });
  
    // Configurar el observer para observar cada uno de los elementos con la clase '.lateral'
    laterales.forEach((lateral) => {
      observer.observe(lateral);
    });
});



// Script para mostrar los controles del video al pasar el mouse
const video = document.getElementById('.video');
video.addEventListener('mousemove', () => {
    video.classList.add('show-controls');
    setTimeout(() => {
        video.classList.remove('show-controls');
    }, 2000);
});



