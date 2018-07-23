/**************************************
	Developer 
	By. Daniel Pinon

	- Js to table -

***************************************/

/* Objeto de funções da ordem */
var ordem = {
	salvar: function(){
		console.log();
		notify = $.notify('<strong>Salvando</strong> Não feche a página...', {
			allow_dismiss: false,
			showProgressbar: true
		});
		setTimeout(function() {
			notify.update({'type': 'success', 'message': '<strong>Success</strong> Your page has been saved!', 'progress': 25});
		}, 4500);
	}
};