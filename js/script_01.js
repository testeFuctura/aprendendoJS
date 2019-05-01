/*var adicionarLinhaNoGrid = '<tr style="background-color: khaki;">'+
        '<th>123</th>'+
        '<th>joão</th>'+
        '<th>testador</th>'+
        '<th>1000</th>'+
        '<th style="width: 50px"> <button type="button">Remover</button> </th>'+
    '</tr>';/

document.getElementById('grid').innerHTML = adicionarLinhaNoGrid;
console.log(adicionarLinhaNoGrid); */
function adicionaLinha(idTabela) {
    var tabela = document.getElementById(idTabela);
    var numeroLinhas = tabela.rows.length;
    var linha = tabela.insertRow(numeroLinhas);
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);   
    var celula3 = linha.insertCell(2); 
    var celula4 = linha.insertCell(3);
    var celula5 = linha.insertCell(4);
    if(cpf.value == null || nome.value == null || cargo.value == null || salario.value == null){
        alert("Erro, algum valor não foi preenchido");
        return;
    }
    /*var funcionario = new Funcionario(cpf.value, nome.value, cargo.value, salario.value);

    for(var i = 0; i<funcionarios.length;i++){
        if(cpf.value == funcionarios[i].cpf){
            alert("Erro, cpf já existente!")
            return;
        }
    }*/  
    celula1.innerHTML = cpf.value; 
    celula2.innerHTML =  nome.value; 
    celula3.innerHTML = cargo.value;
    celula4.innerHTML = salario.value;
    celula5.innerHTML =  "<button onclick='removeLinha(this)'>Remover</button>";
    funcionarios.push(funcionario);
}

function removeLinha(linha) {
    var i=linha.parentNode.parentNode.rowIndex;
    document.getElementById('grid').deleteRow(i);
  }          

class Funcionario{
    constructor(cpf, nome, cargo, salario){
        this.cpf = cpf;
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
}

var funcionarios = [];