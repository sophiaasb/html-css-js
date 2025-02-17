//dom
const vazio = document.querySelector('#vazio')
const btscarface = document.querySelector('#scarface')
const btpremonicao = document.querySelector('#premonicao')
const btseven = document.querySelector('#seven')
const btbatman = document.querySelector('#batman')

// evento
btscarface.addEventListener('click', scarface)
btpremonicao.addEventListener('click', premonicao)
btseven.addEventListener('click', seven)
btbatman.addEventListener('click', batman)

// funções
function scarface(){
    vazio.src='images/scarface.jpg'
    sinopse.textContent = `Após receber residência permanente nos Estados Unidos em troca do assassinato de um oficial do governo cubano, Tony Montana se torna o chefe do tráfico de drogas em Miami. Matando qualquer um que entre em seu caminho, Tony eventualmente se torna o maior traficante da Flórida, controlando quase toda a cocaína que entra em Miami. Porém, a pressão da polícia, as guerras com cartéis colombianos e sua própria paranoia servem para alimentar as chamas de sua eventual queda.`
}

function premonicao(){
    vazio.src='images/premonicao.png'
    sinopse.textContent = `Alex Browning está embarcando em uma viagem para Paris. Alex sofre uma premonição, pela qual vê o avião explodir momentos depois de sair do chão. Alex insiste que todo mundo saia do avião e sete pessoas, incluindo Alex, são obrigados a desembarcar. Todos veem quando o avião realmente explode como uma bola de fogo. Ele e os outros sobreviventes brevemente enganam a morte, mas não serão capazes de evitar o seu destino por muito tempo. Um a um, esses fugitivos de destino viram vítimas da morte.`
}

function seven(){
    vazio.src='images/seven.jpg'
    sinopse.textContent = `A ponto de se aposentar, o detetive William Somerset pega um último caso, com a ajuda do recém-transferido David Mills. Juntos, descobrem uma série de assassinatos e logo percebem que estão lidando com um assassino que tem como alvo pessoas que ele acredita representar os sete pecados capitais.`
}

function batman(){
    vazio.src='images/batman.webp'
    sinopse.textContent = `Batman tem conseguido manter a ordem em Gotham com a ajuda de Jim Gordon e Harvey Dent. No entanto, um jovem e anárquico criminoso, conhecido apenas como Coringa, pretende testar o Cavaleiro das Trevas e mergulhar a cidade em um verdadeiro caos.`
}