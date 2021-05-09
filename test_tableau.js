//Variables globales
var TableauJeu ;
var tresorCarte="Trésor" ;
var nbMax=10 ;
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
	console.log(TableauJeu[tresorX][tresorY]) ;
	console.log(TableauJeu) ;

	//Générer le tableau en html
	var carteHTML=document.getElementById("carte") ;
	for(var i=0; i<10;i++)
	{

	}

}












// creation par Sebastien meunier et Nathan Varin
// derniere modification = 26/04/2021
// va créer un tableau en 2 dimensions sur la page html
function Tableau2D(ligne, colonne, emplacement) {
	texte="<table>"; 
	// création boucle for qui va permettre de génerer les coordonnées 
	for (let y = 0; y < ligne; y++) {
		texte= texte+"<tr>";
		for (let s = 0; s < colonne; s++) {
			let id =  y + "-" + s; 			// création des coordonnées 
			texte= texte+"<td class = 'jeux' id='" + id + '" onclick = "choix(this.id);"></td>';
		}
		texte= texte+"</tr>";
	} 
	texte = texte+ "</table>";
	console.log(emplacement)
	document.getElementById(emplacement).innerHTML = texte;
}

/*
// choix() récupère l'ID de la case cliquée et traite le résultat
function choix(that) {
	console.log(that)
document.getElementById("emplacement").innerHTML = enteteTable + corpsTable +finTable;

}*/