$(document).ready(function() {

  $(document).on('click', '.click-me', function() {
    
    $.ajax( {
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function (data, state) {
        console.log(data);
        var number = data.response;
        if (number % 2 === 0) {
          $('.even').append(number)
        } else {
          $('.odd').append(number)
        }
      },
      error: function (request, state, error) {
        console.log(state, error);
      } }
    );

  });

});
