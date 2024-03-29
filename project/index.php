<?php
if(include 'php/sql.php');
$signed = isset($_SESSION['signed']);
if(!$signed)
{
	header("Location: select_page.php");
}
?>

<!DOCTYPE html>
<html>
	<head>
		<!--	meta	-->
		<meta charset="UTF-8">
		<meta name="description" content="xDraw">
		<meta name="keywords" content="html5,js,jquery,xDraw">
		<meta name="author" content="Dawid Macias,Krystian Nowak,Przemysław Prencel,Maciej Nabiałczyk">
		<link rel="icon" href="./img/icon.png">
		<title>xDraw</title>

		 <!-- Latest compiled and minified CSS -->
		 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">

		 <!-- jQuery library -->
		 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>

		 <!-- Latest compiled JavaScript -->
		 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

		 <!-- Add icon library -->
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

		 <!--	style	-->
		<link rel="stylesheet" href="style/style.css">
		<link rel="stylesheet" href="style/canvas.css">
		<link rel="stylesheet" href="style/buttons.css">

		 <!--	js	-->
		<script src="src/tool/toolbar.js"></script>
		<script src="src/tool/shape.js"></script>
		<script src="src/tool/color.js"></script>
		<script src="src/tool/style.js"></script>
		<script src="src/tool/edit.js"></script>
		<script src="src/tool/transposition.js"></script>
		<script src="src/tool/operation.js"></script>
		<script src="src/tool/option.js"></script>
		<script src="src/fabric.js"></script>

	</head>
	<body>
		<form class="navbar-form navbar-left" action="#" method="post">
		<div class="container">
			<div class="row">
				<button id="ShapeButton" type="button" class="btn btn-primary boutton-iconimage" onclick="OnBar(0)"><i id="currentShape" class="fa fa-square-o"></i></button>
				<button type="button" class="btn boutton-iconimage shape-hide" onclick="SetShape(0)"><i class="fa fa-square-o"></i></button>
				<button type="button" class="btn boutton-iconimage shape-hide" onclick="SetShape(1)"><i class="fa fa-circle-o"></i></button>
				<button type="button" class="btn boutton-iconimage shape-hide" onclick="SetShape(2)"><i class="fa fa-minus"></i></button>
			</div>
			<div class="row">
				<button id="ColorButton" type="button" class="btn boutton-iconimage btn-init" onclick="OnBar(1)"><i id="black" class="button-colour-line current-color"></i></button>
				<button type="button" class="btn boutton-iconimage btn-init color-hide" onclick="SetColor(0)"><i id="black" class="button-colour-line"></i></button>
				<button type="button" class="btn boutton-iconimage btn-init color-hide" onclick="SetColor(1)"><i id="white" class="button-colour-line"></i></button>
				<button type="button" class="btn boutton-iconimage btn-init color-hide" onclick="SetColor(2)"><i id="grey" class="button-colour-line"></i></button>
				<button type="button" class="btn boutton-iconimage btn-init color-hide" onclick="SetColor(3)"><i id="red" class="button-colour-line"></i></button>
				<button type="button" class="btn boutton-iconimage btn-init color-hide" onclick="SetColor(4)"><i id="green" class="button-colour-line"></i></button>
				<button type="button" class="btn boutton-iconimage btn-init color-hide" onclick="SetColor(5)"><i id="blue" class="button-colour-line"></i></button>
				<button type="button" class="btn boutton-iconimage btn-init color-hide" onclick="SetColor(6)"><i id="magenta" class="button-colour-line"></i></button>
				<button type="button" class="btn boutton-iconimage btn-init color-hide" onclick="SetColor(7)"><i id="turquoise" class="button-colour-line"></i></button>
				<button type="button" class="btn boutton-iconimage btn-init color-hide" onclick="SetColor(8)"><i id="yellow" class="button-colour-line"></i></button>

			</div>
			<div class="row">
				<button id="StyleButton" type="button" class="btn boutton-iconimage btn-init" onclick="OnBar(2)"><i id="style_solid" class="button-colour-line current-style"></i></button>
				<button type="button" class="btn boutton-iconimage btn-init style-hide" onclick="SetStyle(0)"><i id="style_solid" class="button-colour-line"></i></button>
				<button type="button" class="btn boutton-iconimage btn-init style-hide" onclick="SetStyle(1)"><i id="style_dotted" class="button-colour-line"></i></button>
				<button type="button" class="btn boutton-iconimage btn-init style-hide" onclick="SetStyle(2)"><i id="style_point" class="button-colour-line"></i></button>
			</div>
			<div class="row">
				<button id="EditButton" type="button" class="btn boutton-iconimage" onclick="OnBar(3)"><i id="currentEdit" class="fa fa-mouse-pointer"></i></button>
				<button type="button" class="btn boutton-iconimage edit-hide" onclick="SetEdit(0)"><i class="fa fa-mouse-pointer"></i></button>
				<button type="button" class="btn boutton-iconimage edit-hide" onclick="SetEdit(1)"><i class="fa fa-arrows"></i></button>
				<button type="button" class="btn boutton-iconimage edit-hide" onclick="SetEdit(2)"><i class="fa fa-trash-o"></i></button>
				<button type="button" class="btn boutton-iconimage edit-hide" onclick="SetEdit(3)"><i class="fa fa-expand"></i></button>
				<button type="button" class="btn boutton-iconimage edit-hide" onclick="SetEdit(4)"><i class="fa fa-refresh"></i></button>

			</div>
			<div class="row">
				<button id="TranspositionButton" type="button" class="btn boutton-iconimage" onclick="OnBar(4)"><i id="currentTransposition" class="fa fa-arrows-v"></i></button>
				<button type="button" class="btn boutton-iconimage transposition-hide" onclick="SetTransposition(0)"><i class="fa fa-arrows-v"></i></button>
				<button type="button" class="btn boutton-iconimage transposition-hide" onclick="SetTransposition(1)"><i class="fa fa-arrows-h"></i></button>
				<button type="button" class="btn boutton-iconimage transposition-hide" onclick="SetTransposition(2)"><i class="fa fa-level-up"></i></button>
				<button type="button" class="btn boutton-iconimage transposition-hide" onclick="SetTransposition(3)"><i class="fa fa-level-down"></i></button>
			</div>
			<div class="row">
				<button id="OperationButton" type="button" class="btn boutton-iconimage" onclick="OnBar(5)"><i id="currentOperation" class="fa fa-undo"></i></button>
				<button type="button" class="btn boutton-iconimage operation-hide" onclick="Undo()"><i class="fa fa-undo"></i></button>
				<button type="button" class="btn boutton-iconimage operation-hide" onclick="Redo()"><i class="fa fa-repeat"></i></button>
			</div>
			<div class="row">
				<button id="OptionButton" type="button" class="btn boutton-iconimage" onclick="OnBar(6)"><i id="currentOption" class="fa fa-download"></i></button>
				<button type="button" class="btn boutton-iconimage option-hide" onclick="SetOption(0)"><i class="fa fa-download"></i></button>
				<button type="button" class="btn boutton-iconimage option-hide" onclick="SetOption(1)"><label id="file-upload-label" for="file-upload"><i class="fa fa-upload"></i></label><input type="file" id="file-upload"></button>
				<button type="button" class="btn boutton-iconimage option-hide" onclick="SetOption(2)"><i class="fa fa-folder"></i></button>
				<button type="button" class="btn boutton-iconimage option-hide" onclick="SetOption(3)"><i class="fa fa-folder-open"></i></button>
				<button type="button" class="btn boutton-iconimage option-hide" onclick="SetOption(4)"><i class="fa fa-sign-out"></i></button>
			</div>
		</form>
		<div class="canvas-container">
			<canvas id="canvas" width="1000px" height="700px"></canvas>
		</div>
	</body>

	<script src="src/canvas/script.js"></script>
	<script src="src/canvas/toolbar_operation_handler.js"></script>
	<script src="src/canvas/shape_builder.js"></script>
</html>
