//dom

const silhueta = document.querySelector('#silhueta')
const btraiva = document.querySelector('#raiva')
const btalegria = document.querySelector('#alegria')
const bttristeza = document.querySelector('#tristeza')
const btnojo = document.querySelector('#nojo')

// evento

btraiva.addEventListener('click', raiva)
btalegria.addEventListener('click', alegria)
bttristeza.addEventListener('click', tristeza)
btnojo.addEventListener('click', nojo)

// funções

function raiva(){
    silhueta.src='images/raiva.png'
}

function alegria(){
    silhueta.src='images/alegria.png'
}

function tristeza(){
    silhueta.src='images/tristeza.png'
}

function nojo(){
    silhueta.src='images/nojo.png'
}