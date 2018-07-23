/**************************************
	Developer 
	By. Daniel Pinon

	- Js to table -

***************************************/

/* Objeto de criptografia */

var cript = {
	texto: {
		envio: function(data){
			return btoa(btoa(btoa(btoa(btoa(data)))));
		},
		receber: function(data){
			return atob(atob(atob(atob(atob(data)))));
		}
	}
};