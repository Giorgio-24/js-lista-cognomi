/* Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova */



var LastnamesList = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
console.log(LastnamesList)

var printList = document.getElementById('list')
printList.innerHTML = '1) La lista precedente era: ' + LastnamesList.join(', ') + '.';

do {//VALIDATION
    var userLastname = prompt('Inserisci il tuo cognome');
} while (!userLastname || userLastname.trim() === '' || !isNaN(userLastname));

userLastname = userLastname.trim();

var userLastnameCapitalized = userLastname.charAt(0).toUpperCase() + userLastname.substring(1).toLowerCase();

var listWithYou = LastnamesList.push(userLastnameCapitalized);
console.log(listWithYou)

var printListWithYou = document.getElementById('you-in-list')
printListWithYou.innerHTML = '2) Adesso anche "' + userLastnameCapitalized + '" risulta in lista: ' + LastnamesList.join(', ') + '.';

var newListOrdered = LastnamesList.sort();
console.log(newListOrdered)

var listInAlphabeticalOrder = document.getElementById('list-in-alphabetical-order')
listInAlphabeticalOrder.innerHTML = '3) La nuova lista, partendo in in ordine alfabetico è: ' + newListOrdered.join(', ') + '.';

var userPosition = parseInt(LastnamesList.indexOf(userLastnameCapitalized) + 1);
console.log(userPosition)

var yourPositionInList = document.getElementById('your-position-in-list')
yourPositionInList.innerHTML = '4) Lei è il numero ' + userPosition + ' in lista.';
