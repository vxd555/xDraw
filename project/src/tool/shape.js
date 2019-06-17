var shapeName = ['rectangle', 'circle', 'line'];
var currentShape = 0;

function SetShape(id)
{
	disableDirectOperations();
	currentShape = id;
	$('#currentShape').removeClass();
	$('#currentShape').addClass('fa');

	if(id == 0) //rysowanie prostokątami
	{
		$('#currentShape').addClass('fa-square-o');
	}
	else if(id == 1) //rysowanie okręgami
	{
		$('#currentShape').addClass('fa-circle-o');
	}
	else if(id == 2) //rysowanie liniami
	{
		$('#currentShape').addClass('fa-minus');
	}

	OffBar(0);
	ClearButton();
	SelectButton(0);
}