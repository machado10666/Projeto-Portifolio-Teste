// Seleciona os elementos do DOM
const btnHabilidades = document.getElementById('btnHabilidades');
const btnProjetos = document.getElementById('btnProjetos');
const btnSobre = document.getElementById('btnSobre');
const conteudoDinamico = document.getElementById('conteudoDinamico');

// Função para exibir o conteúdo e depois escondê-lo após 23 segundos
function exibirConteudo(conteudo) {
    conteudoDinamico.innerHTML = conteudo; // Exibe o conteúdo
    conteudoDinamico.style.display = 'block'; // Garante que a div seja visível

    // Configura um timeout para esconder o conteúdo após 5 segundos (5000 ms)
    setTimeout(function () {
        conteudoDinamico.style.display = 'none'; // Esconde a div
    }, 23000); // 23000 milissegundos = 23 segundos
}

// Evento para o botão "Habilidades"
btnHabilidades.addEventListener('click', function () {
    exibirConteudo(`
        <h2>Habilidades</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    `);
});

// Evento para o botão "Projetos"
btnProjetos.addEventListener('click', function () {
    exibirConteudo(`
        <h2>Projetos</h2>
        <ul>
            <li><a href="https://github.com/machado10666/aula-amigo-secreto.git" target="_blank">Amigo Secreto</a></li>
            <li><a href="https://github.com/machado10666/meu-projetobase-HTML.git/projeto2" target="_blank">HTML Básico</a></li>
            <li><a href="https://github.com/machado10666/Carrinho-Compras.git" target="_blank">Carrinho de Compras</a></li>
        </ul>
    `);
});

// Evento para o botão "Sobre mim"
btnSobre.addEventListener('click', function () {
    exibirConteudo(`
        <h2>Sobre mim</h2>
        <p>Olá! Sou Paulo Camargo Fernandes, adoro ler e estudar, tenho 52 anos e estou estudando programação na Alura. Pretendo no futuro me tornar um profissional dedicado e de qualidade na área de programação, Dev front-end ou back-end. Estou estudando JavaScript, HTML e CSS, adorando cada passo dessa jornada!</p>
    `);
    btnSobre.addEventListener('click', function () {
        exibirConteudo(`
            <h2>Sobre mim</h2>
            <p class="texto-grande">Olá! Sou Paulo Camargo Fernandes, adoro ler e estudar, tenho 52 anos e estou estudando programação na Alura. Pretendo no futuro me tornar um profissional dedicado e de qualidade na área de programação, Dev front-end ou back-end. Estou estudando JavaScript, HTML e CSS, adorando cada passo dessa jornada!</p></p>
        `);
    });
});