var colorHex = ['#000000', '#ffffff', '#808080', '#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#00ffff', '#ffff00'];
var colorName = ['black', 'white', 'grey', 'red', 'green', 'blue', 'magenta', 'turquoise', 'yellow'];
var currentColor = 0;

function SetColor(id)
{
	objectColor(colorHex[id]);
	currentColor = id;
	$('.current-color').attr('id', colorName[id]);
	OffBar(1);
}