<?php
include 'config.php';

function getUserId($name): int
{
     $conn = OpenCon();
     $sql_content = "SELECT id FROM users WHERE login ='$name'";
     $query = $conn->query($sql_content);
     $result = $query->fetch_assoc();
     CloseCon($conn);
     return $result['id'];
}

function getCompositions($user_id): iterator
{
    $conn = OpenCon();
    $sql_content = "SELECT name, data FROM compositions WHERE user_id = '$user_id'";
    $query = $conn->query($sql_content);
    foreach ($query as $comp) {
        yield $comp;
    }
    CloseCon($conn);
}

function getPermission($login): int
{
     $conn = OpenCon();
     $sql_content = "SELECT level FROM users WHERE login = '$login'";
     $query = $conn->query($sql_content);
     $result = $query->fetch_assoc();
     CloseCon($conn);
     return $result['level'];
}

function isAuthorization($login, $password): bool
{
     $conn = OpenCon();
     $sql_content = "SELECT * FROM users WHERE login = '$login' AND password = '$password'";
     $query = $conn->query($sql_content);
     return $query->num_rows;
}
?>