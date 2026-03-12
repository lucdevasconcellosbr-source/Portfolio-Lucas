particlesJS("particles-js", {
  particles: {
    number: { value: 70 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: {
      enable: true,
      distance: 150,
      opacity: 0.2
    }
  }
});

ScrollReveal().reveal('.card', {
distance: '40px',
duration: 800,
easing: 'ease-in-out',
origin: 'bottom',
interval: 200
});

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
