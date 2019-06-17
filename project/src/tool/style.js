var styleName = ['solid', 'dotted', 'point'];
var currentStyle = 0;

function SetStyle(id)
{
	objectStyle(styleName[currentStyle]);
	currentStyle = id;
	$('.current-style').attr('id', 'style_' + styleName[id]);
	OffAllBars();
}