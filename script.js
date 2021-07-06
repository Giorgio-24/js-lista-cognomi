/* Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova */

var lastNamesList = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
console.log(lastNamesList)

var userLastName = prompt('Inserisci il tuo cognome').trim();
console.log(userLastName)

var userLastNameCapitalized = `${userLastName[0].toUpperCase()}${userLastName.slice(1)}`;

var a = lastNamesList.push(userLastNameCapitalized);
console.log(a)

var b = lastNamesList.sort();
console.log(b)

var c = lastNamesList.length;
console.log(c)

var d = lastNamesList.indexOf(userLastNameCapitalized) + 1;
console.log(d)