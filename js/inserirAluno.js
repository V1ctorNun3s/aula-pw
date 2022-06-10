// Selecionar botão
var btn = document.querySelector(".inserir");

btn.addEventListener('click', inserirAluno);


function inserirAluno(event){ 
event.preventDefault();
// Criar elementos HTML
var tr_linha = document.createElement("tr");
var td_aluno = document.createElement("td");
var td_nota1 = document.createElement("td");
var td_nota2 = document.createElement("td");
var td_nota3 = document.createElement("td");
var td_nota4 = document.createElement("td");
var td_media = document.createElement("td");

// Buscar dados do form

var formName = document.querySelector(".aluno");
var formNota1 = document.querySelector(".nota1");
var formNota2 = document.querySelector(".nota2");
var formNota3 = document.querySelector(".nota3");
var formNota4 = document.querySelector(".nota4");




// Modificando o conteúdo das td´s
td_aluno.textContent = formName.value;
td_nota1.textContent = formNota1.value;
td_nota2.textContent = formNota2.value;
td_nota3.textContent = formNota3.value;
td_nota4.textContent = formNota4.value;


td_aluno.classList.add('.celula');


// Inserir td´s na tr
tr_linha.appendChild(td_aluno);
tr_linha.appendChild(td_nota1);
tr_linha.appendChild(td_nota2);
tr_linha.appendChild(td_nota3);
tr_linha.appendChild(td_nota4);
tr_linha.appendChild(td_media);

alert(tr_linha);



// Inserindo linha na tabela
var table = document.querySelector(".tabela");
table.appendChild(tr_linha);

CalcularMedia();
}




