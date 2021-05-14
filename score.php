<?php

// 1 recuperer/controle des données 

if(!isset($_POST['pseudo'])) die ('Pseudo abs');
if (!isset($_post["score"])) die ("Erreur de score");

$pseudo = $_post["pseudo"];
$score =$_post["score"];

echo "pseudo: $pseudo<br><br>";
echo "score: $score";

// 2 se connecter a la base

try{
    include 'connexion.php';
}

// 3 causer UTF 8 
$res = $connexion->query('SET NAMES UTF8');

// 4  Création de la requete

$req = $connexion->prepare["INSERT INTO <classement (pseudo,score) VALUES (:pseudo, :score)");
$req->bindParam("!pseudo", $pseudo);
$req->bindParam("!score", $score);

// 5 execution de la requete

$req->execute();
}catch (Exception $e){
    die("Erreur grave : " _ $e-getmessage());

}

// retour au classement

header('location:score.php');

?>


