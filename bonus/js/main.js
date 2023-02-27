const loginContainer = document.getElementById("login-container");
const mainContainer = document.getElementById("main-container");

const printUserName = document.getElementById("printUserName");

// sezione autenticazione mail
const whitelist = ['mail1@hotmail.com','mail2@hotmail.com','mail3@gmail.com','mail4@alice.com'];

const submitBtn = document.getElementById("submit");

submitBtn.addEventListener('click', 
    function(){
        // Chiedi all’utente la sua email
        const userMailDom = document.getElementById("userMail");
        const userMail = userMailDom.value;

        //controlla che sia nella lista di chi può accedere
        let authorized = false;
        for ( let i=0; i<whitelist.length; i++) {
            if (userMail === whitelist[i]) {
                authorized = true;
            }
        }

        const printResult = document.getElementById("printResult");
        // stampa un messaggio appropriato sull’esito del controllo
        if (authorized == true) {
            printResult.innerHTML = "Accesso effettuato";
            printResult.className = "success";
            printUserName.innerHTML = userMailDom.value;

            loginContainer.classList.add("d-none");
            mainContainer.classList.remove("d-none");

        } else {
            printResult.innerHTML = "Accesso non autorizzato";
            printResult.className = "fail";
        }
    }
)

// main playground section
const rollDice = document.getElementById("roll-dice");

const gameLogResetBtn = document.getElementById("game-log-reset");
const gameLogText = document.getElementById("game-log-text");

rollDice.addEventListener('click',
    function(){
        // Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
        const userDice = Math.floor(Math.random()*6 )+1;
        gameLogText.innerHTML += (`Il giocatore ha ottenuto un ${userDice}. <br>`);
        const pcDice = Math.floor(Math.random()*6 )+1;
        gameLogText.innerHTML += (`Il computer ha ottenuto un ${pcDice}. <br>`);

        // Stabilire il vincitore, in base a chi fa il punteggio più alto.
        if (userDice < pcDice) {
            gameLogText.innerHTML += (`Vince il computer.`)
        } else if (userDice > pcDice) {
            gameLogText.innerHTML += (`Vince il giocatore.`)
        } else {
            gameLogText.innerHTML += (`Pareggio!`)
        }

        gameLogText.innerHTML += '<hr>';
    }
)

gameLogResetBtn.addEventListener('click',
    function(){
        gameLogText.innerHTML = "Log inizializzato. Effettua una giocata per visualizzare il log. <hr>";
    }
)

// log-out button
const logOutBtn = document.getElementById("log-out");

logOutBtn.addEventListener('click', 
    function(){
        loginContainer.classList.remove("d-none");
        mainContainer.classList.add("d-none");
    }
)

