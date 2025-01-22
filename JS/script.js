// Funzione per ottenere gli indirizzi email usando Axios
function getEmails() {

    const emailList = document.getElementById("email-list");

    // Eseguiamo 10 richieste per generare le email
    for (let i = 0; i < 10; i++) {
        // Chiamata API con Axios
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (response) {
                // Estrarre l'email dalla risposta
                const email = response.data.response;

            }

        )}
        
}