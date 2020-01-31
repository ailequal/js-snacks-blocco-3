$(document).ready(function() {

  var names = [];

  for (var i = 0; i < 10; i++) {

    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/name",
      method: "GET",
      success: function (data, state) {

        var name = data.response;
        names.push(name);
        if (names.length === 10) {

          console.log(names);
          var userName = prompt('Inser your name');
          console.log(userName);

          var check = false;

          // for (var i = 0; i < names.length; i++) {
          //   if (names[i] === userName) {
          //     check = true;
          //   }
          // }

          var i = 0;
          while (!check && i < names.length) {
            if (names[i] === userName) {
              check = true;
            }
            i++;
          }

          if (check) {
            console.log('Welcome');
          } else {
            console.log('Access denied');
          }
        }

      },
      error: function (request, state, error) {
        console.log(state, error);
      }
    });
    
  }

});
