var editModeName = ['point', 'move', 'remove'];
var currentEditMode = 0;

function SetEdit(id)
{
	currentShape = id;
	$('#currentEdit').removeClass();
	$('#currentEdit').addClass('fa');

	if(id == 0) //zaznaczenie obiektów
	{
		$('#currentEdit').addClass('fa-mouse-pointer');
	}
	else if(id == 1) //porszanie obiektami
	{
		$('#currentEdit').addClass('fa-arrows');
	}
	else if(id == 2) //usuwanie obiektów
	{
		$('#currentEdit').addClass('fa-trash-o');
	}

	OffBar(3);
}