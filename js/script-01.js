$(document).ready(function() {

  var bikes = [
    {
      'name' : 'fast',
      'weight' : 5
    },
    {
      'name' : 'slow',
      'weight' : 8
    },
    {
      'name' : 'quick',
      'weight' : 3
    },
    {
      'name' : 'mid',
      'weight' : 7
    }
  ]

  console.log(bikes);

  // print the bike that has less weight than the others
  var lessWeight = bikes[0];
  for (var i = 0; i < bikes.length; i++) {
    var bike = bikes[i];
    if (bike['weight'] < lessWeight.weight) {
      lessWeight = bike;
    }
  }

  console.log(lessWeight);

});
