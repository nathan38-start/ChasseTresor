<?php
    session_start();

    include('bd/connexion.php');
    include('fonction/domaine.php');
    include('function/guid.php');
    include('function/password.php');
    include('function/date.php');

    $domain         = new Domain;
    $crypt_password = new Password;
    $date_month     = new Date;

    define("URL", $domain->domain());
    

    if(isset($_SESSION['id'])){
        header('Location: ' .URL);
        exit;
    }

    //vers init
    $checked = "checked"

    