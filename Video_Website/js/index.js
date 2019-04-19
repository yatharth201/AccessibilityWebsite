/*
    * LOVELY THINGS
    */

var options = {
  valueNames: [ 'name', 'year', 'location', 'age', 'gender', 'dname', 'disability', 'theme', 'language' ],
   item: '<li><h3 class="name"></h3><p class="year"></p></li>'
};

var videos = [
    {
      "name": "Dorca Rose",
      "year": "2018",
      "location": "Memphis",
      "age": "",
      "gender": "boy",
      "disability": [
        {
          "dname": "ASD"
        },
        {
          "dname": "ADHD"
        }
      ],
      "theme": "school providing enough information, 1:1 therapy not just group, Classroom aides participating in IEPs",
      "language": "Spanish"
    } 
];
var featureList = new List('lovely-things-list', options);


$('#filter-games').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "Game") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-beverages').click(function() {
  featureList.filter(function(item) {
    if (item.values().category == "Beverage") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});
$('#filter-none').click(function() {
  featureList.filter();
  return false;
});