console.log('coucou');

// exemple de récuperation de valeur d'attribut title dans la console
console.log(document.querySelector('aside a').getAttribute('title'));

// je selectionne tous mes liens de vignette
var mesLiens = document.querySelectorAll('aside a');
console.log(mesLiens);

// boucle sur chacun des liens pour écouter l'événement click
for (var i = 0; i < mesLiens.length; i++) {
  // écouter événement click chacun des liens successivement
  mesLiens[i].addEventListener('click', function (event) {
    // désactiver comportement par défaut dû au clic sur la balise <a>
    event.preventDefault();

    // ***********************************
    // recuperation de valeur d'attributs
    // ***********************************

    // récupérer le href
    let lien = this.getAttribute('href');
    // récupérer l'attribut title du lien
    let titre = this.getAttribute('title');
    // console.log(titre);

    // ***********************************
    // attribution de valeur d'attribut
    // ***********************************

    // donner à l'attribut src de l'image dans figure le lien récupéré sur la vignette
    let grandeImage = document.querySelector('figure img');
    grandeImage.setAttribute('src', lien);
    // title du <a> en innerText de figcaption
    document.querySelector('figcaption').innerText = titre;
    // alt de grande image, le title récupéré sur le <a>
    grandeImage.setAttribute('alt', titre);

    // passer tous les contours en noir en bouclant sur toutes les vignettes
    for (var j = 0; j < mesLiens.length; j++) {
      mesLiens[j].style.borderColor = 'black';
    }

    // affecter un contour rouge sur l'image cliquée
    this.style.borderColor = 'red';
  });
}
