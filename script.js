const typingEffect = document.getElementById('typing-effect');
const text = 'Y soy Programadora ';
const text2 = 'Frontend Developer';
let index = 0;

function type() {
    typingEffect.innerHTML = text.substring(0, index);
    typingEffect.innerHTML += '<br><span>' + text2.substring(0, index) + '</span>';
    index++;

    if (index <= text.length) {
        setTimeout(type, 100); // Velocidad de escritura
    } else {
        setTimeout(erase, 2000); // Tiempo antes de empezar a borrar
    }
}

function erase() {
    typingEffect.innerHTML = text.substring(0, index);
    typingEffect.innerHTML += '<br><span>' + text2.substring(0, index) + '</span>';
    index--;

    if (index >= 0) {
        setTimeout(erase, 50); // Velocidad de borrado
    } else {
        setTimeout(type, 500); // Tiempo antes de volver a escribir
    }
}

type();

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
      const servicesSection = document.getElementById('services');
      const scrollPosition = window.scrollY;
  
      const sectionTop = servicesSection.offsetTop;
      const sectionHeight = servicesSection.clientHeight;
  
      if (scrollPosition >= sectionTop - sectionHeight / 3) {
        servicesSection.classList.add('active');
      } else {
        servicesSection.classList.remove('active');
      }
    });
  });

  document.getElementById("enlace-sobre-mi").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el enlace redireccione a una página

    // Obtiene la sección "About Me" por su ID
    const seccionSobreMi = document.getElementById("about");

    // Desplaza la página para que la sección "About Me" sea visible
    seccionSobreMi.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("enlace-servicios").addEventListener("click", function(event) {
  event.preventDefault();
  const seccionServicios = document.getElementById("services");
  seccionServicios.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("enlace-contacto").addEventListener("click", function(event) {
  event.preventDefault();
  const seccionContacto = document.getElementById("contacto");
  seccionContacto.scrollIntoView({ behavior: "smooth" });
});