// Modals
const modalImagen = document.querySelector('#modal_img');

modalImagen.addEventListener('show.bs.modal', function(event) {
  const enlace = event.relatedTarget;
  const rutaImg = enlace.getAttribute('data-bs-img');

  // Build Images
  const imagen = document.createElement('IMG');
  imagen.src = `img/${rutaImg}.jpg`;
  imagen.classList.add('img-fluid');
  imagen.alt = 'Gallery View';

  // Insert Images
  const contenidoModal = document.querySelector('.modal-body');
  contenidoModal.appendChild(imagen);
})

modalImagen.addEventListener('hidden.bs.modal', function ()
{
  const contenidoModal = document.querySelector('.modal-body');
  contenidoModal.textContent = '';
})