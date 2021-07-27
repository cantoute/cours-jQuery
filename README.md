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

- [bind](https://api.jquery.com/bind/) / [unbind](https://api.jquery.com/unbind/) | _on/off_

  - [events](https://api.jquery.com/category/events/)

    - change
    - click

      - Ne pas suivre un lien : [Event.preventDefault()](https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault) (ou `return false;`)

      ```js
      $('a').on('clic', function (event) {
        // Ne pas exécuter l'action par défaut du navigateur.
        // ex: ne pas suivre un lien ou ne pas poster le formulaire.
        event.preventDefault();

        console.log('Clic sur le lien intercepté');

        // une autre façon de faire la même chose :
        return false;
        // et tout code suivant ne sera pas exécuté
      });
      ```

      ```html
      <!-- Pour info, ceci est possible également. -->
      <a href="#" onclick="return false;"></a>
      <form onsubmit="return false;"></form>
      ```

    - dblclick
    - mousedown
    - mouseenter
    - mouseleave
    - [mousemove](https://api.jquery.com/mousemove/)
      - event.pageX / event.pageY
    - [mouseover](https://api.jquery.com/mouseover/)

    - focus _focusin_
    - blur _focusout_
    - keypress / keyup / keydown
