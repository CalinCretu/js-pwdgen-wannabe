// Chiedi all’utente il suo nome:
// dichiarare una variabile
let userName

//   - assegnare alla variabile il valore restituito da un prompt
userName = prompt('Please enter your NAME')
console.log(userName)

// Chiedi il suo cognome:
// dichiarare una variabile
let userSurname

// assegnare alla variabile il valore restituito da un prompt
userSurname = prompt('Please enter your SURNAME')
console.log(userSurname)

// Chiedi il suo colore preferito
// dichiarare una variabile
let userColor

// assegnare alla variabile il valore restituito da un prompt
userColor = prompt('Please enter your favourite COLOUR')
console.log(userColor)

// Aggiungere un numero casuale per completare la password:
// dichiarare una variabile
let randomNumber

// dare un valore casuale alla variabile
randomNumber = Math.floor(Math.random() * 101)
console.log(randomNumber)

// dichiarare una variabile con coincatenate il nome utente con congnome utente, colore preferito e numero casuale
let passwordNew
passwordNew = userName + userSurname + userColor + randomNumber

// recuperare con js l'elemento del dom con id = 'password'
const messageDomElement = document.getElementById('password')
console.dir(messageDomElement)

// modificare l'innerHTML del h1 con il valore della variabile password
messageDomElement.innerHTML = passwordNew