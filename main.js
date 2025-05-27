// Cambia el navbar al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

{
  const carousel = document.querySelector('.carousel-thumbnails');
  const scroller = document.querySelector('.thumbnails__scroller');
  const thumbnails = document.querySelectorAll('.thumbnails__image');

  scroller.addEventListener('click', e => {
    const target = e.target;

    if (target.matches('.thumbnails__image')) {
      const index = [...thumbnails].indexOf(target);
      carousel.goToSlide(index);
    }
  });

  carousel.addEventListener('sl-slide-change', e => {
    const slideIndex = e.detail.index;

    [...thumbnails].forEach((thumb, i) => {
      thumb.classList.toggle('active', i === slideIndex);
      if (i === slideIndex) {
        thumb.scrollIntoView({
          block: 'nearest'
        });
      }
    });
  });
}

// gsap animation
let logoImg = document.querySelector('.logo img');
if (logoImg) {
  gsap.from(logoImg, {
    scale: 0.5,
    opacity: 0,
    duration: 2,
  });
} else {
  console.warn('No se encontró el logo para animar');
}

// Seleccionamos el header
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo'); // Seleccionamos el logo

    console.log(header, logo);

    let lastScrollY = window.scrollY; // Variable para guardar la última posición de scroll

    window.addEventListener('scroll', () => {
        // Si estamos en un dispositivo móvil (menos de 769px de ancho)
        if (window.innerWidth <= 768) {
            if (window.scrollY > lastScrollY) {
                // Hacia abajo: Ocultar el header
                header.classList.add('hide-header');
                logo.style.display = 'none'; // Ocultar el logo
            } else {
                // Hacia arriba: Mostrar el header
                header.classList.remove('hide-header');
                logo.style.display = 'block'; // Mostrar el logo
            }
        }
        lastScrollY = window.scrollY; // Actualizamos la última posición de scroll
    });

    // También podemos manejar el caso inicial al cargar la página en móvil
    // para asegurarnos de que el logo esté oculto si el scroll no está en la parte superior
    if (window.innerWidth <= 768 && window.scrollY > 0) {
        logo.style.display = 'none';
    } else if (window.innerWidth <= 768 && window.scrollY === 0) {
        logo.style.display = 'block'; // Asegura que el logo se muestre al inicio de la página en móvil
    }

    // Opcional: Para manejar el redimensionamiento de la ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            // Si el tamaño de la ventana es mayor a móvil, asegúrate de que el header y logo se muestren
            header.classList.remove('hide-header');
            logo.style.display = 'block';
        } else {
            // Si volvemos a tamaño móvil, aplicar la lógica inicial
            if (window.scrollY > 0) {
                logo.style.display = 'none';
            } else {
                logo.style.display = 'block';
            }
        }
    });