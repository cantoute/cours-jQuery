$(function () {
  // 1. comme le javascript semble fonctionner, on efface le contenu de la div#msg
  $('#msg').text('');

  // 2. activer/désactiver l'édition de inputTitle
  $('input[name=activeInputTitle]').on('change', function () {
    var isChecked = $(this).prop('checked'); // Booléan (true|false)

    console.log('checked', isChecked);

    // if (isChecked) {
    //   $('#inputTitle').prop('disabled', false);
    // } else {
    //   $('#inputTitle').prop('disabled', true);
    // }
    // version courte
    $('#inputTitle').prop('disabled', !isChecked);

    // Donner le focus au inputTitle et éviter un click
    // mais uniquement si isChecked
    // if (isChecked) {
    //   $('#inputTitle').focus();
    // }
    // version courte
    isChecked && $('#inputTitle').focus();
  });

  // 3. supprimer les espaces début/fin String.prototype.trim()

  $('input[type=text]').on('change', function () {
    var txt = $(this).val().trim();

    /**
     * Bonus :
     * Si plus d'un espace, le remplacer par un seul espace
     * Expression Rationnelle :
     * \s : tout type d'espace \t (tabulation) \n (nouvelle ligne) \r (retour chariot)
     * le plus ici signifie "au moins une fois"
     * se traduit en : tout type d'espace 1 fois ou plus, remplacer par un espace ' '
     */
    txt = txt.replace(/\s+/g, ' ');

    $(this).val(txt);
  });

  // et mettre le NOM en majuscules
  $('input[name=lastName]').on('change', function () {
    const txt = $(this).val().toUpperCase();
    $(this).val(txt);
  });

  // et utiliser ucFirst() pour le Prénom
  $('input[name=firstName]').on('change', function () {
    const txt = ucFirst($(this).val());
    $(this).val(txt);
  });

  // 4. Rendre les champs nom et prénom obligatoire (au moins 2 caractères)
  //    Rendre le champ email obligatoire en vérifiant que l'email soit correct via isEmail()

  // ça peut aussi s'écrire 'input[name$=Name]' (=> dont le name se termine en 'Name')
  // on le branchera préférablement aussi sur l'événement 'change'
  $('input[name=firstName], input[name=lastName]').on('keyup change', function (e) {
    $(this)
      .closest('label') // Bonus: utiliser .trim() => pas uniquement des espaces par exemple
      .toggleClass('error', !$(this).val().trim().length > 2);

    // Juste pour info:
    // Voici comment on teste si il y a au moins 2 caractères qui ne soient pas des espaces.
    const minTwoChars = /[^\s]{2,}/.test($(this).val());
  });
  // Ainsi on pourrait déclencher l'événement au chargement (donc une fois)
  // .trigger('keyup');

  $('input[name=email]').on('keyup change', function (e) {
    const emailGood = isEmail($(this).val());
    $(this).closest('label').toggleClass('error', !emailGood);
  });

  // 5. Intercepter la soumission du formulaire
  //    et afficher dans #msg un message "Merci de vérifier votre saisie."
  //    ou "Nous avons bien reçu votre demande." si toutes les conditions sont bien remplies.

  $('form').on('submit', function (e) {
    // Intercepter la soumission du formulaire par le navigateur
    e.preventDefault();

    const good =
      $('input[name=firstName]').val().length > 2 &&
      $('input[name=lastName]').val().length > 2 &&
      isEmail($('input[name=email]').val());

    var msgOK = 'Nous avons bien reçu votre demande.';
    var msgKO = 'Merci de vérifier votre saisie.';
    var msg;

    // if (good) {
    //   msg = msgOK;
    // } else {
    //   msg = msgKO;
    // }
    // équivalent :
    msg = good ? msgOK : msgKO;

    $('#msg').text(msg);
  });
});
