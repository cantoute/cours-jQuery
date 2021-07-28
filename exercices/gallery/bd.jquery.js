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

    // récupérer l'attribut alt de <img> qui est à l'intérieur du <a> (this)
    let imgAlt = $('img', this).attr('alt') || title;

    // en fait comme c'est l'image qui reçoit le click,
    // on peut aussi la cibler avec event.target
    // imgAlt = event.target.alt || title

    // actualiser l'affichage
    $('figure img').attr('src', imgSrc).attr('alt', imgAlt);
    $('figcaption').text(title);

    console.log('Viewing', title, imgSrc);
  });
});
