const perguntas = [

    // =========================
    // 5 FÁCEIS
    // =========================

    {
        nivel: "FÁCIL",
        categoria: "RED DEAD REDEMPTION II",
        pergunta: "Qual é o nome do protagonista de Red Dead Redemption 2?",
        alternativas: [
            { texto: "Arthur Morgan", correta: true },
            { texto: "John Marston", correta: false },
            { texto: "Dutch van der Linde", correta: false },
            { texto: "Micah Bell", correta: false }
        ]
    },

    {
        nivel: "FÁCIL",
        categoria: "MINECRAFT",
        pergunta: "Qual desses jogos possui o Ender Dragon?",
        alternativas: [
            { texto: "Minecraft", correta: true },
            { texto: "Roblox", correta: false },
            { texto: "GTA V", correta: false },
            { texto: "Dark Souls", correta: false }
        ]
    },

    {CIL",
        categoria: "GTA
        nivel: "FÁ V",
        pergunta: "Qual protagonista de GTA V é um ex-assaltante de bancos?",
        alternativas: [
            { texto: "Michael De Santa", correta: true },
            { texto: "Franklin Clinton", correta: false },
            { texto: "Trevor Philips", correta: false },
            { texto: "Lamar Davis", correta: false }
        ]
    },

    {
        nivel: "FÁCIL",
        categoria: "MINECRAFT",
        pergunta: "Qual recurso é usado para criar circuitos e mecanismos em Minecraft?",
        alternativas: [
            { texto: "Redstone", correta: true },
            { texto: "Obsidiana", correta: false },
            { texto: "Quartzo", correta: false },
            { texto: "Carvão", correta: false }
        ]
    },

    {
        nivel: "FÁCIL",
        categoria: "DARK SOULS",
        pergunta: "Qual item é usado para recuperar vida em Dark Souls?",
        alternativas: [
            { texto: "Estus Flask", correta: true },
            { texto: "Titanite", correta: false },
            { texto: "Humanity", correta: false },
            { texto: "Homeward Bone", correta: false }
        ]
    },


    // =========================
    // 5 MÉDIAS
    // =========================

    {
        nivel: "MÉDIO",
        categoria: "ROBLOX",
        pergunta: "Qual linguagem é usada pelo Roblox para criar scripts?",
        alternativas: [
            { texto: "Luau", correta: true },
            { texto: "Java", correta: false },
            { texto: "Python", correta: false },
            { texto: "C#", correta: false }
        ]
    },

    {
        nivel: "MÉDIO",
        categoria: "RED DEAD REDEMPTION II",
        pergunta: "Quem é o líder da gangue à qual Arthur Morgan pertence?",
        alternativas: [
            { texto: "Dutch van der Linde", correta: true },
            { texto: "Hosea Matthews", correta: false },
            { texto: "John Marston", correta: false },
            { texto: "Bill Williamson", correta: false }
        ]
    },

    {
        nivel: "MÉDIO",
        categoria: "GTA V",
        pergunta: "Qual personagem possui uma habilidade especial que permite controlar melhor o tempo durante a direção?",
        alternativas: [
            { texto: "Franklin", correta: true },
            { texto: "Michael", correta: false },
            { texto: "Trevor", correta: false },
            { texto: "Lester", correta: false }
        ]
    },

    {
        nivel: "MÉDIO",
        categoria: "MINECRAFT",
        pergunta: "Em qual dimensão ficam as End Cities?",
        alternativas: [
            { texto: "The End", correta: true },
            { texto: "Nether", correta: false },
            { texto: "Overworld", correta: false },
            { texto: "Deep Dark", correta: false }
        ]
    },

    {
        nivel: "MÉDIO",
        categoria: "DARK SOULS",
        pergunta: "Qual atributo está relacionado aos espaços disponíveis para sintonizar magias em Dark Souls?",
        alternativas: [
            { texto: "Attunement", correta: true },
            { texto: "Endurance", correta: false },
            { texto: "Vitality", correta: false },
            { texto: "Resistance", correta: false }
        ]
    },


    // =========================
    // 5 DIFÍCEIS
    // =========================

    {
        nivel: "DIFÍCIL",
        categoria: "MINECRAFT",
        pergunta: "Qual encantamento aumenta o tempo que o jogador consegue permanecer submerso?",
        alternativas: [
            { texto: "Respiração", correta: true },
            { texto: "Afinidade Aquática", correta: false },
            { texto: "Proteção", correta: false },
            { texto: "Passos Profundos", correta: false }
        ]
    },

    {
        nivel: "DIFÍCIL",
        categoria: "RED DEAD REDEMPTION II",
        pergunta: "Qual personagem é um dos principais mentores de Arthur Morgan dentro da gangue?",
        alternativas: [
            { texto: "Hosea Matthews", correta: true },
            { texto: "Micah Bell", correta: false },
            { texto: "Javier Escuella", correta: false },
            { texto: "Charles Smith", correta: false }
        ]
    },

    {
        nivel: "DIFÍCIL",
        categoria: "GTA V",
        pergunta: "Qual personagem possui uma habilidade especial que aumenta sua resistência e causa mais dano?",
        alternativas: [
            { texto: "Trevor", correta: true },
            { texto: "Michael", correta: false },
            { texto: "Franklin", correta: false },
            { texto: "Lester", correta: false }
        ]
    },

    {
        nivel: "DIFÍCIL",
        categoria: "MINECRAFT",
        pergunta: "Qual destes blocos é usado para construir a estrutura de um portal para o Nether?",
        alternativas: [
            { texto: "Obsidiana", correta: true },
            { texto: "Bedrock", correta: false },
            { texto: "Pedra do End", correta: false },
            { texto: "Deepslate", correta: false }
        ]
    },

    {
        nivel: "DIFÍCIL",
        categoria: "ROBLOX",
        pergunta: "Qual destes termos se refere à linguagem de programação derivada de Lua usada atualmente pelo Roblox?",
        alternativas: [
            { texto: "Luau", correta: true },
            { texto: "LuaScript", correta: false },
            { texto: "Roblox Code", correta: false },
            { texto: "RBLX", correta: false }
        ]
    }
];


