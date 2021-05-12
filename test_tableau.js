//Variables globales
var TableauJeu ;
var tresorCarte="Trésor" ;
var nbMax=9 ;
var tresorX ;
var tresorY ;

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
			ligneTab+='<td onclick="choix(this.id)" id='+i+"-"+h+'></td>' ;
		}
		ligneTab+="</tr>" ;
		
	}
	//ajout de toutes les lignes au tableau
	document.getElementById("carte").innerHTML+=ligneTab ;

}

// choix() récupère l'ID de la case cliquée et traite le résultat
function choix(idCase) {
	//console.log("Case clic"+idCase) ;
	console.log("Case clic "+idCase);
    tabCoordonnees = idCase.split("-");
    var idX=tabCoordonnees[0] ;
    var idY=tabCoordonnees[1] ;
    console.log("X: "+idX+"  Y: "+idY) ;

	//console.log("coordonnées trésor"+tresorX+"y"+tresorY) ;
	if(TableauJeu[idX][idY]=="Trésor")
	{
		console.log("Le trésor est ici") ; 
		//soit redirection vers une autre page pour anoncer la victoire et afficher le score
		//ou alors modifier le texte du nombre de points pour afficher un message de victoire
	}
	else{
	//la case ne contient pas le trésor
		if(idY==tresorY) {
			//si la case cliquée est dans la bonne colonne 
			var caseClic=document.getElementById(idX +"-" + idY);
			console.log(caseClic);
			caseClic.classList.add("bonneColonne");	
		}
		else if (idX==tresorX){ 
			//si la case cliquée est dans la bonne ligne
			var caseClic=document.getElementById(idX +"-" + idY);
			console.log(caseClic);
			caseClic.classList.add("bonneColonne");	 
			
		}
		else {
			var caseClic=document.getElementById(idX +"-" + idY);
			console.log(caseClic);
			caseClic.classList.add("bad");
			 
			
		}
	}
}
	
		//si la case cliquée est dans la bonne colonne => ajouter une classe et faire un traitement avec le css => modifer la couleur de la case
		//si la case cliquée est dans la bonne ligne => ajouter une classe et faire un traitement avec le css => modifer la couleur de la case
		//si la case n'a rien à voir => ajouter une classe et faire un traitement avec le css => modifer la couleur de la case