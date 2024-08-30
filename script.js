// Tableau pour traduire les mois français en anglais
const moisFrancais = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
const moisAnglais = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Chaîne de date en français
let dateString = 'octobre 3, 2024';

// Remplacer le mois en français par le mois en anglais
moisFrancais.forEach((mois, index) => {
    if (dateString.includes(mois)) {
        dateString = dateString.replace(mois, moisAnglais[index]);
    }
});

// Créer un objet Date à partir de la chaîne traduite
let oldDate = new Date(dateString);

// Fonction pour introduire un délai
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Fonction pour envoyer les données à l'API
async function sendMail(dataMail) {
    try {
        const params = new URLSearchParams(dataMail);

        // Effectuer une requête POST vers l'API
        const response = await fetch('http://localhost/randever/sending-mail-api/script.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
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

// Fonction principale pour automatiser les étapes
async function test() {
    // Simuler un clic sur un élément pour activer un service
    document.getElementById("RdvBranchService").click();

    await sleep(2000);

    // Sélectionner un pays dans une liste déroulante et déclencher un événement de changement
    let selectElement = document.getElementById("formCountry");
    selectElement.value = 1;
    selectElement.dispatchEvent(new Event('change', { bubbles: true }));

    await sleep(2000);

    // Cliquer sur un bouton pour activer le RDV
    document.querySelector(".buttonActiveRdv").click();

    await sleep(2000);

    // Répéter la sélection du pays et l'activation du bouton
    selectElement.value = 1;
    selectElement.dispatchEvent(new Event('change', { bubbles: true }));

    await sleep(2000);

    document.querySelector(".buttonActiveRdv").click();

    await sleep(10000);

    // Récupérer la date affichée, la traduire en anglais, et créer un objet Date
    dateString = document.querySelector(".date").innerHTML;
    moisFrancais.forEach((mois, index) => {
        if (dateString.includes(mois)) {
            dateString = dateString.replace(mois, moisAnglais[index]);
        }
    });
    let dateMoreNear = new Date(dateString);

    // Comparer les dates et envoyer un e-mail si une date plus récente est trouvée
    if (dateMoreNear < oldDate) {
        const dataMail = {
            name: "Nom",
            email: "ambassadebenin@gmail.com",
            subject: "Date récente trouvée",
            message: "Date récente trouvée : " + dateMoreNear
        };

        console.log("Date récente trouvée : " + dateMoreNear);
        await sendMail(dataMail);
        oldDate = dateMoreNear;
    } else {
        console.log("Rien trouvé");
    }

    await sleep(2000);

    // Revenir à la page précédente
    document.querySelector(".back").click();
}

// Fonction pour démarrer l'intervalle de répétition de la fonction test()
function startInterval() {
    setInterval(async () => {
        try {
            await test();
        } catch (error) {
            console.error('Erreur lors de l\'exécution de la fonction async :', error);
        }
    }, 120000); // Intervalle de 2 minutes
}

// Démarrer le processus
startInterval();
