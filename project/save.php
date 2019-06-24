<?php
   if(include 'php/sql.php');
   if (isset($_POST['id']) && isset($_POST['json']))
   {
       saveComposition($_POST['id'],$_POST['json']);
   }
   if (isset($_POST['id']) && isset($_POST['name']))
   {
       renameComposition($_POST['id'],$_POST['name']);
   }
?>