// ======================================================
// EMBARALHAR ALTERNATIVAS
// ======================================================

function embaralhar(array) {

    const copia = [...array];

    for (let i = copia.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
}


// ======================================================
// ELEMENTOS DO HTML
// ======================================================

const perguntaElement = document.getElementById("pergunta");
const alternativasElement = document.getElementById("alternativas");
const categoriaElement = document.getElementById("categoria");

const contadorElement = document.getElementById("contador");
const scoreElement = document.getElementById("score");

const porcentagemElement = document.getElementById("porcentagem");
const barraElement = document.getElementById("barraProgresso");

const feedbackElement = document.getElementById("feedback");

const voltarButton = document.getElementById("voltar");
const proximaButton = document.getElementById("proxima");


// ======================================================
// VARIÁVEIS
// ======================================================

let perguntaAtual = 0;
let acertos = 0;

// Guarda a resposta escolhida em cada pergunta
let respostas = new Array(perguntas.length).fill(null);

// Guarda a ordem das alternativas para não mudar
// quando o usuário voltar para uma pergunta
let alternativasEmbaralhadas = [];


// ======================================================
// PREPARAR ALTERNATIVAS
// ======================================================

perguntas.forEach((pergunta, index) => {

    alternativasEmbaralhadas[index] =
        embaralhar(pergunta.alternativas);

});


// ======================================================
// MOSTRAR PERGUNTA
// ======================================================

function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    // Pergunta
    perguntaElement.textContent = pergunta.pergunta;

    // Categoria
    categoriaElement.textContent = pergunta.categoria;

    // Contador
    contadorElement.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    // Pontuação
    scoreElement.textContent = acertos;

    // Porcentagem do progresso
    const progresso =
        Math.round(((perguntaAtual + 1) / perguntas.length) * 100);

    porcentagemElement.textContent = `${progresso}%`;

    barraElement.style.width = `${progresso}%`;

    // Limpa feedback
    feedbackElement.textContent = "";

    // Limpa alternativas
    alternativasElement.innerHTML = "";

    // Verifica se já respondeu essa pergunta
    const respostaAnterior = respostas[perguntaAtual];

    // Cria as alternativas
    alternativasEmbaralhadas[perguntaAtual].forEach(
        (alternativa, index) => {

            const botao = document.createElement("button");

            botao.classList.add("alternativa");

            botao.textContent = alternativa.texto;

            // Se já respondeu anteriormente
            if (respostaAnterior !== null) {

                botao.disabled = true;

                if (alternativa.correta) {
                    botao.classList.add("correta");
                }

                if (
                    respostaAnterior === alternativa.texto &&
                    !alternativa.correta
                ) {
                    botao.classList.add("errada");
                }

            } else {

                botao.addEventListener("click", () => {

                    selecionarResposta(alternativa);

                });

            }

            alternativasElement.appendChild(botao);
        }
    );


    // Botão voltar
    if (perguntaAtual === 0) {
        voltarButton.disabled = true;
    } else {
        voltarButton.disabled = false;
    }


    // Botão próxima
    if (respostaAnterior === null) {

        proximaButton.disabled = true;
        proximaButton.textContent = "Próxima →";

    } else {

        proximaButton.disabled = false;

        if (perguntaAtual === perguntas.length - 1) {
            proximaButton.textContent = "Finalizar →";
        } else {
            proximaButton.textContent = "Próxima →";
        }
    }
}


