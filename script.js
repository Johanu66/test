// La chaîne de date en français
let dateString = 'octobre 3, 2024';
// Tableau pour traduire les mois français en anglais
const moisFrancais = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
const moisAnglais = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// Remplacer le mois en français par le mois en anglais
moisFrancais.forEach((mois, index) => {
    if (dateString.includes(mois)) {
        dateString = dateString.replace(mois, moisAnglais[index]);
    }
});
// Créer un objet Date à partir de la chaîne traduite
let oldDate = new Date(dateString);


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Fonction pour envoyer les données à l'API
async function sendMail(dataMail) {
    try {
        const params = new URLSearchParams(dataMail);

        // Effectuer une requête POST vers l'API
        const response = await fetch('http://localhost/randever/sending-mail-api/script.php', {
            method: 'POST', // Méthode HTTP POST
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded', // Indique que les données envoyées sont en JSON
            },
            body: params.toString()
        });

        // Vérifiez si la réponse est correcte
        if (!response.ok) {
            throw new Error('Erreur réseau : ' + response.statusText);
        }

        // Traitement de la réponse JSON (si nécessaire)
        const result = await response.json();
        console.log('Réponse de l\'API :', result);
        
    } catch (error) {
        // Gérer les erreurs
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
    }
}

var test = async function(){
    var elem = document.getElementById("RdvBranchService");
    elem.click()

    await sleep(2000)

    var selectElement = document.getElementById("formCountry");
    selectElement.value = 1;
    var event = new Event('change', { bubbles: true });
    selectElement.dispatchEvent(event);

    await sleep(2000)

    var buttonActiveRdv = document.querySelector(".buttonActiveRdv");
    buttonActiveRdv.click();

    await sleep(2000)

    var selectElement = document.getElementById("formCountry");
    selectElement.value = 1;
    var event = new Event('change', { bubbles: true });
    selectElement.dispatchEvent(event);

    await sleep(2000)

    var buttonActiveRdv = document.querySelector(".buttonActiveRdv");
    buttonActiveRdv.click();

    await sleep(10000)

    dateString = document.querySelector(".date").innerHTML;
    moisFrancais.forEach((mois, index) => {
        if (dateString.includes(mois)) {
            dateString = dateString.replace(mois, moisAnglais[index]);
        }
    });
    let dateMoreNear = new Date(dateString);

    if(dateMoreNear<oldDate){
        let dataMail = {
            name: "Nom",
            email: "ambassadebenin@gmail.com",
            subject: "Date récente trouvée",
            message: "Date récente trouvée : " + dateMoreNear

        }
        console.log("Date récente trouvée : " + dateMoreNear);
        sendMail(dataMail);
        oldDate = dateMoreNear;
    }
    else{
        console.log("Rien trouvé");
    }

    await sleep(2000)

    var back = document.querySelector(".back");
    back.click();


}

function startInterval() {
    setInterval(async () => {
        try {
            await test();
        } catch (error) {
            console.error('Erreur lors de l\'exécution de la fonction async :', error);
        }
    }, 120000); // Intervalle de 2 secondes
}

startInterval();