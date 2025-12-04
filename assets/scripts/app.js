// LÓGICA DEL ACORDEÓN PARA PREGUNTAS FRECUENTES
const preguntas = document.querySelectorAll('.faq-question');

preguntas.forEach(pregunta => {
    pregunta.addEventListener('click', () => {
        const item = pregunta.parentElement;
    
        // Alternar la clase 'active' para abrir/cerrar
        item.classList.toggle('active');
    });
});



