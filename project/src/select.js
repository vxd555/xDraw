function goToEditor(id) {
    $.ajax({
        url: "select_page.php",
        data: {
            comp: id
        },
        type: 'post',
        dataType: 'text',

        success: function (response) {
            $('body').html(response);
        }
    });
}

function rename(id) {
    var name = prompt("Podaj nową nazwę kompozycji:", "");
    if (name != null && name != "") {
        $.ajax({
            url: "save.php",
            data: {
                id: id,
                name: name
            },
            type: 'post',
            dataType: 'text',

            success: function (response) {
                location.reload();
            }
        });
    }
}