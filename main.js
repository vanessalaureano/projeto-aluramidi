/* function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap; */

function tocaSom (idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla'); 

let contador = 0;

// condição enquanto estrutura de repetição

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    console.log(idAudio);

    tecla.onclick = function() {
        tocaSom('#som_tecla');
    };

    contador = contador + 1;

    console.log(contador);
}


