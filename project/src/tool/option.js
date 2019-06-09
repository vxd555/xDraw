var optionName = ['download', 'upload', 'save', 'open', 'logout'];
var currentOption = 0;

function SetOption(id)
{
	disableDirectOperations();
	currentOption = id;
	$('#currentOption').removeClass();
	$('#currentOption').addClass('fa');

	if(id == 0) //eksport
	{
		$('#currentOption').addClass('fa-download');
	}
	else if(id == 1) //import
	{
		json = JSON.stringify(canvas);
		$('#currentOption').addClass('fa-upload');
	}
	else if(id == 2) //zapis
	{
		json = JSON.stringify(canvas);
		// pukpuk pan serwer
		$('#currentOption').addClass('fa-folder');
	}
	else if(id == 3) //wczytanie
	{
		$('#currentOption').addClass('fa-folder-open');
		location.assign("./select_page.html");
	}
	else if(id == 4) //wylogowywanie
	{
		$('#currentOption').addClass('fa-sign-out');
		location.assign("./login_page.html");
	}

	OffBar(6);
}