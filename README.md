# Cours jQuery débutant

## Révision des bases du JavaScript

- https://slides.com/davidjegat-1/javascript-jquery/fullscreen

- Bac à sable / Playground https://jsfiddle.net/

## jQuery

### Sélecteurs jQuery (css3)

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Sélecteurs jQuery</title>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <script src="https://code.jquery.com/jquery-latest.min.js"></script>
  </head>
  <body>
    <h1>Titre h1</h1>

    <div class="voiture">Voiture 1</div>
    <div class="voiture">Voiture 2</div>
    <div class="voiture">Voiture 3</div>

    <section id="masec">Section</section>

    <article>Article</article>

    <span>span</span>

    <div>
      <input type="checkbox" name="a" />
      <span>Mary</span>
    </div>
    <div>
      <input type="checkbox" name="b" />
      <span>lcm</span>
    </div>
    <div>
      <input type="checkbox" name="c" checked="checked" />
      <span>Peter</span>
    </div>

    <script>
      // éviter tout conflit sur $
      (function ($) {
        // notre code ici

        // selection BALISE
        var myspan = $('span');
        $(myspan).css('color', 'purple');

        // selection ID
        var myid = $('#masec');
        $(myid).css('color', 'red');

        // selection CLASS
        var myclass = $('.voiture');
        $(myclass).css('color', 'green');

        // selection MULTIPLE
        var elements = $('h1, article'); // la virgule permet de prendre en compte plusieurs éléments
        $(elements).css('color', 'orange');

        $('input:not(:checked) + span').css('background-color', 'yellow');
        $('input').attr('disabled', 'disabled');
      })(jQuery);
    </script>
  </body>
</html>
```

### Évènements

```js
// click
$('h1').on('click', function () {
  event.preventDefault(); // need this on links

  alert($(this).text());
});

// hover
$('.avion').hover(function () {
  $(this).css('background-color', 'orange');
});

// mouseenter
$('table').on('mouseenter', function () {
  $(this).css('background-color', 'yellow');
});

// mouseleave
$('table').on('mouseleave', function () {
  $(this).css('background-color', 'white');
});
```

#### Évènements

```js
$('body').click(function (event) {
  // event.target fait référence à l'élément
  // du DOM qui a reçu l'évènement.
  console.log('clicked: ', event.target.nodeName);

  if (event.target.nodeName == 'IMG') {
    console.log('img src: ', event.target.src);
  }

  // alors que $(this) == $('body')
});

// intercepter le comportement par défaut du navigateur
$('a.confirm').on('click', function (event) {
  const msg = `Voulez vous suivre ce lien ? ` + event.target.href;
  const c = confirm(msg);

  // soit avec  event.preventDefault();
  if (!c) {
    event.preventDefault();
  }

  // soit en retournant false;
  // return c;
});
```

- [bind](https://api.jquery.com/bind/) / [unbind](https://api.jquery.com/unbind/) | _on/off_

  - L'objet [Event](https://api.jquery.com/category/events/event-object/)

    ```js
    // Create a new jQuery.Event object without the "new" operator.
    var e = jQuery.Event('click');

    // trigger an artificial click event
    jQuery('body').trigger(e);
    ```

    - click / dblclick

      - Ne pas suivre un lien : [Event.preventDefault()](https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault) (ou `return false;`)

      ```js
      $('a').on('click', function (event) {
        // Ne pas exécuter l'action par défaut du navigateur.
        // ex: ne pas suivre un lien ou ne pas poster le formulaire.
        event.preventDefault();

        console.log('Clic sur le lien intercepté');

        // une autre façon de faire la même chose :
        // return false;
        // Remarque : tout code suivant ne sera pas exécuté
      });
      ```

      ```html
      <!-- Pour info, ceci est possible également. -->
      <a href="#" onclick="return false;"></a>
      <form onsubmit="return false;"></form>
      ```

    - [mousemove](https://api.jquery.com/mousemove/)

      - event.pageX / event.pageY

      ```js
      $(document).on('mousemove', function (e) {
        const x = e.pageX;
        const y = e.pageY;
        $('#debug').text(`Mouse event (pageX/pageY): ${x}/${y}`);
      });
      ```

    - mouseenter / mouseleave
    - [mouseover](https://api.jquery.com/mouseover/)

    - change
    - focus / blur

      Remarque : ils ne se propagent pas en remontant le DOM, par contre focusin/focusout se propagent)

    - keypress / keyup / keydown
    - Tous les évènements (events) https://api.jquery.com/category/events/
      - [Formulaires](https://api.jquery.com/category/events/form-events/)

