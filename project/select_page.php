<?php
   $iterator = 1;

   if(include 'php/sql.php');
   if (isset($_POST['delete']))
   {
      deleteComposition($_POST['delete']);
   }

   if (isset($_POST['comp']))
   {
      $comp_id = $_POST['comp'];
      $comp_data = getJson($comp_id);
   }
   
   $signed = isset($_SESSION['signed']);
   if($signed)
   {
   		$name = $_SESSION['name'];
   		$user_id = getUserId($name);
   }

   if(array_key_exists('add_comp',$_POST)){
      addComposition($user_id);
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
      <title>Project selection page</title>
      <!-- Latest compiled and minified CSS -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
      <!-- jQuery library -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
      <!-- Latest compiled JavaScript -->
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
      <script type="text/javascript" src="./src/select.js"></script>
      <!-- Add icon library -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <!--	style	-->
      <link rel="stylesheet" href="./style/style.css">
      <link rel="stylesheet" href="./style/buttons.css">
      <link rel="stylesheet" href="./style/select_page.css">
   </head>
   <body>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
         <a class="navbar-brand" href="">xDraw</a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
               <?php if ($signed): ?>
               <li class="nav-item active">    
                  <a class="nav-link">Zalogowano jako: <?php echo $name?></a>
               </li>
               <?php endif; ?>
               <li class="nav-item active">
                  <?php if ($signed): ?>
                  <a class="nav-link" href="login_out.php">Wyloguj</a>
                  <?php else: ?>
                  <a class="nav-link" href="login_page.php">Zaloguj</a>
                  <?php endif; ?>
               </li>
            </ul>
         </div>
      </nav>
      <div class="container">
         <div class="text-center">
            <img src="./img/logo.png" class="rounded mx-auto d-block main-page-logo" alt="Nasze logo"/>
         </div>
         <h1 class="heading">My w <b>xDraw</b> wierzymy że najważniejszą wartością jest udana kompozycja, wykorzystaliśmy najowsze osiągnięcia prężnie działającej branży IT, aby dostarczy to innowacyjne narzędzie.</h1>
         <?php if ($signed): ?>               
         <div class="list">
            <?php foreach(getCompositions($user_id) as $composition): ?>
            <div class="list-group select-list">
               <div class="list-group-item list-group-item-action">
                  <a href="#" class="d-inline" onClick="goToEditor(<?php echo $composition['id']; ?>);">Kopozycja <?php echo $iterator++." - ". $composition['name'] ?></a>
                  <form method="post" class="float-right d-block delete-link">
                     <button type="submit" class="fa fa-trash delete-icon float-right d-block" name="delete" id="delete" value="<?php echo $composition['id'] ?>"></i></button>
                  </form>
                  <button type="submit" onClick="rename('<?php echo $composition['id'] ?>')" class="fa delete-icon fa-edit float-right d-block mr-2" name="delete" id="delete" value="<?php echo $composition['id'] ?>"></i></button>
               </div>
               <?php endforeach; ?>
               <form method="post">
                  <button type="submit" class="list-group-item list-group-item-action list-group-item-info text-center" name="add_comp" id="add_comp"><i class="fa fa-plus-circle"></i></button>
               </form>
            </div>
            <?php else: ?>
            <div class="col-sm-8 m-auto pt-sm-4">
               <div class="card">
                  <div class="card-body">
                     <p class="card-text text-center">Nie masz uprawnień, aby przeglądać tę stronę. Musisz się zalogować!</p>
                  </div>
               </div>
            </div>
            <?php endif; ?>
         </div>
      </div>

      <script type="text/javascript">
          var id = '<?php echo $comp_id; ?>';
          var data = '<?php echo $comp_data; ?>';
          
          localStorage.setItem("id", id);
          localStorage.setItem("json", data);
          location.href = 'index.php';
      </script>
   </body>
</html>