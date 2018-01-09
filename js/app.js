$(document).ready(function() {
  var mCursos = '../data/cursos.json';

  function cargarCursos(path) {
    $.getJSON(path, function(json) {
      for(i in json) {
        console.log(i);
        console.log(json[i])

        var item = "";
        item += '<div class="col-md-4">'
        item += '<div class="card ' + json[i].class + '">';
        item += '<img class="card-img-top" src="' + json[i].imagen + '" alt="Card image cap">';
        item += '<div class="card-block">';
        item += '<h4 class="card-title">' + json[i].nombre + '</h4>';
        item += '<p class="card-text"></p>';
        item += '<a href="#" class="btn btn-primary">Anotarse</a>';
        item += '</div>';
        item += '</div>';
        item += '</div>';

        $('.container > .row').append(item);
      }
    });
  }

  $('#btnCursos').on('click', function() {
    cargarCursos(mCursos);
  });
});
