var operationName = ['undo', 'redo'];
var currentOperation = 0;

function Undo() //cofanie
{
	currentShape = 0;
	$('#currentOperation').removeClass();
	$('#currentOperation').addClass('fa');
	$('#currentOperation').addClass('fa-undo');
	OffBar(5);
}

function Redo() //ponawianie
{
	currentShape = 1;
	$('#currentOperation').removeClass();
	$('#currentOperation').addClass('fa');
	$('#currentOperation').addClass('fa-repeat');
	OffBar(5);
}