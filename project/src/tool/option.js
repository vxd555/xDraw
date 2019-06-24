var optionName = ['download', 'upload', 'save', 'open', 'logout'];
var currentOption = 0;

function SetOption(id) {
	disableDirectOperations();
	currentOption = id;
	$('#currentOption').removeClass();
	$('#currentOption').addClass('fa');

	if (id == 0) //eksport
	{
		$('#currentOption').addClass('fa-download');

		SetOption(2); //zapisanie kompozycji zanim się png do pobrania

		var img = canvas.toDataURL("image/png");
		document.write('<img src="' + img + '"/>');
	} else if (id == 1) //import
	{
		json = JSON.stringify(canvas);
		$('#currentOption').addClass('fa-upload');
	} else if (id == 2) //zapis
	{
		json = JSON.stringify(canvas);
		saveData(localStorage.getItem("id"), json);
		$('#currentOption').addClass('fa-folder');
	} else if (id == 3) //wczytanie
	{
		$('#currentOption').addClass('fa-folder-open');
		location.assign("./select_page.php");
	} else if (id == 4) //wylogowywanie
	{
		$('#currentOption').addClass('fa-sign-out');
		location.assign("./login_out.php");
	}

	function saveData(id, json) {
		$.ajax({
			url: "save.php",
			data: {
				id: id,
				json: json
			},
			type: 'post',
			dataType: 'text',

			success: function (response) {}
		});
	}

	OffAllBars();
	ClearButton();
	SelectButton(6);
}