/* Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova */



var lastNamesList = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
console.log(lastNamesList)

var printList = document.getElementById('list')
printList.innerHTML = '1) La lista precedente era: ' + lastNamesList + '.';

do {
    var userLastName = prompt('Inserisci il tuo cognome').trim()
} while (!userLastName || !isNaN(userLastName))

var userLastNameCapitalized = userLastName.charAt(0).toUpperCase() + userLastName.slice(1).toLowerCase();

var a = lastNamesList.push(userLastNameCapitalized);
console.log(a)

var printListWithYou = document.getElementById('you-in-list')
printListWithYou.innerHTML = '2) Adesso anche "' + userLastNameCapitalized + '" risulta in lista: ' + lastNamesList + '.';

var b = lastNamesList.sort();
console.log(b)

var listInAlphabeticalOrder = document.getElementById('list-in-alphabetical-order')
listInAlphabeticalOrder.innerHTML = '3) La nuova lista, partendo in in ordine alfabetico è: ' + lastNamesList + '.';

var c = lastNamesList.length;
console.log(c)

var d = lastNamesList.indexOf(userLastNameCapitalized) + 1;
console.log(d)

var yourPositionInList = document.getElementById('your-position-in-list')
yourPositionInList.innerHTML = '4) Lei è il numero ' + d + ' in lista.';