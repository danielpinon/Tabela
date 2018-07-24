var elementos = {
	create:{
		Matricula: function(){return getElementInput('createModalInputMatricula');}, 
		Nome: function(){return getElementInput('createModalInputNome');},
		Servico_Codigo: function(){return getElementInput('createModalInputServico').split(";")[0];},
		Servico_Descricao: function(){return getElementInput('createModalInputServico').split(";")[1];},
		Diaria_Producao_Qtde: function(){return getElementInput('createModalInputQtde');},
		Diaria_Producao_Valor: function(){return getElementInput('createModalInputValor');},
		Diaria_Producao_Peric: function(){return getElementInput('createModalInputPeric');},
		Diaria_Producao_AdDiv: function(){return getElementInput('createModalInputAdDiv');},
		HE_50_He: function(){return getElementInput('createModalInputHE50');},
		HE_50_Total: function(){return getElementInput('createModalInputHE50Total');},
		HE_100_HE: function(){return getElementInput('createModalInputHE100');},
		HE_100_Total: function(){return getElementInput('createModalInputHE100Total');},
		Noturno_HN: function(){return getElementInput('createModalInputHN');},
		Noturno_Total: function(){return getElementInput('createModalInputHNTotal');},
		Total_Geral: function(){return getElementInput('createModalInputTotal');}
	},
	edit:{
		Matricula: function(){return getElementInput('');}, 
		Nome: function(){return getElementInput('');},
		Servico_Codigo: function(){return getElementInput('').split(";")[0];},
		Servico_Descricao: function(){return getElementInput('').split(";")[1];},
		Diaria_Producao_Qtde: function(){return getElementInput('');},
		Diaria_Producao_Valor: function(){return getElementInput('');},
		Diaria_Producao_Peric: function(){return getElementInput('');},
		Diaria_Producao_AdDiv: function(){return getElementInput('');},
		HE_50_He: function(){return getElementInput('');},
		HE_50_Total: function(){return getElementInput('');},
		HE_100_HE: function(){return getElementInput('');},
		HE_100_Total: function(){return getElementInput('');},
		Noturno_HN: function(){return getElementInput('');},
		Noturno_Total: function(){return getElementInput('');},
		Total_Geral: function(){return getElementInput('');}
	}
};

var edit = function(){
	
};