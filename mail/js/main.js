/* Versione base con prompt

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

*/

// ** BONUS: Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina. **

const whitelist = ['mail1@hotmail.com','mail2@hotmail.com','mail3@gmail.com','mail4@alice.com'];

const submit = document.getElementById("submit");

submit.addEventListener('click', 
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
            printResult.innerHTML = "Accesso effettuato"
            printResult.className = "success"
        } else {
            printResult.innerHTML = "Accesso non autorizzato"
            printResult.className = "fail"
        }
    }
)
