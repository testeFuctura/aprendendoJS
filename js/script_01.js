var funcionarios = [];

function adicionaLinha(idTabela) {
    var tabela = document.getElementById(idTabela);
    var numeroLinhas = tabela.rows.length;
    var funcionario = {cpf: cpf.value,nome: nome.value, cargo : cargo.value, salario: salario.value}

    if(cpf.value == null || nome.value == null || cargo.value == null || salario.value == null){
        alert("Erro, algum valor não foi preenchido");
        return;
    }
    if(cpf.value.length<11 || !TestaCPF(cpf.value)){
        alert("CPF inválido!");
        return;
    }
    for(var i = 0; i<funcionarios.length;i++){
      if(funcionarios[i].cpf == cpf.value){
        alert('CPF já cadastrado!');
        return;
      }
    }

    var linha = tabela.insertRow(numeroLinhas);
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);   
    var celula3 = linha.insertCell(2); 
    var celula4 = linha.insertCell(3);
    var celula5 = linha.insertCell(4);
    funcionarios.push(funcionario);

    celula1.innerHTML = cpf.value; 
    celula2.innerHTML =  nome.value; 
    celula3.innerHTML = cargo.value;
    celula4.innerHTML = salario.value;
    celula5.innerHTML =  "<button onclick='removeLinha(this)'>Remover</button>";
}
function recarregar(numeroLinhas){
  var tabela = document.getElementById('grid');
  for(var i = numeroLinhas;i>=1;i--){
    tabela.deleteRow(i);
  }
  for(var i = 0; i<funcionarios.length;i++){
    var maior = document.getElementById('maior').value;
    if(maior < funcionarios[i].salario || maior == ""){
      var linha = tabela.insertRow(tabela.rows.length);
      var celula1 = linha.insertCell(0);
      var celula2 = linha.insertCell(1);   
      var celula3 = linha.insertCell(2); 
      var celula4 = linha.insertCell(3);
      var celula5 = linha.insertCell(4);

      celula1.innerHTML = funcionarios[i].cpf;
      celula2.innerHTML =  funcionarios[i].nome; 
      celula3.innerHTML = funcionarios[i].cargo;
      celula4.innerHTML = funcionarios[i].salario;
      celula5.innerHTML =  "<button onclick='removeLinha(this)'>Remover</button>";
      var flag = true;
    }
  }

}
function removeLinha(linha) {
    var i=linha.parentNode.parentNode.rowIndex;
    document.getElementById('grid').deleteRow(i);
    var index = funcionarios[i-1];
    funcionarios.splice(index, 1);
  }
function orderCpf(){
  funcionarios.sort(function(a,b) {
      if (a.cpf < b.cpf) return -1;
      if (a.cpf > b.cpf) return 1;
      return 0;
    });
  var nrRows = document.getElementById('grid').rows.length;
  recarregar(nrRows-1);
}  
function orderNome(){
  funcionarios.sort(function(a,b) {
    if (a.nome < b.nome) return -1;
    if (a.nome > b.nome) return 1;
    return 0;
  });
var nrRows = document.getElementById('grid').rows.length;
recarregar(nrRows-1);
} 
function orderSal(){
  funcionarios.sort(function(a,b) {
    if (a.salario < b.salario) return -1;
    if (a.salario > b.salario) return 1;
    return 0;
  });
var nrRows = document.getElementById('grid').rows.length;
recarregar(nrRows-1);
} 
function filtroSal(){
  var nrRows = document.getElementById('grid').rows.length;
  recarregar(nrRows-1);
}
function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;
     
  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
   
  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

