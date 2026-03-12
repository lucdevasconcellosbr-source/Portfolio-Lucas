// Animação de partículas do fundo
particlesJS("particles-js", {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5,
      random: false
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      out_mode: "out"
    }
  },

  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: false
      }
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.4
        }
      }
    }
  },

  retina_detect: true
});


// Animações ao rolar a página
ScrollReveal().reveal('.hero-text', {
  distance: '40px',
  duration: 800,
  origin: 'left'
});

ScrollReveal().reveal('.hero-img', {
  distance: '40px',
  duration: 800,
  origin: 'right'
});

ScrollReveal().reveal('.card', {
  distance: '40px',
  duration: 800,
  origin: 'bottom',
  interval: 200
});

ScrollReveal().reveal('section h2', {
  distance: '20px',
  duration: 600,
  origin: 'bottom'
});
