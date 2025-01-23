// Funzione per ottenere e mostrare gli indirizzi email
function getEmails() {

    // Vado a selezionare <ul> tramite il suo id
    const emailList = document.getElementById("email-list");

    // Svuoto il contenuto dentro l'elemento <ul> così da evitare l'accumulo di dati quando avviene la funzione
    emailList.innerHTML = "";

    // Array per memorizzare tutte le email
    const emails = [];

    // Eseguo 10 iterazioni ognuna delle quali genererà un email
    for (let i = 0; i < 10; i++) {

        // Chiamata di tipo GET all'API di Boolean che restituisce una mail casuale
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

            // Funzione di callback che viene eseguita quando la richiesta ha successo (quando riceviamo una risposta dal server)
            // (response) =>  la proprietà che contiene l'email
            .then(function (response) {

                // Estraggo l'email dalla risposta, l'oggetto JSON restituito dall'API
                const email = response.data.response;

                // Push dell'email all'array (emails)
                emails.push(email);

                // Imposto il ritardo di 0.5 secondi tra l'inserimento delle email 
                setTimeout(function () {

                    // Creo un elemento di lista (li) per ogni email dove poterle stampare
                    const listItem = document.createElement("li");

                    // Imposto il testo di questo nuovo elemento in modo che contenga l'email ottenuta
                    listItem.innerHTML = email;

                    // Aggiungo questo nuovo elemento di lista all'elemento <ul>, in modo che venga visualizzato sulla pagina
                    emailList.appendChild(listItem);

                    // Dopo aver raccolto tutte le email (dopo le 10 iterazioni) eseguo il debug
                    if (emails.length === 10) {

                        // Debugging (stampo in console)
                        console.table(emails);

                    }

                }, i * 500); 

            })

            // Metodo  per gestire gli errori che potrebbero verificarsi durante la richiesta
            .catch(function (error) {

                // Gestione degli errori
                console.error("Errore nel recupero delle email:", error);

            });

    }

}

// Aggiungo l'evento click al bottone, fa un refresh degli elementi contenuti in <ul>
const button = document.querySelector("button");

// Evento del <button>
button.addEventListener("click", getEmails);

// Chiamata alla funzione per ottenere le email
getEmails();



