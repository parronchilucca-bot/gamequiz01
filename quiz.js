const perguntas = [
    {
        categoria: "MINECRAFT",
        pergunta: "Qual criatura explode quando chega perto do jogador?",
        alternativas: ["Creeper", "Zumbi", "Esqueleto", "Aranha"],
        correta: 0
    },
    {
        categoria: "GTA V",
        pergunta: "Quais são os três protagonistas principais de GTA V?",
        alternativas: [
            "Michael, Franklin e Trevor",
            "CJ, Big Smoke e Ryder",
            "Arthur, John e Dutch",
            "Niko, Roman e Trevor"
        ],
        correta: 0
    },
    {
        categoria: "DARK SOULS",
        pergunta: "Para que servem as fogueiras em Dark Souls?",
        alternativas: [
            "Servem como pontos de descanso",
            "Servem para comprar armas",
            "Servem para criar personagens",
            "Servem para mudar o mapa"
        ],
        correta: 0
    },
    {
        categoria: "ROBLOX",
        pergunta: "O que é o Roblox?",
        alternativas: [
            "Uma plataforma com jogos e experiências criadas por usuários",
            "Um jogo exclusivamente de corrida",
            "Um jogo exclusivo de tiro",
            "Um aplicativo de edição de vídeos"
        ],
        correta: 0
    },
    {
        categoria: "RED DEAD REDEMPTION",
        pergunta: "Quem é o protagonista do primeiro Red Dead Redemption?",
        alternativas: [
            "John Marston",
            "Arthur Morgan",
            "Dutch van der Linde",
            "Micah Bell"
        ],
        correta: 0
    },
    {
        categoria: "MINECRAFT",
        pergunta: "Qual é o chefe encontrado na dimensão The End?",
        alternativas: [
            "Ender Dragon",
            "Wither",
            "Warden",
            "Elder Guardian"
        ],
        correta: 0
    },
    {
        categoria: "GTA V",
        pergunta: "Qual é a principal cidade de GTA V?",
        alternativas: [
            "Los Santos",
            "Liberty City",
            "Vice City",
            "San Fierro"
        ],
        correta: 0
    },
    {
        categoria: "DARK SOULS",
        pergunta: "Quem é conhecido como Lord of Cinder no primeiro Dark Souls?",
        alternativas: [
            "Gwyn",
            "Artorias",
            "Solaire",
            "Ornstein"
        ],
        correta: 0
    },
    {
        categoria: "ROBLOX",
        pergunta: "Qual linguagem é usada para programar no Roblox?",
        alternativas: [
            "Luau",
            "Java",
            "Python",
            "C++"
        ],
        correta: 0
    },
    {
        categoria: "RED DEAD REDEMPTION 2",
        pergunta: "Quem é o protagonista principal de Red Dead Redemption 2?",
        alternativas: [
            "Arthur Morgan",
            "John Marston",
            "Dutch van der Linde",
            "Bill Williamson"
        ],
        correta: 0
    },
    {
        categoria: "MINECRAFT",
        pergunta: "Qual material é usado para criar uma bancada de trabalho?",
        alternativas: [
            "Tábuas de madeira",
            "Pedra",
            "Ferro",
            "Diamante"
        ],
        correta: 0
    },
    {
        categoria: "GTA V",
        pergunta: "Qual protagonista mora em Sandy Shores?",
        alternativas: [
            "Trevor",
            "Michael",
            "Franklin",
            "Lamar"
        ],
        correta: 0
    },
    {
        categoria: "DARK SOULS",
        pergunta: "O que acontece quando o jogador morre em Dark Souls?",
        alternativas: [
            "Ele retorna à última fogueira e pode tentar recuperar suas almas",
            "Ele perde permanentemente o personagem",
            "O jogo é apagado",
            "Ele precisa começar uma nova campanha"
        ],
        correta: 0
    },
    {
        categoria: "RED DEAD REDEMPTION 2",
        pergunta: "Qual gangue é liderada por Dutch van der Linde?",
        alternativas: [
            "Gangue Van der Linde",
            "Gangue O'Driscoll",
            "Gangue Lemoyne Raiders",
            "Gangue Del Lobo"
        ],
        correta: 0
    },
    {
        categoria: "MISTURADO",
        pergunta: "Qual desses jogos é conhecido por permitir que jogadores criem suas próprias experiências?",
        alternativas: [
            "Roblox",
            "Dark Souls",
            "Red Dead Redemption 2",
            "GTA V"
        ],
        correta: 0
    }
];


