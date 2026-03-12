document.addEventListener("DOMContentLoaded", function(){

fetch("https://api.github.com/users/lucdevasconcellosbr-source/repos")
.then(response => response.json())
.then(repos => {

const container = document.getElementById("repos-container");

if(!container) return;

repos
.sort((a,b)=> b.stargazers_count - a.stargazers_count)
.slice(0,6)
.forEach(repo => {

const card = document.createElement("div");

card.className = "card";

card.innerHTML = `
<h3>${repo.name}</h3>
<p>${repo.description ? repo.description : "Projeto disponível no GitHub"}</p>
<a href="${repo.html_url}" target="_blank" class="project-btn">Ver repositório</a>
`;

container.appendChild(card);

});

})
.catch(error => console.log("Erro ao carregar repos:", error));

});
