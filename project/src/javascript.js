$(document).ready(function () {
    $("#show-shape").hide();
    $("#show-shape-bt").click(function () {
        $("#show-shape").animate({
            width: 'toggle'
        });
    });
    $("#show-color").hide();
    $("#show-color-bt").click(function () {
        $("#show-color").animate({
            width: 'toggle'
        });
    });
    $("#show-line").hide();
    $("#show-line-bt").click(function () {
        $("#show-line").animate({
            width: 'toggle'
        });
    });
    $("#show-operation").hide();
    $("#show-operation-bt").click(function () {
        $("#show-operation").animate({
            width: 'toggle'
        });
    });
    $("#show-rotate").hide();
    $("#show-rotate-bt").click(function () {
        $("#show-rotate").animate({
            width: 'toggle'
        });
    });
    $("#show-undo").hide();
    $("#show-undo-bt").click(function () {
        $("#show-undo").animate({
            width: 'toggle'
        });
    });
    $("#show-file").hide();
    $("#show-file-bt").click(function () {
        $("#show-file").animate({
            width: 'toggle'
        });
    });
});

// const showFile = document.querySelector(".btnRow");

// // console.log(showFile)
// window.addEventListener("click", (e) => {
//     if (e.target.classList == "btnRow") {
//         // document.getElementById("show-file").classList.toggle("wrapF");
//         console.log("effefef")
//     }
// })