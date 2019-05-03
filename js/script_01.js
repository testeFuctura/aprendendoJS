function adicionaLinha(idTabela) {
    var tabela = document.getElementById(idTabela);
    var numeroLinhas = tabela.rows.length;
    
    if(cpf.value == null || nome.value == null || cargo.value == null || salario.value == null){
        alert("Erro, algum valor não foi preenchido");
        return;
    }
    if(cpf.value.length<11 || !TestaCPF(cpf.value)){
        alert("CPF inválido!");
        return;
    }
    var linha = tabela.insertRow(numeroLinhas);
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);   
    var celula3 = linha.insertCell(2); 
    var celula4 = linha.insertCell(3);
    var celula5 = linha.insertCell(4);

    celula1.innerHTML = cpf.value; 
    celula2.innerHTML =  nome.value; 
    celula3.innerHTML = cargo.value;
    celula4.innerHTML = salario.value;
    celula5.innerHTML =  "<button onclick='removeLinha(this)'>Remover</button>";
}
function removeLinha(linha) {
    var i=linha.parentNode.parentNode.rowIndex;
    document.getElementById('grid').deleteRow(i);
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

