function addrow(form){
	
if(form.nome.value == ""){
	alert("O Campo Nome Não Foi Preenchido!");
} else if(form.sobrenome.value == ""){
	alert("O Campo Sobrenome Não Foi Preenchido!");
} else if(form.telefone.value == ""){
	alert("O Campo Telefone Não Foi Preenchido!");
} else if(form.sexo.value == ""){
	alert("O Campo Sexo Não Foi Preenchido!");
}  else{
	
	var nome = form.nome.value + " " + form.sobrenome.value;
	var telefone = form.telefone.value;
	var sexo = form.sexo.value;
	var estado = form.estado.value;
	var bairro = form.bairro.value;
	
	var linha = document.createElement('tr');
	
	var col1 = document.createElement('th');
	col1.innerHTML = nome;
	linha.appendChild(col1);
	
	var col2 = document.createElement('th');
	col2.innerHTML = telefone;
	linha.appendChild(col2);
	
	var col3 = document.createElement('th');
	col3.innerHTML = sexo;
	linha.appendChild(col3);
	
	var col4 = document.createElement('th');
	col4.innerHTML = estado;
	linha.appendChild(col4);
	
	var col5 = document.createElement('th');
	col5.innerHTML = bairro;
	linha.appendChild(col5);
	
	var tabela = document.getElementById('adicionar');
	tabela.appendChild(linha);
	
	
	
	form.nome.value = "";
	form.sobrenome.value = "";
	form.telefone.value = "";
	form.sexo.value = "";
	form.estado.value = "";
	form.bairro.value = "";
}

return false;

}