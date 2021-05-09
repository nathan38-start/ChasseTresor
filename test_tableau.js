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
	TableauJeu=Tab2D(10, 10) ;

	//Définir l'emplacement du trésor avec un Random
	tresorX = Math.floor(Math.random() * nbMax + 1) ;
	tresorY = Math.floor(Math.random() * nbMax + 1) ;

	//Ajouter le trésor dans le tableau (en mémoire)
	TableauJeu[tresorX][tresorY]=tresorCarte ;
	console.log(TableauJeu) ;

	//Générer le tableau en html
	for(var i=0; i<=9;i++)
	{
		//création de la ligne
		var ligneTab="<tr>" ;
		for(var h=0; h<=9;h++)
		{
			//ajouter les colonnes
			ligneTab+='<td onclick="choix(this.id)" id='+i+"-"+h+"></td>" ;
		}
		ligneTab+="</tr>" ;
		//ajout de la ligne au tableau
		document.getElementById("carte").innerHTML+=ligneTab ;
	}

}

// choix() récupère l'ID de la case cliquée et traite le résultat
function choix(idCase) {
	console.log("Case clic"+idCase) ;
	var idX=idCase[0] ;
	var idY=idCase[2] ;

	console.log("coordonnées trésor"+tresorX+"y"+tresorY) ;
	if(TableauJeu[idX][idY]=="Trésor")
	{
		console.log("Le trésor est ici") ; 
		//soit redirection vers une autre page pour anoncer la victoire et afficher le score
		//ou alors modifier le texte du nombre de points pour afficher un message de victoire
	}
	
	//si ce n'est pas le trésor alors 
		//si la case cliquée est dans la bonne colonne => ajouter une classe et faire un traitement avec le css => modifer la couleur de la case
		//si la case cliquée est dans la bonne ligne => ajouter une classe et faire un traitement avec le css => modifer la couleur de la case
		//si la case n'a rien à voir => ajouter une classe et faire un traitement avec le css => modifer la couleur de la case

}