// Modals
const modalImagen = document.querySelector('#modal_img');

if (modalImagen)
{
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

}

// Form validation
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()