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

        // ---- vérification mail 
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

    