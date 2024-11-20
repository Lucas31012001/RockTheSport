let currentIndex = 0;
const comentarios = document.querySelectorAll('.bocadillo'); 
const contenedores = document.querySelectorAll('.autor-contenedor-inner .contenedor-2'); 

const totalComentarios = comentarios.length;

function mostrarComentario(index) {
    comentarios.forEach((comentario) => {
        comentario.style.transform = `translateX(-${index * 100}%)`; 
    });

    contenedores.forEach((contenedor) => {
        contenedor.style.transform = `translateX(-${index * 111}%)`; 
    });
}

function siguienteComentario() {
    currentIndex = (currentIndex + 1) % totalComentarios;
    mostrarComentario(currentIndex);
}

function previoComentario() {
    currentIndex = (currentIndex - 1 + totalComentarios) % totalComentarios; 
    mostrarComentario(currentIndex);
}

mostrarComentario(currentIndex);
