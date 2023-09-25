// Pom ----------------------------------------
function tocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
for (let contador = 0; contador < listaDeTeclas.lenght; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_{instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);   
    }

    tecla.onkeydown = function (evento) {
        tecla.classList.add('ativa');

        console.log(evento.code == 'Space')

        if (evento.code === 'Space') {
            tecla.classList.add('ativa');
        }

        if (evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
