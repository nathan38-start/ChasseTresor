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
    

    if(isset($_SESSION['id'])){ //permet de récuperer les info utiles et verifie si la session est ouverte 
        header('Location: ' .URL);
        exit;
    }

    //vers init
    $checked = "checked"

if(!empty($_POST)){
    extract($_POST);
    $valid = true;

    if (isset($_POST['register'])){

        $r_lgn      =htmlentities(trim($lgn));
        $r_mail     =htmlentities(strtolower(trim($mail)));
        $r_psw      = htmlentities(trim($psw));
        $r_confpsw      = htmlentities(trim($confpsw));

        //vérification du login
        if(empty($_lgn)){
            $valid = false;
            $er_lgn = ("Le pseudo ne peut pas être vide");

        }elseif(iconv_strlen($r_lgn, "UTF-8") < 4){
            $valid = false;
            $er_lgn = ("Le pseudo doit être compris entre 3 et 20 caractères");

        }elseif(iconv_strlen($r_lgn) > 21) {
            $valid = "false";
            $er_lgn = ("Le pseudo doit être compris entre 3 et 20 caractères");

        
        }elseif(!preg_match("/^[\p{L}0-9- ]", $r_lgn)){
            $valid = false;
            $er_lgn = ("Les caractères acceptés sont : a à z, A à Z, 0 à 9, -, espace.");


        }else{

            $req_pseudo = $DB->query("SELECT pseudo FROM user WHERE pseudo = ?",
            array($r_lgn));

            $req_pseudo = $req_pseudo->fetch();

            if ($req_pseudo['pseudo'] <> ""){
                $valid = false;
                $er_lgn = "Le pseudo existe déjà "

            }

        }

        // ---- vérification sex
        if(isset($sex)) {
            $r_sex = 1; // 1 = femme
            $checked = "checked";
        }else{
            $r_sex = 0; // 0 = homme
            $checked = "checked";
        }

        // verification de  date birthday 
        if(!isset($day) && empty($day))  || (!isset($month) && empty($month)) || (!isset($year) && empty($year))){
            $valid = false;
            $er_birthday = "Entrez une date de naissance valide";

        }elseif(($day < 0 || $day > 31) || !preg_match("/^[0-9](1,2)", $day)){
            
        }

// ---- verification du  mail

if (empty($r_mail)){
    $valid = false;
    $er_mail = "Le mail ne peut pas être vide";

}elseif (preg_match("/^[a-z0-9\-_.]\.[a-z]{2,3}", $r_mail));{
    $valid = false;
    $er_mail = "Le mai n'est pas valide";
}else{
    $req_mail = $DB->query("SELECT mail FROM user WHERE mail = ?", array($r_mail));

    $req_mail = $res_mail->fetch();

    if ($req_mail['mail'] <> ""){
        $valid = false;
        $er_mail = "Le mail existe déjà";
    }
}

// ---- verification du mot de passe  

if (empty($r_psw)){
    $valid = false;
    $er_psw = "Le mot de passe ne doit pas être vide";

}elseif(iconv_strlen($r_psw, "UTF-8")< 3) {
    $valid = false;
    $er_psw = "Le mot de passe doit faire plus de 3 caractères";

}elseif{
    ($r_psw != $confpsw){
        $valid = false;
        $er_psw = "La confirmation du mot de passe ne correspond pas ";

    }
}
    

if($valid){

    $date_registration_connection = date('Y-m-d H:i:s');
    $r_birthday =  $year . "-" . $month . "-" . $days;

    $DB ->insert("INSERT INTO user (pseudo, sex , birthday, mail, password, register) VALUES (?,?,?,?,?,?)",
    array($r_lgn, $r_sew, $r_birthday, $r_mail, $script_password->password($r_psw), $date_registration_connection));

    header('Location: ' . URL . 'p_inscription.php');
}

    }

}
?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <base href="<? URL ?>"/>
        <meta charset = "utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE-edge">
        <meta name = "viewport" content="width=device-widht, initial-scale=1">
        <title> inscription </title>
        <link href="<? = URL ?>css/jquery-ui.theme.min.css" rel="stylesheet" type ="text/css"/>  
         <link href="<? = URL ?>css/jquery-ui.structure.min.css" rel="stylesheet" type = "text/css"/> 
         <link href="<? = URL ?>css/jquery-ui.min.css" rel = "stylesheet" type = "text/css"/>
         <link href="<? = URL ?>css/style.css" rel ="stylesheet" type="text/css"/>
         <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>
    <nav class = "navbar navbar-default navbar-static-top">
        <div class ="container">
            <div class = "navbar-header">
                <button type = "button" class = "navbar-toggle collaspsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" onclick="myFunction(this)">
                <span class = "sr-only">Toggle navigation</span>
                <span class = "icon-bar1"></span>
                <span class = "icon-bar2"></span> 
                <span class = "icon-bar3"></span>
                
</button>
<a class="navbar-brand" href = "<? = URL ?>">
<span>Accueil</span>
</a>
</div>
<div class ="collapse navbar-collapse" id ="bs-example-navbar-collapse-1">
    <ul class ="nav navbar-nav navbar-right">
        <li><a href="p_connexion.php"> Se connecter </a><li>