// ======================================================
// SELECIONAR RESPOSTA
// ======================================================

function selecionarResposta(alternativa) {

    // Impede selecionar novamente
    if (respostas[perguntaAtual] !== null) {
        return;
    }

    // Salva a resposta
    respostas[perguntaAtual] = alternativa.texto;


    // Verifica se acertou
    if (alternativa.correta) {

        acertos++;

        feedbackElement.textContent = "✓ Resposta correta!";

    } else {

        feedbackElement.textContent = "✗ Resposta incorreta.";

    }


    // Atualiza pontuação
    scoreElement.textContent = acertos;


    // Marca visualmente as respostas
    const botoes =
        alternativasElement.querySelectorAll("button");

    botoes.forEach(botao => {

        botao.disabled = true;

        const texto = botao.textContent;

        const respostaCorreta =
            perguntas[perguntaAtual].alternativas.find(
                alternativa => alternativa.correta
            );

        // Mostra a correta
        if (texto === respostaCorreta.texto) {

            botao.classList.add("correta");

        }

        // Se foi a escolhida e estava errada
        if (
            texto === alternativa.texto &&
            !alternativa.correta
        ) {

            botao.classList.add("errada");

        }

    });


    // AGORA SIM libera o botão Próxima
    proximaButton.disabled = false;

    if (perguntaAtual === perguntas.length - 1) {

        proximaButton.textContent = "Finalizar →";

    } else {

        proximaButton.textContent = "Próxima →";

    }
}


// ======================================================
// BOTÃO PRÓXIMA
// ======================================================

proximaButton.addEventListener("click", () => {

    // Não faz nada se ainda não respondeu
    if (respostas[perguntaAtual] === null) {
        return;
    }

    // Última pergunta
    if (perguntaAtual === perguntas.length - 1) {

        mostrarResultado();

        return;
    }

    // Próxima pergunta
    perguntaAtual++;

    mostrarPergunta();
});


// ======================================================
// BOTÃO VOLTAR
// ======================================================

voltarButton.addEventListener("click", () => {

    if (perguntaAtual === 0) {
        return;
    }

    perguntaAtual--;

    mostrarPergunta();
});


// ======================================================
// RESULTADO
// ======================================================

function mostrarResultado() {

    const porcentagem =
        Math.round((acertos / perguntas.length) * 100);

    const main = document.querySelector("main");

    main.innerHTML = `

        <section class="quiz">

            <div id="categoria">RESULTADO</div>

            <h1>🎮 Quiz finalizado!</h1>

            <div class="resultado">

                <h2>${porcentagem}%</h2>

                <p>
                    Você acertou
                    <strong>${acertos}</strong>
                    de
                    <strong>${perguntas.length}</strong>
                    perguntas.
                </p>

                <p>
                    ${
                        porcentagem >= 90
                        ? "🏆 Mestre Gamer!"
                        : porcentagem >= 70
                        ? "🔥 Muito bom!"
                        : porcentagem >= 50
                        ? "🎮 Bom resultado!"
                        : "🕹️ Continue jogando!"
                    }
                </p>

                <button
                    class="restart-btn"
                    onclick="location.reload()"
                >
                    🔄 Jogar novamente
                </button>

            </div>

        </section>

    `;
}


// ======================================================
// INICIAR
// ======================================================

mostrarPergunta();
