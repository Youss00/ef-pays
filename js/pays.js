document.addEventListener('DOMContentLoaded', function () {
    // Fonction pour charger les destinations en fonction du pays sélectionné
    function chargerDestinations(pays) {
        var url = `https://gftnth00.mywhc.ca/tim47/wp-json/wp/v2/posts?search=${pays}`;

        fetch(url)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("La requête a échoué avec le statut " + response.status);
                }
                return response.json();
            })
            .then(function (data) {
                let restapi = document.querySelector(".contenue__restapi");
                restapi.innerHTML = '';

                data.forEach(function (article) {
                    let titre = article.title.rendered;
                    let contenu = article.content.rendered.substr(0, 400) + "...";
                    let image = article.featured_media ? article._embedded['wp:featuredmedia'][0].source_url : 'https://via.placeholder.com/150';

                    let carte = document.createElement("div");
                    carte.classList.add("restapi__cartes");
                    carte.innerHTML = `
                        <h2>${titre}</h2>
                        <div><img src="${image}" alt="${titre}" style="width:150px; height:"150px">
                        <p>${contenu}</p></div>
                        
                        
                    `;
                    restapi.appendChild(carte);
                });
            })
            .catch(function (error) {
                console.error("Erreur lors de la récupération des données :", error);
            });
    }

    // Récupérer tous les boutons de pays
    let boutons_pays = document.querySelectorAll('.bouton_categorie');
    let displayDiv = document.getElementById('pays_selectionne');

    boutons_pays.forEach(function (bouton) {
        bouton.addEventListener("click", function (e) {
            let country = e.target.textContent;

            // Afficher le nom du pays sélectionné
            displayDiv.textContent = 'Vous avez sélectionné : ' + country;

            // Charger les destinations pour le pays sélectionné
            chargerDestinations(country);
        });
    });

    // Charger les destinations par défaut avec la France
    chargerDestinations('France');
});