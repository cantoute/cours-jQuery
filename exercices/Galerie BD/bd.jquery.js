$(function () {
  // exemple de récuperation de valeur d'attribut title dans la console
  $('aside a').each(function () {
    console.log($(this).attr('title'));
  });

  // sélectionner tous mes liens de vignette
  var navLinks = $('aside a');

  navLinks.on('click', function (event) {
    // désactiver l'action par défaut d'un click sur un lien
    event.preventDefault();

    navLinks.filter('.active').removeClass('active');
    $(this).addClass('active');

    // récupérer l'attribut title du lien
    // ou utiliser une valeur par défaut
    let title = $(this).attr('title') || 'Sans titre';

    let imgSrc = $(this).attr('href');

    let imgAlt = $('img', this).attr('alt') || title;

    // actualiser l'affichage
    $('figure img').attr('src', imgSrc).attr('alt', imgAlt);
    $('figcaption').text(title);

    console.log('Viewing', title, imgSrc);
  });
});
