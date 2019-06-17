var editModeName = ['point', 'move', 'remove', 'resize', 'rotate'];
var currentEditMode = 0;

function SetEdit(id)
{
	disableDirectOperations()
	objectEdit(editModeName[id]);
	currentEditMode = id;
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
	else if(id == 3) //zmiana rozmiarow
	{
		$('#currentEdit').addClass('fa-expand');
	}
	else if(id == 4) //obracanie
	{
		$('#currentEdit').addClass('fa-refresh');
	}

	OffBar(3);
	ClearButton();
	SelectButton(3);
}