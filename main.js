/*

function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap; 

*/

/* 

function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

// while" condição "enquanto" estrutura de repetição

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    // template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    };

    contador = contador + 1;
}

// "for" condição "para" estrutura de repetição 

*/

function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        // alert('Elemento não encontrado.');
        console.log('Elemento não encontrado ou seletor inválido.');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

