var operationName = ['undo', 'redo'];
var currentOperation = 0;

function Undo() //cofanie
{
	disableDirectOperations();
	currentOperation = 0;
	$('#currentOperation').removeClass();
	$('#currentOperation').addClass('fa');
	$('#currentOperation').addClass('fa-undo');
	OffBar(5);
	UndoRedo(undoList, redoList);
}

function Redo() //ponawianie
{
	currentShape = 1;
	$('#currentOperation').removeClass();
	$('#currentOperation').addClass('fa');
	$('#currentOperation').addClass('fa-repeat');
	UndoRedo(redoList, undoList);
}