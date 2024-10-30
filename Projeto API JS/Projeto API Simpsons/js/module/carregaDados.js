/**************************************************************
* Autor: Lucas Loiola Bezerra
* RA: 61818 
* Turma: ADS.4NB, noturno
* Objetivo: Manipular os dados de um array do programa Simpsons, utilizando o conceito de uma API
* data: 26/10/2024
* versão: 1.0
* obs. O arquivo JSON está em espanhol e não foi possivel traduzir.
**************************************************************** */


import { simpsons } from "./simpsons.js";

const setCreateCard = function (dadosPersonagens) {

    let divCardPersonagem = document.getElementById('CardPersonagem')

    dadosPersonagens.docs.forEach(function (item) {

        let divCaixaPersonagem = document.createElement('div')
        let h2CaixaTitulo = document.createElement('h2')
        let figureCaixaImagem = document.createElement('figure')
        let img = document.createElement('img')
        let divCaixaTexto = document.createElement('div')
        let pCaixaTexto = document.createElement('p')


        let textoTitulo = document.createTextNode(item.Nombre)
        let textoParagrafo = document.createTextNode(item.Historia)


        divCaixaPersonagem.setAttribute('class', 'caixa_personagem')
        h2CaixaTitulo.setAttribute('class', 'caixa_titulo')
        figureCaixaImagem.setAttribute('class', 'caixa_imagem')
        img.setAttribute('src', item.Imagen)
        img.setAttribute('alt', item.title)
        img.setAttribute('title', item.title)
        divCaixaTexto.setAttribute('class', 'caixa_texto')


        divCardPersonagem.appendChild(divCaixaPersonagem)
        divCaixaPersonagem.appendChild(h2CaixaTitulo)
        h2CaixaTitulo.appendChild(textoTitulo)
        divCaixaPersonagem.appendChild(figureCaixaImagem)
        figureCaixaImagem.appendChild(img)
        divCaixaPersonagem.appendChild(divCaixaTexto)
        divCaixaTexto.appendChild(pCaixaTexto)
        pCaixaTexto.appendChild(textoParagrafo)

    })

}

const getDadosSimpsonsAPI = async function () {

    let url = 'https://apisimpsons.fly.dev/api/personajes?limit=1000'

    let response = await fetch(url)

    let dados = await response.json()

    setCreateCard(dados)
}

window.addEventListener('load', function () {
    setCreateCard(simpsons[0])
    //getDadosSimpsonsAPI()
})