/**************************************
	Developer 
	By. Daniel Pinon

	- Js to table -

***************************************/

/* Objeto da grade das tabelas */

var tabela ={
	adiciona: function(data){
		/*Insere no array mais uma linha*/ 
		linesTable.push({
			'Matricula': elementos.create.Matricula(), 
			'Nome': elementos.create.Nome(),
			'Servico_Codigo':elementos.create.Servico_Codigo(),
			'Servico_Descricao':elementos.create.Servico_Descricao(),
			'Diaria_Producao_Qtde':elementos.create.Diaria_Producao_Qtde(),
			'Diaria_Producao_Valor':elementos.create.Diaria_Producao_Valor(),
			'Diaria_Producao_Peric':elementos.create.Diaria_Producao_Peric(),
			'Diaria_Producao_AdDiv':elementos.create.Diaria_Producao_AdDiv(),
			'HE_50_He':elementos.create.HE_50_He(),
			'HE_50_Total':elementos.create.HE_50_Total(),
			'HE_100_HE':elementos.create.HE_100_HE(),
			'HE_100_Total':elementos.create.HE_100_Total(),
			'Noturno_HN':elementos.create.Noturno_HN(),
			'Noturno_Total':elementos.create.Noturno_Total(),
			'Total_Geral':elementos.create.Total_Geral()
		});
		tabela.exibe();
		notifica.sucesso('Adicionado com sucesso!');
	},
	remove: function (data,verify){
		if(verify == true){
			linesTable.splice(deleteId,1);
			tabela.exibe();
			notifica.sucesso('Removido com sucesso!');
			deleteId = 0;
		}else{
			deleteId = data;
		}
	},
	edita: function(data,id,verify){
		data = JSON.parse('{"id":'+linesTable.length+',"name":"Pinon"}');
		if(verify == true){
			linesTable[editId] = data;
			editId = 0;
		}else{
			editId = id;
		}
	},
	exibe: function(){
		if(linesTable.length > 0){
			/*Loop para visualizacao das linhas*/
			linesTable.forEach(function(data,index){
				lineTable += 
				'<tr>'+
					'<td>'+data.Matricula+'</td>'+
					'<td>'+data.Nome+'</td>'+
					'<td>'+data.Servico_Descricao+'</td>'+
					'<td> Qtde:'+data.Diaria_Producao_Qtde+' '+
						 'Valor: '+data.Diaria_Producao_Valor+'<br>'+
						 'Peric: '+data.Diaria_Producao_Peric+' '+
						 'Ad. Div.: '+data.Diaria_Producao_AdDiv+'</td>'+
					'<td>'+data.HE_50_He+' x '+data.HE_50_Total+'</td>'+
					'<td>'+data.HE_100_HE+' x '+data.HE_100_Total+'</td>'+
					'<td>'+data.Noturno_HN+' x '+data.Noturno_Total+'</td>'+
					'<td>'+data.Total_Geral+'</td>'+
					'<td>'+buttonTable(index)+'</td>'+
				'</tr>';
			});		
		}else{
			lineTable += 
			'<tr>'+
				'<td><i class="glyphicon glyphicon-thumbs-down"></i> Adicione uma linha clicando no botão verde em cima! <i class="glyphicon glyphicon-hand-up"></i></td>'+
			'</tr>';
		}		
		objLinesTable.innerHTML = lineTable;
		lineTable = "";
	},
	carrega: function(){
		linesTable = JSON.parse(document.getElementById("dateFromSendServer").value);
		objLinesTable = document.getElementById("tableDate");
		countLinesTable = linesTable.length;
		tabela.exibe();
	}
};