let perguntaAtual = 0;
let acertos = 0;
let respondeu = false;


// ELEMENTOS DA PÁGINA

const categoria = document.getElementById("categoria");
const pergunta = document.getElementById("pergunta");
const alternativas = document.getElementById("alternativas");
const feedback = document.getElementById("feedback");

const contador = document.getElementById("contador");
const score = document.getElementById("score");

const porcentagem = document.getElementById("porcentagem");
const barraProgresso = document.getElementById("barraProgresso");

const proxima = document.getElementById("proxima");
const voltar = document.getElementById("voltar");


// MOSTRAR PERGUNTA

function mostrarPergunta() {

    respondeu = false;

    const atual = perguntas[perguntaAtual];

    categoria.textContent = atual.categoria;

    pergunta.textContent = atual.pergunta;

    contador.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    score.textContent = acertos;

    feedback.textContent = "";

    proxima.disabled = true;


    // ATUALIZAR PROGRESSO

    const progresso =
        ((perguntaAtual + 1) / perguntas.length) * 100;

    porcentagem.textContent =
        `${Math.round(progresso)}%`;

    barraProgresso.style.width =
        `${progresso}%`;


    // LIMPAR ALTERNATIVAS

    alternativas.innerHTML = "";


    // CRIAR BOTÕES

    atual.alternativas.forEach((texto, indice) => {

        const botao = document.createElement("button");

        botao.classList.add("alternativa");

        botao.textContent = texto;

        botao.addEventListener("click", () => {

            selecionarResposta(indice);

        });

        alternativas.appendChild(botao);

    });
}


// VERIFICAR RESPOSTA

function selecionarResposta(indice) {

    if (respondeu) {
        return;
    }

    respondeu = true;

    const atual = perguntas[perguntaAtual];

    const botoes =
        document.querySelectorAll(".alternativa");


    botoes.forEach(botao => {

        botao.disabled = true;

    });


    // RESPOSTA CORRETA

    if (indice === atual.correta) {

        acertos++;

        botoes[indice].classList.add("correta");

        feedback.textContent = "✅ Resposta correta!";

        feedback.className = "feedback-correto";

    }

    // RESPOSTA ERRADA

    else {

        botoes[indice].classList.add("errada");

        botoes[atual.correta].classList.add("correta");

        feedback.textContent =
            "❌ Resposta errada!";

        feedback.className = "feedback-errado";

    }


    score.textContent = acertos;

    proxima.disabled = false;
}


// PRÓXIMA PERGUNTA

proxima.addEventListener("click", () => {

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    } else {

        mostrarResultado();

    }

});


// VOLTAR

voltar.addEventListener("click", () => {

    if (perguntaAtual > 0) {

        perguntaAtual--;

        mostrarPergunta();

    } else {

        window.location.href = "index.html";

    }

});


// RESULTADO FINAL

function mostrarResultado() {

    const porcentagemFinal =
        Math.round((acertos / perguntas.length) * 100);


    let mensagem = "";


    if (porcentagemFinal >= 90) {

        mensagem = "🏆 MESTRE GAMER!";

    }

    else if (porcentagemFinal >= 70) {

        mensagem = "🔥 MUITO BOM!";

    }

    else if (porcentagemFinal >= 50) {

        mensagem = "🎮 BOM RESULTADO!";

    }

    else {

        mensagem = "🕹️ CONTINUE JOGANDO!";

    }


    document.querySelector("main").innerHTML = `

        <section class="quiz resultado">

            <h1>${mensagem}</h1>

            <div class="porcentagem-final">

                ${porcentagemFinal}%

            </div>

            <p>

                Você acertou <strong>${acertos}</strong>

                de <strong>${perguntas.length}</strong> perguntas.

            </p>

            <div class="botoes">

                <button onclick="location.reload()">

                    🔄 Fazer novamente

                </button>

                <button onclick="location.href='index.html'">

                    🏠 Voltar ao início

                </button>

            </div>

        </section>

    `;

}


// COMEÇAR

mostrarPergunta();