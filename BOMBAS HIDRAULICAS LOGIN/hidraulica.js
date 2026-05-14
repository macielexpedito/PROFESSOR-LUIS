const botoes = document.querySelectorAll(".btn");

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        alert("Mais informações em breve!");
    });
});