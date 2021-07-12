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
  <title>
    Sélecteurs jQuery
  </title>
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
  <script src="//code.jquery.com/jquery-latest.min.js"></script>
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
    <input type="checkbox" name="a">
    <span>Mary</span>
  </div>
  <div>
    <input type="checkbox" name="b">
    <span>lcm</span>
  </div>
  <div>
    <input type="checkbox" name="c" checked="checked">
    <span>Peter</span>
  </div>

  <script>
    // éviter tout conflit sur $
    (function($){
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

      $( "input:not(:checked) + span" ).css( "background-color", "yellow" );
      $( "input").attr( "disabled", "disabled" );
    })(jQuery);

  </script>
</body>
</html>
```

### Évènements

```js
// click
$('h1').on('click', function () {
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

#### Évènements Pointeur (souris)

Documentation https://api.jquery.com/mouseover/
