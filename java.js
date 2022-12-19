////console.log('hello world')

/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21*/

/*
1-creare variabile nome
2-assegnare alla variabile nome il valore in input
3-creare variabile cognome
4-assegnare alla variabile cognome il valore in input
5-creare variabile colore-preferito
6-assegnare alla variabile colore-preferito il valore in input
7-sommare tutte le variabili e la stringa 21
8-"stamparla"
*/


const nome = prompt("qual\' è il tuo nome");
////console.log(nome);
const cognome = prompt("qual\' è il tuo cognome");
////console.log(cognome);
const colorePreferito = prompt("qual\' è il tuo colore preferito?");
console.log(colorePreferito);
////console.log(colorePreferito);
const testoFinale = nome + cognome + colorePreferito + "21"
console.log(testoFinale);

const posizioneTesto = document.getElementById("testo")
////console.log(posizioneTesto);
posizioneTesto.innerText = (testoFinale);

