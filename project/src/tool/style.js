var styleName = ['solid', 'dotted', 'point'];
var currentStyle = 0;

function SetStyle(id)
{
	currentShape = id;
	$('.current-style').attr('id', 'style_' + styleName[id]);
	OffBar(2);
}