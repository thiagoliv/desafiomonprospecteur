function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

export function Cidades(){
	var nameCity = ["Acton Vale", "Beaupré", "Blainville", "Candiac", "Chambly", "Dégelis", "Dorval", "Forestville", "Gaspé", "Joliette", "La Malbaie", "Léry", "Longueuil"];

	var nameCity = capFirst(nameCity[getRandomInt(0, nameCity.length + 1)]);

	return nameCity;

}

export function Imovel(){
	var nameImovel = ["Maison unifamiliale", "Condo", "Duplex", "Triplex", "Quadruplex", "Quintuplex", "Commercial", "Terrain", "Autres", "6 à 11 logements", "12 logements et plus", "Maison de chambres", "Stationnement"];

	var nameImovel = capFirst(nameImovel[getRandomInt(0, nameImovel.length + 1)]);

	return nameImovel;

}

export function Aviso(){
	var nameAviso = ["Reprises de finances", "Avis de 60 jours", "Successions", "Hypothèques légales", "Retrait d'autorisation de percevoir les loyers", "Vente pour taxes"];

	var nameAviso = capFirst(nameAviso[getRandomInt(0, nameAviso.length + 1)]);

	return nameAviso;

}

export function Frequencia(){
	var nameFrequencia = ["Jamais", "Immédiatement", "Chaque heure", "Chaque jour", "Chaque semaine"];

	var nameFrequencia = capFirst(nameFrequencia[getRandomInt(0, nameFrequencia.length + 1)]);

	return nameFrequencia;

}