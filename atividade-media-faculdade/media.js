/*
    pegar o nome e a quantidade de nota que seram calculadas: ok
    fazer o nome do aluno aparecer novamente em um elemento: ok
    criar os inputs com o identificador de cada nota: ok
    pegar os valores das notas e calcular a media:
*/
let nomeAluno, numeroNotas;
let tituloAluno, innerNota;
let btnMedia;

function campoNota() {
    
    nomeAluno = document.getElementById('nomeAluno').value;
    numeroNotas = document.getElementById('numeroNotas').value;
    innerNota = document.getElementById('innerNota');

    if (numeroNotas <= 0 || numeroNotas > 5) {
        window.alert('Valor Invalido (min: 1 max: 5)');
        document.getElementById('numeroNotas').value = '';
    } else {
        tituloAluno = document.createElement('p');
        tituloAluno.setAttribute("class", 'tituloAluno');
        tituloAluno.textContent = `Aluno: ${nomeAluno}`;

        innerNota.appendChild(tituloAluno);

        let divTitulo = document.createElement('div');
        innerNota.appendChild(divTitulo);

        //repetir o elemento html(p) para a quantidade de notas necessarias
        for (let cont = 1; cont <= numeroNotas; cont++) {

            //cria o elemento <p> e conteudo do mesmo
            let txtP = document.createElement("p");
            txtP.textContent = `${cont}º Nota:`;

            divTitulo.appendChild(txtP); //coloca o(s) elemento(s) na section innerNota

            let inputNota = document.createElement('input');
            inputNota.setAttribute("id", `nota${cont}`); //id com o numero da nota
            inputNota.setAttribute("type", 'number');

            divTitulo.appendChild(inputNota);
        }

        btnMedia = document.createElement('button');
        btnMedia.textContent = 'Calcular Média';
        btnMedia.setAttribute("id", 'btnMedia');
        btnMedia.addEventListener('click', calcularMedia);

        innerNota.appendChild(btnMedia);
        
        function calcularMedia() {
            let listaNota = [];
            let somaNotas = 0;
            let nota = 0;
            let mediaAluno = 0;
            let msg;
            
            // Colocar os valores dos inputs#nota[cont] dentro da listaNota
            for ( let cont2 = 1; cont2 <= numeroNotas; cont2++ ) {
                listaNota.push(Number(document.querySelector(`input#nota${cont2}`).value));          
            }
    
            // Somar os valores de todos os dados dentro do array listaNota   
            for ( let cont3 = 0; cont3 <= listaNota.length; cont3++) {
                if (listaNota[cont3] !== undefined) {
                    nota = listaNota[cont3];
                    somaNotas = somaNotas + nota;
                }
            }
    
            mediaAluno = somaNotas / numeroNotas;
            
            msg = document.createElement('h3');
            msg.setAttribute("id", 'resultado');
            msg.textContent = `Média: ${mediaAluno.toFixed(1)}`;

            innerNota.appendChild(msg);

            //Mudar a cor do botão de acordo com a média
            if (mediaAluno < 5) {
                msg.style.color = 'red';
            } else {
                msg.style.color = 'green';
            }
        }
    }
}


function limparCampos() {
    document.getElementById('nomeAluno').value = '';
    document.getElementById('numeroNotas').value = '';

    innerNota.innerText = '';

    document.getElementById('nomeAluno').focus();
}
