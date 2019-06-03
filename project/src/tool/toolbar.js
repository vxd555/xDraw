var toolbarNames = ['shape', 'color', 'style', 'edit', 'transposition', 'operation', 'option']
var toolbarTab = [0, 0, 0, 0, 0, 0, 0]

function OnBar(id)
{
	$('.canvas-container').css('z-index', -1);
	if(toolbarTab[id] == 0)
	{
		$('.' + toolbarNames[id] + '-hide').toggleClass(toolbarNames[id] + '-show');
		$('.' + toolbarNames[id] + '-hide').removeClass(toolbarNames[id] + '-hide');
		toolbarTab[id] = 1;
	}
	else
	{
		OffBar(id);
	}

}

function OffBar(id)
{
	$('.canvas-container').css('z-index', 1);
	$('.' + toolbarNames[id] + '-show').toggleClass(toolbarNames[id] + '-hide');
	$('.' + toolbarNames[id] + '-show').removeClass(toolbarNames[id] + '-show');
	toolbarTab[id] = 0;
}

function OffAllBars()
{
	for(var i = 0; i < toolbarNames.length; ++i)
	{
		OffBar(i);
	}
}
