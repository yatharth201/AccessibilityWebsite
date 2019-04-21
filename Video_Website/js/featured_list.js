function addItem(){
    var ul = document.getElementById("homelist");
    for (var i = 0; i < values.length; i++) {
        var li = document.createElement("li");
        li.setAttribute('class', 'bogus'); // Change this to set the id of the li item
        var iframe = document.createElement('iframe');
        iframe.setAttribute('width', 560);
        iframe.setAttribute('height', 315);
        iframe.setAttribute('src', values[i].link);
        iframe.setAttribute('allow', "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
        iframe.setAttribute('frameborder', 0);

        var age = "Age: ";
        var age_ = age.bold();
        var gender = "Gender: ";
        var gender_ = gender.bold();
        var year = "Year: ";
        var year_ = year.bold();
        var location = "Location: ";
        var location_ = location.bold();
        var disab = "Disability: ";
        var disab_ = disab.bold();
        var theme = "Theme: ";
        var theme_ = theme.bold();
        var language = "Language: ";
        var language_ = language.bold();

        var box = document.createElement("div");
        box.setAttribute('class', 'box');

        var age = document.createElement("p");
        age.setAttribute('class', 'age');
        age.innerHTML = age_ + values[i].age;

        var gender = document.createElement("p");
        gender.setAttribute('class', 'gender');
        gender.innerHTML = gender_ + values[i].gender;

        var year = document.createElement("p");
        year.setAttribute('class', 'year');
        year.innerHTML = year_ + values[i].year;

        var location = document.createElement("p");
        location.setAttribute('class', 'location');
        location.innerHTML = location_ + values[i].location;

        var disab = document.createElement("p");
        disab.setAttribute('class', 'disability');
        disab.innerHTML = disab_ + values[i].disability;

        var theme = document.createElement("p");
        theme.setAttribute('class', 'theme');
        theme.innerHTML = theme_ + values[i].theme;

        var language = document.createElement("p");
        language.setAttribute('class', 'language');
        language.innerHTML = language_ + values[i].language;

        var br = document.createElement("br");

        li.appendChild(iframe);
        box.appendChild(age);
        box.appendChild(gender);
        box.appendChild(year);
        box.appendChild(location);
        box.appendChild(disab);
        box.appendChild(theme);
        box.appendChild(language);
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
      "name": "Cynthia Hunt",
      "year": "2018",
      "location": "Memphis",
      "age": "Adult Service",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Funding for programs for adult services; Parent training for law, rights and advocacy; After school program;",
      "language": "English",
      "link": "https://www.youtube.com/embed/lxjLjLcE2do"
    },
    {
      "name": "Jannes Roth",
      "year": "2018",
      "location": "Memphis",
      "age": "Adult Service",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Educational training on rights and responsibilities; Increase Part D funding (Parent resource centers);",
      "language": "English",
      "link": "https://www.youtube.com/embed/lxjLjLcE2do"
    },
    {
      "name": "Shontie Brown",
      "year": "2018",
      "location": "Memphis",
      "age": "Early Childhood",
      "gender": "Girl",
      "disability": "Down Syndrome",
      "theme": "More funding for inclusion with LRE;",
      "language": "English",
      "link": "https://www.youtube.com/embed/lxjLjLcE2do"
    },
    {
      "name": "Aceriane Leal",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Boy",
      "disability": "ADHD",
      "theme": "Gap in transition service between EI and Kinder; Training for school personnel and parents, Resources for parents",
      "language": "English",
      "link": "https://www.youtube.com/embed/lxjLjLcE2do"
    },
    {
      "name": "Amanda Bailey",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Early Childhood",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Inclusion in LRE; Seamless transition from EI",
      "language": "English",
      "link": "https://www.youtube.com/embed/lxjLjLcE2do"
    }
];
addItem();
var userList = new List('users', options);

