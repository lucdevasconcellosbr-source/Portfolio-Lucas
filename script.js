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

fetch("https://api.github.com/users/lucdevasconcellosbr-source/repos")
.then(res => res.json())
.then(data => {

const container = document.getElementById("repos-container");

data.slice(0,6).forEach(repo => {

const card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<h3>${repo.name}</h3>
<p>${repo.description || "Projeto disponível no GitHub"}</p>
<a href="${repo.html_url}" class="project-btn">Ver repositório</a>
`;

container.appendChild(card);

});
});
