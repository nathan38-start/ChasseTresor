//auteurs: Sébastien Meunier et Nathan Varin 
//dernières modifications le 14 Mai 2021 
 
//Variables globales
var TableauJeu ;
var tresorCarte="Trésor" ;
var nbMax=9 ;
var tresorX ;
var tresorY ;
var scoreJoueur ;

//Création du tableau (en mémoire)
function Tab2D(x, y) {
	var table = new Array(x);
	for (var i = 0; i < table.length; i++) {
		table[i] = new Array(y);
	}
	return table ;
}

//Fonction d'initialisation du jeu
function init() {
	//Remise de la partie à zéro (supprimer le bouton, vider le tableau pour laisser la place aux nouvelles cases, remise du score à 0)
	document.getElementById("bouttonInit").innerHTML="" ;
	document.getElementById("carte").innerHTML="" ;
	document.getElementById("scoreJoueur").innerHTML="0"  ;
	scoreJoueur=0 ;

	//Création et récupération du tableau (en mémoire) dans une variable "globale"
	TableauJeu=Tab2D(10, 10) ;

	//Définir l'emplacement du trésor avec un Random
	tresorX = Math.floor(Math.random() * nbMax + 1) ;
	tresorY = Math.floor(Math.random() * nbMax + 1) ;

	//Ajouter le trésor dans le tableau (en mémoire)
	TableauJeu[tresorX][tresorY]=tresorCarte ;
	//console.log(TableauJeu) ;

	//Générer le tableau en html (i=numéro de ligne / h numéro de colonne) => départ à 0
	//Création de la ligne
	var ligneTab="" ;
	for(var i=0; i<=9;i++)
	{
		ligneTab+="<tr>"
		for(var h=0; h<=9;h++)
		{
			//création des colonnes
			ligneTab+='<td class="caseCarte" onclick="choix(this.id)" id='+i+"-"+h+'></td>' ;
		}
		ligneTab+="</tr>" ;
		
	}
	//ajout de toutes les lignes au tableau
	document.getElementById("carte").innerHTML+=ligneTab ;

}

// choix() récupère l'ID de la case cliquée et traite le résultat
function choix(idCase) {
    tabCoordonnees = idCase.split("-");
    var idX=tabCoordonnees[0] ;
    var idY=tabCoordonnees[1] ;

	var caseClic=document.getElementById(idX +"-" + idY);

	if(TableauJeu[idX][idY]=="Trésor")
	{
		scoreJoueur += 50;
		//la case contient le trésor
		caseClic.classList.add("tresor");
		//Empecher l'utilisateur de cliquer à nouveau
		//Récupérer les td dans un tableau
		var tabTd= document.getElementsByClassName("caseCarte");
		//retirer pour chaque case sa capacité à être cliquable
		for (var i=0 ; i<tabTd.length ;i++)
		{
			tabTd[i].removeAttribute("onclick") ;
		}

		//Proposition de reccomencer le jeu
		document.getElementById("bouttonInit").innerHTML+='<button onclick="init()">Recommencer le jeu</button>' ;
	}
	else{
	//la case ne contient pas le trésor
		if(idY==tresorY) {
			scoreJoueur += 10;
			//si la case cliquée est dans la bonne colonne 
			caseClic.classList.add("bonneColonne");	
		}
		else if (idX==tresorX){ 
			scoreJoueur += 10;
			//si la case cliquée est dans la bonne ligne
			//console.log(caseClic);
			caseClic.classList.add("bonneLigne");	 
		}
		else {
			caseClic.classList.add("bad");
			scoreJoueur -= 2;
		}
		
	}
	//Afficher le nouveau score
	document.getElementById('scoreJoueur').innerHTML=scoreJoueur ;

}