// cria lista com todos elementos 
let listaGifs = [`/img/bobrossparrot.gif`, `/img/bobrossparrot.gif`, `/img/explodyparrot.gif`,
    `/img/explodyparrot.gif`, `/img/fiestaparrot.gif`, `/img/fiestaparrot.gif`, `/img/metalparrot.gif`,
    `/img/metalparrot.gif`, `/img/revertitparrot.gif`, `/img/revertitparrot.gif`, `/img/tripletsparrot.gif`,
    `/img/tripletsparrot.gif`, `/img/unicornparrot.gif`, `/img/unicornparrot.gif`];



//função para adicionar cartas de acondo com o numero digitado.
function adicionarcartas() {

    //Pergunta ao usuraio numero de cartas.
    let perguntaNumero = prompt("Com quantas cartas quer Jogar");
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
    </li>` // nota: lista[i] para a primeira linha lista[metade+i] para a segunda linha
        }

    }
    //senão for, reinicia a função, perguntando novamente o numero de cartas.
    else {
        adicionarcartas();
    }
}
adicionarcartas();

//Remove ou adiciona a classe virar na carta, e sumir nas imagens
function virar(elemento) {

    elemento.classList.toggle("virar");
    elemento.children[0].classList.toggle("sumir");
    elemento.children[1].classList.toggle("sumir");
}


// Embaralhar a lista
// distribuir a lista nas duas colunas
// Comparar a igualdade das imagens ao serem viradas
// fixar se iguais / desvirar se diferentes
// adicionar contador x de jogadas
// exibir mensagem "Você ganhou em x jogadas!"