/*Variáveis de gerenciamento*/
var linesTable;
var objLinesTable;
var lineTable = "";
var deleteLine = false;
var deleteId;
var countLinesTable;

/*Variáveis de html*/
var buttonTable = function(data){
return '<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#editaModal" onclick="tabela.edita('+data+')">'+
   '<i class="glyphicon glyphicon-pencil"></i> Editar'+
'</button>'+
'&nbsp;' +
'<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#removeModal" onclick="tabela.remove('+data+',false)">'+
    '<i class="glyphicon glyphicon-trash"></i> Remover'+
'</button>'};