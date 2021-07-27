// dé-commentez la ligne suivante pour ne plus avoir la confirmation en "Reload"
// /*

$(document).on('click', function (event) {
  // event.target fait référence à l'élément
  // du DOM qui a reçu l'évènement.
  console.log(`body reçoit l'évènement clicked: `, event.target.nodeName);
});

// eq: window.onbeforeunload = function () {};
$(window).on('beforeunload', function () {
  console.log(`Astuce : pour ne pas suivre un lien voir event.preventDefault()`);
  return 'Voulez-vous réellement quitter la page ?';
});

// */
