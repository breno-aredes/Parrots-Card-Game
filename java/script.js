
//função para adicionar cartas.
function adicionarcartas() {

    //Pergunta ao usuraio numero de cartas.
    let perguntaNumero = prompt("Com quantas cartas quer Jogar");
    //Contante para verificar se é par.
    let resto = perguntaNumero % 2;
    //divide por 2 para definir o numero de duplas. 
    let metade = perguntaNumero / 2


    //se for maior que 4, menor que 14 e par.
    if (perguntaNumero >= 4 && perguntaNumero <= 14 && resto === 0) {

        //enquanto o contador for menor que a metade adiciona dupla de cartas.
        for (i = 0; metade > i; i++) {
            const adicioanarCartas = document.querySelector("ul");
            adicioanarCartas.innerHTML += `<li>
        <div class="dupla">
            <div class="carta">
                <img class="parrot" src="./img/back.png" alt="">
            </div>
            <div class="carta">
                <img class="parrot" src="./img/back.png" alt="">
            </div>
        </div>
    </li>`
        }

    }
    //senão for, reinicia a função, perguntando novamente o numero de cartas.
    else {
        adicionarcartas();
    }
}
adicionarcartas();