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

function getJson($id)
{
     $conn = OpenCon();
     $sql_content = "SELECT data FROM compositions WHERE id ='$id'";
     $query = $conn->query($sql_content);
     $result = $query->fetch_assoc();
     CloseCon($conn);
     return $result['data'];
}



function getCompositions($user_id): iterator
{
    $conn = OpenCon();
    $sql_content = "SELECT id, name, data FROM compositions WHERE user_id = '$user_id'";
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
     CloseCon($conn);
     return $query->num_rows;
}

function addComposition($user_id)
{
     $conn = OpenCon();
     $sql_content = "INSERT INTO compositions (user_id, name)
     VALUES ('$user_id', 'Nowy')";
     $query = $conn->query($sql_content);
     CloseCon($conn);
}

function deleteComposition($id)
{
     $conn = OpenCon();
     $sql_content = "DELETE FROM compositions WHERE id = '$id'";
     $query = $conn->query($sql_content);
     CloseCon($conn);
}

function saveComposition($id, $data)
{
     $conn = OpenCon();
     $sql_content = "UPDATE compositions SET data = '$data' WHERE id = '$id'";
     $query = $conn->query($sql_content);
     CloseCon($conn);
}

function renameComposition($id, $name)
{
     $conn = OpenCon();
     $sql_content = "UPDATE compositions SET name = '$name' WHERE id = '$id'";
     $query = $conn->query($sql_content);
     CloseCon($conn);
}

?>