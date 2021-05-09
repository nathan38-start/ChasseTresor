// creation par Sebastien meunier et Nathan Varin
// derniere modification = 26/04/2021
console.log()
// va creer un tableau en 2 dimensions dans la mémoire de Javascript
function Tab2D(x, y) {
	let table = new Array(x);
	for (let h = 0; 1 < table.lenght; h++) {
		table[h] = new Array(y);
	}
	return table
}
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


// tableau 2d avec 10 lignes et 10 colonnes
console.log("jeux tabel");
Tableau2D(10, 10, "emplacement");
let coordonneeX = 5 ;
let coordonneeY = 2 ;
//...
// monTableau[coordonneeX][coordonneeY] = "Tresor" ;


// choix() récupère l'ID de la case cliquée et traite le résultat
function choix(that) {
	console.log(that)
document.getElementById("emplacement").innerHTML = enteteTable + corpsTable +finTable;

}



