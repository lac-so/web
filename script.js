function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; // Masquer tous les contenus
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block"; // Afficher l'onglet sélectionné
    evt.currentTarget.className += " active"; // Ajouter la classe active à l'onglet
}

// Ouvrir l'onglet "Accueil" par défaut
document.getElementsByClassName("tablinks")[0].click();
