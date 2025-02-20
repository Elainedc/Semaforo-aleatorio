const luz = document.getElementById("luz");

function mudarCor() {
    const cores = ["red", "yellow", "green"];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)]; // Escolhe uma cor aleatória
    luz.style.backgroundColor = corAleatoria; // Aplica a cor ao semáforo
}

setInterval(mudarCor, 3000); // Muda a cor a cada 3 segundos (3000 milissegundos)