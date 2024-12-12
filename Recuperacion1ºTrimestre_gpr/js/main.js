import { agregarFilaATabla } from './funciones.js';


const formulario = document.getElementById('formularioDatos');
const cuerpoTabla = document.querySelector('#tablaDatos tbody');
const galeria = document.getElementById('galeria');
const vistaImagen = document.getElementById('vistaImagen');
const imagenAmpliada = document.getElementById('imagenAmpliada');
const botonVolver = document.getElementById('botonVolver');
const encabezadoGaleria = document.querySelector('#seccionGaleria h1');
const seccionGaleria = document.getElementById('seccionGaleria');


formulario.addEventListener('submit', (e) => {
  e.preventDefault(); //para que no recargue la pagina
  
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const preference = document.querySelector('input[name="preference"]:checked').value;
  const notifications = document.getElementById('notificaciones').checked ? 'On' : 'Off';

  // se le llama a la función para agregar la fila a la tabla
  agregarFilaATabla(cuerpoTabla, email, name, preference, notifications);

  formulario.reset();
});

// manejo de la galería de imágenes
galeria.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    const src = e.target.src;
    const alt = e.target.alt;

    imagenAmpliada.src = src;
    imagenAmpliada.alt = alt;

  // oculta la galería y muestra la imagen ampliada.
    galeria.classList.add('d-none');
    vistaImagen.classList.remove('d-none');
    encabezadoGaleria.classList.add('d-none'); 
    seccionGaleria.classList.add('fondo-blanco'); 
  }
});

// vuelve a la galería
botonVolver.addEventListener('click', () => {
  galeria.classList.remove('d-none');
  vistaImagen.classList.add('d-none');
  encabezadoGaleria.classList.remove('d-none'); 
});
