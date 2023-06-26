<?php
session_start();

require_once './includes/dbo.inc.php';
require_once './includes/functions.inc.php';

switch ($_POST["action"]) {
    case "login":
        $username = $_POST["username"];
        $pwd = $_POST["pwd"];

        login($username, $pwd, $link);
        break;

    case "session":
        if (!isset($_SESSION["id_user"]) && !isset($_COOKIE["id_user"]))
            echo json_encode(array("session" => "none"), true);
        else {
            if (isset($_SESSION["id_user"]))
                echo json_encode(array("session" => $_SESSION["id_user"]), true);
        }
        break;

    case "logout":
        session_destroy();
        echo json_encode(array("kill" => "session killed"), true);
        break;

    case "menu":
        fetchMenu($link);
        break;
}
