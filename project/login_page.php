<?php
   include 'php/functions.php';
   if (isset($_POST['send']))
   {
   		$login = $_POST['login'];
   		$password = $_POST['password'];
   
       if(isAuthorization($login,$password))
       {
           $_SESSION['signed'] = true;
   				$_SESSION['name'] = $login;
           header("Location: select_page.php");
       }
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
      <link rel="icon" href="../img/icon.png">
      <title>Login Page</title>
      <!-- Latest compiled and minified CSS -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
      <!-- jQuery library -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
      <!-- Latest compiled JavaScript -->
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
      <!-- Add icon library -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <!--	style	-->
      <link rel="stylesheet" href="./style/style.css">
      <link rel="stylesheet" href="./style/buttons.css">
      <link rel="stylesheet" href="./style/login_page.css">
   </head>
   <body>
      <div class="container">
         <div class="text-center">
            <img src="./img/logo.png" class="rounded mx-auto d-block main-page-logo" alt="Nasze logo"/>
         </div>
         <form method="post" class="login-form mb-5" action="login_page.php">
            <div class="form-group">
               <label for="userEmail">Login</label>
               <input type="text" class="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="Podaj login" name="login">
            </div>
            <div class="form-group">
               <label for="userPassword">Hasło</label>
               <input type="password" class="form-control" id="userPassword" placeholder="Podaj hasło" name="password">
            </div>
            <button class="btn btn-primary sumbit-button" type="submit" name="send"> Zaloguj </button>
            <!-- <button type="submit" class="btn btn-primary sumbit-button">Zaloguj</button> -->
         </form>
         login: Dawid
         hasło: 123
      </div>
   </body>
   <script></script>
</html>