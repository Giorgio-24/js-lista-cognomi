/* Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova */

var lastNamesList = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
console.log(lastNamesList)

var userLastName = prompt('Inserisci il tuo cognome');
console.log(userLastName)

lastNamesList.push(userLastName);
console.log(lastNamesList)

lastNamesList.sort();
console.log(lastNamesList)