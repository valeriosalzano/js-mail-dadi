// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

const userDice = Math.floor(Math.random()*6 )+1;
console.log(`Il giocatore ha ottenuto un ${userDice}.`)
const pcDice = Math.floor(Math.random()*6 )+1;
console.log(`Il computer ha ottenuto un ${pcDice}.`)

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (userDice < pcDice) {
    console.log(`Vince il computer.`)
} else if (userDice > pcDice) {
    console.log(`Vince il giocatore.`)
} else {
    console.log(`Pareggio!`)
}
