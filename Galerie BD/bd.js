console.log('coucou');

// exemple de récuperation de valeur d'attribut title dans la console
console.log(document.querySelector('aside a').getAttribute('title'));

// je selectionne tous mes liens de vignette
var mesLiens = document.querySelectorAll('aside a');
console.log(mesLiens);

// je boucle sur chacun de ces liens pour leur appliquer l'événement clique
for (var i = 0; i < mesLiens.length; i++) {
  // application de l'événement clique a chacun des liens successivement
  mesLiens[i].addEventListener('click', function (event) {
    // j'evite le comportement par défaut dû au clic sur la balise <a>
    event.preventDefault();

    // ***********************************
    // recuperation de valeur d'attributs
    // ***********************************

    // je récupère le href
    let lien = this.getAttribute('href');
    // je récupère le title du lien
    let titre = this.getAttribute('title');
    // console.log(titre);

    // ***********************************
    // attribution de valeur d'attribut
    // ***********************************

    // je donne à l'attribut src de mon image dans figure le lien récupéré sur la vignette
    let grandeImage = document.querySelector('figure img');
    grandeImage.setAttribute('src', lien);
    // je confère le title du <a> en innerText à figcaption
    document.querySelector('figcaption').innerText = titre;
    // je confère au alt de ma grande image, le title récupéré sur le <a>
    grandeImage.setAttribute('alt', titre);

    // je passe tous les contours en noir en bouclant sur toutes les vignettes
    for (var j = 0; j < mesLiens.length; j++) {
      mesLiens[j].style.borderColor = 'black';
    }

    // j'affecte un contour rouge sur l'image cliquée
    this.style.borderColor = 'red';
    this.style.fontSize = '30px';
  });
}
