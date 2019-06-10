<?php
session_start();

function OpenCon()
 {
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "xdraw";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    $conn->query("SET CHARSET utf8");
    $conn->query("SET NAMES `utf8` COLLATE `utf8_polish_ci`");
    return $conn;
 }
 
function CloseCon($conn)
 {
    $conn -> close();
 }   
?>