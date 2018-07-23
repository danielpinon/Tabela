/**************************************
	Developer 
	By. Daniel Pinon

	- Js to table -

***************************************/

/* Objeto da grade das tabelas */

var tabela ={
	adiciona: function(data){
		/*Insere no array mais uma linha*/ 
		linesTable.push(JSON.parse('{"id":'+countLinesTable+',"name":"Danspinon"}'));
		countLinesTable = linesTable.length;
		tabela.exibe();
	},
	remove: function (data,verify){
		if(verify == true){
			linesTable.splice(deleteId,1);
			tabela.exibe();
			deleteId = 0;
		}else{
			deleteId = data;
		}
	},
	edita: function(data){
		
	},
	exibe: function(){
		if(linesTable.length > 0){
			/*Loop para visualizacao das linhas*/
			linesTable.forEach(function(data,index){
				lineTable += 
				'<tr>'+
					'<td>'+data.id+'</td>'+
					'<td>'+'Daniel José da Silva Pinon'+'</td>'+
					'<td>'+'Diária sem Almoço'+'</td>'+
					'<td>'+'100,00'+'</td>'+
					'<td>'+'0 x 0,00'+'</td>'+
					'<td>'+'0 x 0,00'+'</td>'+
					'<td>'+'0 x 0,00'+'</td>'+
					'<td>'+'100,00'+'</td>'+
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