/**************************************
	Developer 
	By. Daniel Pinon

	- Js to table -

***************************************/

/* Chama js complementados s*/
document.write(unescape("%3Cscript src='js/notify.js' type='text/javascript'%3E%3C/script%3E"));
document.write(unescape("%3Cscript src='js/ordem.js' type='text/javascript'%3E%3C/script%3E"));
document.write(unescape("%3Cscript src='js/tabelas.js' type='text/javascript'%3E%3C/script%3E"));
document.write(unescape("%3Cscript src='js/variaveis.js' type='text/javascript'%3E%3C/script%3E"));
document.write(unescape("%3Cscript src='js/cript.js' type='text/javascript'%3E%3C/script%3E"));

/*Executa ao carregar*/
$( document ).ready(function() {
    console.log( "ready!" );
    notifyCarregaPagina(4000);
});

