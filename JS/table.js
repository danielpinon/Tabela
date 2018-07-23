/**************************************
	Developer 
	By. Daniel Pinon

	- Js to table -

***************************************/

/* Chama js complementados no inicio*/
	document.write(unescape("%3Clink href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet'%3E"));
	document.write(unescape("%3Cscript src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js' type='text/javascript'%3E%3C/script%3E"));
	document.write(unescape("%3Cscript src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js' type='text/javascript'%3E%3C/script%3E"));
	document.write(unescape("%3Cscript src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' type='text/javascript'%3E%3C/script%3E"));
	document.write(unescape("%3Cscript src='js/bootstrap-notify.js' type='text/javascript'%3E%3C/script%3E"));
	document.write(unescape("%3Cscript src='js/bootstrap-notify.min.js' type='text/javascript'%3E%3C/script%3E"));
	document.write(unescape("%3Cscript src='js/notify.js' type='text/javascript'%3E%3C/script%3E"));
	document.write(unescape("%3Cscript src='js/ordem.js' type='text/javascript'%3E%3C/script%3E"));
	document.write(unescape("%3Cscript src='js/tabelas.js' type='text/javascript'%3E%3C/script%3E"));
	document.write(unescape("%3Cscript src='js/variaveis.js' type='text/javascript'%3E%3C/script%3E"));
	document.write(unescape("%3Cscript src='js/cript.js' type='text/javascript'%3E%3C/script%3E"));


window.onload = function () { 
/*Executa ao carregar*/
    console.log( "ready!" );
    notifyCarregaPagina(4000);
	tabela.carrega();
}

