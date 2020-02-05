$(document).ready(function() {

  // ask user how many items to put inside the array between 1 and 6
  do {
    var arrayLength = parseInt(prompt('Insert array length (between 1 and 6)'));
  } while (arrayLength < 1 || arrayLength > 6);

  // generate the array with that specific length using the ajax call with the specific api
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/integers",
    method: "GET",
    data: {
      min: 1,
      max: 6,
      items: arrayLength
    },
    success: function(data, state) {
      // create the array with the set length
      var array = data.response;
      console.log(data.response);
      // print some dice with the values in the array
      for (var i = 0; i < array.length; i++) {
        var dice = array[i];
        // handlebars
        var source = $('#template').html();
        var template = Handlebars.compile(source);
        var context = {
          number: array[i]
        };
        var html = template(context);
        $('.container').append(html);
      }
    },
    error: function(request, state, error) {
      console.log(error);
    }
  });

});
