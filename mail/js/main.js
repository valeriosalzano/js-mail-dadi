
// Chiedi all’utente la sua email
const userMail = prompt("Inserisci la tua mail per effettuare l'accesso. Per esempio 'mail@dominio.com'");

//controlla che sia nella lista di chi può accedere
const whitelist = ['mail1@hotmail.com','mail2@hotmail.com','mail3@gmail.com','mail4@alice.com'];

let authorized = false;
for ( let i=0; i<whitelist.length; i++) {
    if (userMail === whitelist[i]) {
        authorized = true;
    }
}

// stampa un messaggio appropriato sull’esito del controllo
if (authorized == true) {
    alert("Accesso effettuato.")
} else {
    alert("Accesso non autorizzato.")
}

// ** BONUS: Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina. **
