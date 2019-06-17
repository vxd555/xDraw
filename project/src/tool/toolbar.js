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

function ClearButton()
{
	$('#ShapeButton').removeClass('btn-primary');
	$('#ColorButton').removeClass('btn-primary');
	$('#StyleButton').removeClass('btn-primary');
	$('#EditButton').removeClass('btn-primary');
	$('#TranspositionButton').removeClass('btn-primary');
	$('#OperationButton').removeClass('btn-primary');
	$('#OptionButton').removeClass('btn-primary');
}

function SelectButton(type)
{
	if(type == 0) $('#ShapeButton').addClass('btn-primary');
	else if(type == 1) $('#ColorButton').addClass('btn-primary');
	else if(type == 2) $('#StyleButton').addClass('btn-primary');
	else if(type == 3) $('#EditButton').addClass('btn-primary');
	else if(type == 4) $('#TranspositionButton').addClass('btn-primary');
	else if(type == 5) $('#OperationButton').addClass('btn-primary');
	else if(type == 6) $('#OptionButton').addClass('btn-primary');
}