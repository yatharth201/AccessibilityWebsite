/*
    * LOVELY THINGS
    */

function addItem(){
    var ul = document.getElementById("list");
    for (var i = 0; i < values.length; i++) {
        var li = document.createElement("li");
        li.setAttribute('class', 'bogus'); // Change this to set the id of the li item
        var iframe = document.createElement('iframe');
        iframe.setAttribute('width', 560);
        iframe.setAttribute('height', 315);
        iframe.setAttribute('src', values[i].link);
        iframe.setAttribute('allow', "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
        iframe.setAttribute('frameborder', 0);

        var h3 = document.createElement("h4");
        h3.setAttribute('class', 'name');
        h3.setAttribute('text-align', 'left');  
        h3.innerHTML = "Name: " + values[i].name;

        var box = document.createElement("div");
        box.setAttribute('class', 'box');

        var year = document.createElement("p");
        year.setAttribute('class', 'year');
        year.innerHTML = "Year: " + values[i].year;

        var location = document.createElement("p");
        location.setAttribute('class', 'location');
        location.innerHTML = "Location: " + values[i].location;

        var disab = document.createElement("p");
        disab.setAttribute('class', 'disability');
        disab.innerHTML = "Disability: " + values[i].disability;

        var br = document.createElement("br");

        li.appendChild(iframe);
        box.appendChild(h3);
        box.appendChild(year);
        box.appendChild(location);
        box.appendChild(disab);
        li.appendChild(box);
        li.appendChild(br);
        ul.appendChild(li);
    }
}

var options = {
  valueNames: [ 'name', 'year', 'location', 'age', 'gender', 'dname', 'disability', 'theme', 'language', 'link' ]
};

var values = [
     {
      "name": "Dorca Rose",
      "year": "2018",
      "location": "Memphis",
      "age": "",
      "gender": "boy",
      "link": "https://www.youtube.com/embed/fP4jhDf4svo",
      "disability": "ASD, ADHD",
      "theme": "school providing enough information, 1:1 therapy not just group, Classroom aides participating in IEPs",
      "language": "Spanish"
    },
    {
      "name": "Nancy Aguila",
      "year": "2018",
      "location": "Memphis",
      "age": "",
      "gender": "boy",
      "link": "https://www.youtube.com/embed/J3UXp9jIr-U",
      "disability": "ASD",
      "theme": "Surveilance cameras in classrooms as a back-up for liability issues, inclusion with neurotypical children, increased funding in IDEA",
      "language": "Spanish"
    }
];
addItem();
var userList = new List('users', options);

