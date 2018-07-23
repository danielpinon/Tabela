/**************************************
	Developer 
	By. Daniel Pinon

	- Js to table -

***************************************/

/* Objeto de notificação */
var notifica = {
	sucesso: function(data){
		$.notify({message: data},{type: 'success'});
		return 'Notificação Exibida';
	},
	erro:function(data){
		$.notify({message: data},{type: 'danger'});
		return 'Notificação Exibida';
	},
	alerta:function(data){
		$.notify({message: data},{type: 'warning'});
		return 'Notificação Exibida';
	},
	info:function(data){
		$.notify({message: data},{type: 'info'});
		return 'Notificação Exibida';
	}
};

/* funcção de carregamento de página */
function notifyCarregaPagina(funcTimer){
	var notify = $.notify('<strong>Carregando</strong> Por favor não feche a página...', {
		allow_dismiss: false,
		showProgressbar: true,
		delay: funcTimer
	});
	setTimeout(function() {
		$.notify({message: '<i class="glyphicon glyphicon-ok"></i> Concluído'},{type: 'success'});
	},funcTimer + 1000);
}