var transpositionName = ['vertical-mirror', 'horizontal-mirror', 'rotation-right', 'rotation-left'];
var currentTransposition = 0;

function SetTransposition(id)
{
	currentShape = id;
	$('#currentTransposition').removeClass();
	$('#currentTransposition').addClass('fa');

	if(id == 0) //odbicie lustrzane vertykalne
	{
		$('#currentTransposition').addClass('fa-arrows-v');
	}
	else if(id == 1) //odbicie lustrzane horyzontalne
	{
		$('#currentTransposition').addClass('fa-arrows-h');
	}
	else if(id == 2) //obrót w prawo
	{
		$('#currentTransposition').addClass('fa-level-up');
	}
	else if(id == 3) //obrót w lewo
	{
		$('#currentTransposition').addClass('fa-level-down');
	}

	OffBar(4);
}