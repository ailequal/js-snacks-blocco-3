$(document).ready(function() {

  // create a grid 8x8 with jquery and handlebars
  for (var i = 0; i < 64; i++) {
    // handlebars
    var source = $('#template').html();
    var template = Handlebars.compile(source);
    var context = {
      // empty
    };
    var html = template(context);
    $('.grid').append(html);
  }

  // when i click on a square ask the api a random boolean value
  $(document).on('click', '.box', function() {
    // save the specific box selection
    var selection = $(this);
    // ajax call for random true or false value
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/boolean",
      method: "GET",
      success: function(data, state) {
        console.log(data.response);
        // if true set to green else red
        if (data.response) {
          selection.addClass('green');
        } else {
          selection.addClass('red');
        }
      },
      error: function(request, state, error) {
        console.log(error);
      }
    });
  });

});
