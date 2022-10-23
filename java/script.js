// cria lista com todos elementos 
let listaGifs = [`/img/bobrossparrot.gif`, `/img/bobrossparrot.gif`, `/img/explodyparrot.gif`,
    `/img/explodyparrot.gif`, `/img/fiestaparrot.gif`, `/img/fiestaparrot.gif`, `/img/metalparrot.gif`,
    `/img/metalparrot.gif`, `/img/revertitparrot.gif`, `/img/revertitparrot.gif`, `/img/tripletsparrot.gif`,
    `/img/tripletsparrot.gif`, `/img/unicornparrot.gif`, `/img/unicornparrot.gif`];

//cria variavel que recebera numero de cartas
let perguntaNumero = 0;

//função para adicionar cartas de acondo com o numero digitado.
function adicionarcartas() {

    //Pergunta ao usuraio numero de cartas.
    perguntaNumero = prompt("Com quantas cartas quer Jogar");
    //Contante para verificar se é par.
    let resto = perguntaNumero % 2;
    //divide por 2 para definir o numero de duplas. 
    let metade = perguntaNumero / 2;
    //nova lista onde sera distribuidos todos os elementos de acordo com o numero digitado .
    let novalista = [];
    //fomar a nova lista
    for (i = 0; perguntaNumero > i; i++) {
        novalista[i] = listaGifs[i];
    }

    //função deixar a lista aleatoria.
    function comparador() {
        return Math.random() - 0.5;
    }
    novalista.sort(comparador);

    //se for maior que 4, menor que 14 e par.
    if (perguntaNumero >= 4 && perguntaNumero <= 14 && resto === 0) {

        //enquanto o contador for menor que a metade adiciona dupla de cartas.
        for (i = 0; metade > i; i++) {
            const adicioanarCartas = document.querySelector("ul");

            adicioanarCartas.innerHTML += `<li>
        <div class="dupla">
            <div onclick="virar(this)" class="carta">
                <img class="parrot" src="./img/back.png" alt="">
                <img class="gif sumir" src=".${novalista[i]}" alt=""> 
            </div>
            <div onclick="virar(this)" class="carta">
                <img class="parrot" src="./img/back.png" alt="">
                <img class="gif sumir" src=".${novalista[metade + i]}" alt="">
            </div>
        </div>
    </li>`
        }/* nota: lista[i] para a primeira linha lista[metade+i] para a segunda linha ja que ultilizei a metede 
    do numero digitado para criar o for e coloquei cartas em coluna de duas em duas*/
    }
    //senão for, reinicia a função, perguntando novamente o numero de cartas.
    else {
        adicionarcartas();
    }
}
adicionarcartas();

let contadorDeJogadas = 0;
let contadorDeCartasViradas = 0;
//lista que recebe os elementos
let listaDeCartasViradas = [];

//Remove ou adiciona a classe virar na carta, e sumir nas imagens
function virar(elemento) {

    elemento.classList.toggle("virar");
    elemento.children[0].classList.toggle("sumir");
    elemento.children[1].classList.toggle("sumir");

    //salva o elemento na lista para comparar depois
    listaDeCartasViradas[contadorDeCartasViradas] = elemento
    // contador recebe  +1
    contadorDeCartasViradas++
    contadorDeJogadas++

    // se contadorDeCartas for igual 2 e as cartas diferentes
    // esta sendo comparado o src do segundo filho do elemento (o diretorio dos gifs)
    if (contadorDeCartasViradas === 2 && listaDeCartasViradas[0].children[1].src !== listaDeCartasViradas[1].children[1].src) {
        // função pré definida para demorar 1000 milissegundos(1s) para executar a outra função
        setTimeout(desvirar, 1000);

    }
    // se contadorDeCartas for igual 2 e as cartas iguais
    else if (contadorDeCartasViradas === 2 && listaDeCartasViradas[0].children[1].src === listaDeCartasViradas[1].children[1].src) {

        naoVira();

        contadorDeCartasViradas = 0;
    }
}

//função para desvirar as cartas quando elas forem diferentes
function desvirar() {
    listaDeCartasViradas[0].classList.toggle("virar");
    listaDeCartasViradas[0].children[0].classList.toggle("sumir");
    listaDeCartasViradas[0].children[1].classList.toggle("sumir");

    listaDeCartasViradas[1].classList.toggle("virar");
    listaDeCartasViradas[1].children[0].classList.toggle("sumir");
    listaDeCartasViradas[1].children[1].classList.toggle("sumir");

    contadorDeCartasViradas = 0;
}

//desativa o ponteiro, impedindo o click.
function naoVira() {
    listaDeCartasViradas[0].classList.toggle("desativa");

    listaDeCartasViradas[1].classList.toggle("desativa");

    contadorDeCartasViradas = 0;

    //para aparecer você ganhou apos a carta virar.
    setTimeout(verificaSeGanhou, 500);
}

//conta quantas cartas tem a classe .desativa, e compara com o numero de cartas digitada para começar o jogo.
function verificaSeGanhou() {
    let numerodecartasviradas = (document.querySelectorAll('.desativa').length);
    if (Number(perguntaNumero) === numerodecartasviradas) {
        //não encontrei o motivo de ter que transformar a variavel em numero, mas so funcionou assim.
        alert(`Você ganhou em ${contadorDeJogadas} jogadas!`);
    }
}

//                   --------------------bonus--------------------
//cronometro
//reiniciar a partida 