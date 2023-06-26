<?php

/**
 * Function that check user if they exist </br>
 * check the password
 * @author Fred
 */
function login($user, $pass, $link)
{
    
    $req = $link->prepare("SELECT * FROM users WHERE user = ? AND password = MD5(?)");
    $req->bind_param("ss", $user, $pass);

    $req->execute();

    $result = $req->get_result();

    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();
            $_SESSION["id_user"] = $user["id"];
            echo json_encode(array("success" => "Utilisateur OK", "user" => $user));
    } else {
        echo json_encode(array("error" => "Invalid user or incorrect password!"));
    }
}

function fetchMenu($link)
{
    $req = $link->prepare("SELECT * FROM menus");
    echo json_encode(array("error" => "Invalid user or incorrect password!"));
}