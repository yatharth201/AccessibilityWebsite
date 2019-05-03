var e = document.getElementById('parent');
e.onmouseover = function() {
  document.getElementById('popup').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('popup').style.display = 'none';
}

function addItem(){
    var ul = document.getElementById("list");
    for (var i = 0; i < values.length; i++) {

        var li = document.createElement("li"); // creates a list which will be later used for search functionality
        li.setAttribute('class', 'bogus'); // Change this to set the Intellectual Disability of the li item
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
        box.setAttribute('class', 'box_all_videos');

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


        //Append to list in order to display it on the website
        li.appendChild(iframe);
        box.appendChild(age);
        box.appendChild(gender);
        //Uncomment the below line of code, in order to display the year of the video.
        //box.appendChild(year);
        box.appendChild(location);
        box.appendChild(disab);
        box.appendChild(theme);
        box.appendChild(language);
        li.appendChild(box);
        li.appendChild(br);
        ul.appendChild(li);
    }
}

//Lists the variables by which you can search
var options = {
  valueNames: ['name', 'year', 'location', 'age', 'gender', 'dname', 'disability', 'theme', 'language', 'link' ]
};

//The huge dataset
var values = [
     {
      "name": "Dorca Rose",
      "year": "2018",
      "location": "Tennessee",
      "age": "Not Disclosed",
      "gender": "Male",
      "disability": "Autism, Attention Deficit Hyperactivity Disorder",
      "theme": "school providing enough information, 1:1 therapy not just group, Classroom aides participating in IEPs",
      "language": "Spanish",
      "link": "https://www.youtube.com/embed/xB4bWeoEnMY"
    },
    {
      "name": "Nancy Aguila",
      "year": "2018",
      "location": "Tennessee",
      "age": "Not Disclosed",
      "gender": "Male",
      "disability": "Autism",
      "theme": "Surveilance cameras in classrooms as a back-up for liability issues, inclusion with neurotypical children, increased funding in IDEA",
      "language": "Spanish",
      "link": "https://www.youtube.com/embed/YaXzGFIWXQM"
    },
    {
      "name": "Johnnie Hatten",
      "year": "2018",
      "location": "Tennessee",
      "age": "Not Disclosed",
      "gender": "Not Disclosed",
      "disability": "Not Disclosed",
      "theme": "Training and educating parents on disabilities laws",
      "language": "English",
      "link": "https://www.youtube.com/embed/FdpqtZ9znKU"
    },
    {
      "name": "Barbara Duddy",
      "year": "2018",
      "location": "Tennessee",
      "age": "Not Disclosed",
      "gender": "Not Disclosed",
      "disability": "Not Disclosed",
      "theme": "District and state funding increase; Make procedural safeguard easier; Funding for parent training; School admin attending IEP; better translators for IEP meetings; BCBAs conducting FBA; Short-term objective into IEP;",
      "language": "English",
      "link": "https://www.youtube.com/embed/nds7OoBGQdc"
    },
    {
      "name": "Cynthia Hunt",
      "year": "2018",
      "location": "Tennessee",
      "age": "Adult Service",
      "gender": "Male",
      "disability": "Autism",
      "theme": "Funding for programs for adult services; Parent training for law, rights and advocacy; After school program;",
      "language": "English",
      "link": "https://www.youtube.com/embed/3bZrRkGRZlk"
    },
    {
      "name": "Jannes Roth",
      "year": "2018",
      "location": "Tennessee",
      "age": "Adult Service",
      "gender": "Male",
      "disability": "Autism",
      "theme": "Educational training on rights and responsibilities; Increase Part D funding (Parent resource centers);",
      "language": "English",
      "link": "https://www.youtube.com/embed/gP3CWd_yfHw"
    },
    {
      "name": "Shontie Brown",
      "year": "2018",
      "location": "Tennessee",
      "age": "Early Childhood",
      "gender": "Female",
      "disability": "Down Syndrome",
      "theme": "More funding for inclusion with LRE;",
      "language": "English",
      "link": "https://www.youtube.com/embed/w0gbyegY6Q4"
    },
    {
      "name": "Aceriane Leal",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Male",
      "disability": "Attention Deficit Hyperactivity Disorder",
      "theme": "Gap in transition service between EI and Kinder; Training for school personnel and parents, Resources for parents",
      "language": "English",
      "link": "https://www.youtube.com/embed/PAHsC0lsxto"
    },
    {
      "name": "Amanda Bailey",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Early Childhood",
      "gender": "Male",
      "disability": "Autism",
      "theme": "Inclusion in LRE; Seamless transition from EI",
      "language": "English",
      "link": "https://www.youtube.com/embed/4Eu0MRSVCTs"
    },
    {
      "name": "Alex Lauric",
      "year": "2018",
      "location": "Massachusetts",
      "age": "School Age",
      "gender": "Male",
      "disability": "Intellectual Disability",
      "theme": "Accountability for services, especially inclusion, Parents being able to assess the classroom (due process)",
      "language": "English",
      "link": "https://www.youtube.com/embed/Lv_bnWzUAXQ"
    },
    {
      "name": "Angela Pomaro",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Not Disclosed",
      "gender": "Male",
      "disability": "Autism",
      "theme": "Schools providing enough time for parents to review relevant paperwork",
      "language": "English",
      "link": "https://www.youtube.com/embed/bxwx5daDyuU"
    },
    {
      "name": "Karen Claudio",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Early Childhood",
      "gender": "Female",
      "disability": "Autism",
      "theme": "Procedural safeguard and due process explained; Local agencies providing services for parents; accountability for districts,",
      "language": "English",
      "link": "https://www.youtube.com/embed/amIlmaQn9JQ"
    },
    {
      "name": "Mercedes Soto",
      "year": "2018",
      "location": "Massachusetts",
      "age": "School Age",
      "gender": "Male",
      "disability": "Dyslexia",
      "theme": "Early screening and intervention",
      "language": "English",
      "link": "https://www.youtube.com/embed/mc-TPpFbNyQ"
    },
    {
      "name": "Salima Slimane",
      "year": "2018",
      "location": "Massachusetts",
      "age": "School Age",
      "gender": "Male",
      "disability": "HFAutism, Attention Deficit Hyperactivity Disorder, anxiety",
      "theme": "Full inclusion with proper support, educational placement based on disability, generalization of skills",
      "language": "English",
      "link": "https://www.youtube.com/embed/WYenQjZHBEU"
    },
    {
      "name": "Stacy Scofield",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Not Disclosed",
      "gender": "Not Disclosed",
      "disability": "Not Disclosed",
      "theme": "Increased funding",
      "language": "English",
      "link": "https://www.youtube.com/embed/RjFT2wTYAEQ"
    },
    {
      "name": "Terri Taylor",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Male",
      "disability": "Down Syndrome",
      "theme": "Language in IDEA for inclusion, Funding and guidance for school districts",
      "language": "English",
      "link": "https://www.youtube.com/embed/gV4fu0IolKE"
    },
    {
      "name": "Leatrice Gates",
      "year": "2018",
      "location": "Illinois",
      "age": "Transition",
      "gender": "Male",
      "disability": "Multiple",
      "theme": "Parent involvement language in IDEA, liaison support for parents, increase parent participation in IEP process, children who are nonverbal be provided with AAC device, extend age to 26",
      "language": "English",
      "link": "https://www.youtube.com/embed/KVbOF6gTG8o"
    },
    {
      "name": "Jazmin Perez",
      "year": "2018",
      "location": "Illinois",
      "age": "Not Disclosed",
      "gender": "Male",
      "disability": "Autism, Attention Deficit Hyperactivity Disorder",
      "theme": "Attention Deficit Hyperactivity Disorder be added as a disability area, better train teachers to work with students with Attention Deficit Hyperactivity Disorder",
      "language": "Spanish",
      "link": "https://www.youtube.com/embed/rP9I2L98-RA"
    },
    {
      "name": "Leticia Ramirez",
      "year": "2018",
      "location": "Illinois",
      "age": "Transition",
      "gender": "Female",
      "disability": "Autism",
      "theme": "Increase diversity of classes, help parents understand the law better, provide documentation so parents understand it and it isn't repetitive  ",
      "language": "Spanish",
      "link": "https://www.youtube.com/embed/OM5nwdT77p4"
    },
    {
      "name": "Basilia Peralta",
      "year": "2018",
      "location": "Illinois",
      "age": "Not Disclosed",
      "gender": "Male",
      "disability": "Down Syndrome",
      "theme": "IEPs provided in home language, training for parents, more communication with parents, training for teachers",
      "language": "Spanish",
      "link": "https://www.youtube.com/embed/Op7pB7oWQTo"
    },
    {
      "name": "Teresa Spruiell",
      "year": "2018",
      "location": "Illinois",
      "age": "Transition",
      "gender": "Male",
      "disability": "Intellectual Disability",
      "theme": "Increase age to 26",
      "language": "English",
      "link": "https://www.youtube.com/embed/zl8xioreW6s"
    },
    {
      "name": "Ileen Lasko",
      "year": "2018",
      "location": "Illinois",
      "age": "School Age",
      "gender": "Female",
      "disability": "Learning Disability",
      "theme": "Funding (at least 40%)",
      "language": "English",
      "link": "https://www.youtube.com/embed/fkGtX7aKIh0"
    },
    {
      "name": "Lilian Chen-Byerly",
      "year": "2018",
      "location": "Illinois",
      "age": "Adult Service",
      "gender": "Male",
      "disability": "Asperger's",
      "theme": "Include educational partnerships between parents/teachers, communication, teacher training",
      "language": "English",
      "link": "https://www.youtube.com/embed/QtbOPGXR9_g"
    },
    {
      "name": "Sharon Cerda",
      "year": "2018",
      "location": "Illinois",
      "age": "Transition",
      "gender": "Not Disclosed",
      "disability": "Deaf, Autism, Brown's Syndrome",
      "theme": "Gap in parent/teacher relationships, communication, teacher training, understanding parental rights",
      "language": "English",
      "link": "https://www.youtube.com/embed/tz4kGfB5wGY"
    },
    {
      "name": "Silvia Rodriguez",
      "year": "2018",
      "location": "Illinois",
      "age": "School Age",
      "gender": "Male",
      "disability": "Autism",
      "theme": "Increase age to 26",
      "language": "English",
      "link": "https://www.youtube.com/embed/ro9iudKeQ1s"
    },
    {
      "name": "Sonya Northern",
      "year": "2018",
      "location": "Illinois",
      "age": "Transition",
      "gender": "Male",
      "disability": "Autism",
      "theme": "Increase age to 26",
      "language": "English",
      "link": "https://www.youtube.com/embed/bhmhpNjgjxU"
    },
    {
      "name": "Alma Ortega",
      "year": "2018",
      "location": "Illinois",
      "age": "Early Childhood",
      "gender": "Male",
      "disability": "Attention Deficit Hyperactivity Disorder",
      "theme": "Teacher training in Attention Deficit Hyperactivity Disorder",
      "language": "English",
      "link": "https://www.youtube.com/embed/67vaRbp1og4"
    },
    {
      "name": "Raquel Quezada",
      "year": "2018",
      "location": "Massachusetts",
      "age": "School Age",
      "gender": "Male",
      "disability": "Cerebral Palsy",
      "theme": "Information in Spanish",
      "language": "Not Disclosed",
      "link": "https://www.youtube.com/embed/nm-kc0Gldgs"
    },
    {
      "name": "Navarda Rindgater",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Not Disclosed",
      "gender": "Male",
      "disability": "Down Syndrome",
      "theme": "More transparency with legal information, special education in the community, addressing demographical and cultural diversity",
      "language": "English",
      "link": "https://www.youtube.com/embed/F3ty68fF8zk"
    },
    {
      "name": "Erin Gannon",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Early Childhood",
      "gender": "Male",
      "disability": "Autism",
      "theme": "Fully fund IDEA",
      "language": "English",
      "link": "https://www.youtube.com/embed/qC7yrLm5qz8"
    },
    {
      "name": "Melissa Kielbania",
      "year": "2018",
      "location": "Massachusetts",
      "age": "School Age",
      "gender": "Male",
      "disability": "Apraxia",
      "theme": "Facilitated IEP as a procedural safeguard",
      "language": "English",
      "link": "https://www.youtube.com/embed/4EN4j4IA9wg"
    },
    {
      "name": "Carol Tessling",
      "year": "2018",
      "location": "Massachusetts",
      "age": "School Age",
      "gender": "Female",
      "disability": "Autism",
      "theme": "Special education laws are rarely followed",
      "language": "English",
      "link": "https://www.youtube.com/embed/5vALkl5y7Qc"
    },
    {
      "name": "Arelis Gomes",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Female",
      "disability": "Dyslexia",
      "theme": "Understanding the law, providing information in other languages",
      "language": "English",
      "link": "https://www.youtube.com/embed/ChwCQIlT99o"
    },
    {
      "name": "Arelis Gomes",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Male",
      "disability": "Autism",
      "theme": "Not Disclosed",
      "language": "English",
      "link": "https://www.youtube.com/embed/ChwCQIlT99o"
    },
    {
      "name": "Arelis Gomes",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Early Childhood",
      "gender": "Male",
      "disability": "Autism",
      "theme": "Not Disclosed",
      "language": "English",
      "link": "https://www.youtube.com/embed/ChwCQIlT99o"
    },
    {
      "name": "Shonnon Gallagher",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Early Childhood",
      "gender": "Female",
      "disability": "Down Syndrome",
      "theme": "Clear, strong language about inclusion, LRE, needs of individuals with disabilities; strengthen laws",
      "language": "English",
      "link": "https://www.youtube.com/embed/Hqpcuag3PFU"
    },
    {
      "name": "Bllu Catalano",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Not Disclosed",
      "gender": "Female",
      "disability": "Not Disclosed",
      "theme": "Low income families have access to supports and services",
      "language": "English",
      "link": "https://www.youtube.com/embed/C755AWEZfX0"
    },
    {
      "name": "Cara Coller",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Male",
      "disability": "Autism, Attention Deficit Hyperactivity Disorder, Anxiety, Asthma, Severe Allergies",
      "theme": "Define LRE per child",
      "language": "English",
      "link": "https://www.youtube.com/embed/RyKCmJ8C_LU"
    },
    {
      "name": "Cara Coller",
      "year": "2018",
      "location": "Massachusetts",
      "age": "School Age",
      "gender": "Female",
      "disability": "Congenital Heart Disease, Seizure Disorder, Legal Blindness, Traumatic Brain Injury",
      "theme": "Not Disclosed",
      "language": "English",
      "link": "https://www.youtube.com/embed/RyKCmJ8C_LU"
    },
    {
      "name": "Cara Coller",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Early Childhood",
      "gender": "Male",
      "disability": "Cardiac Disease, Learning Disability",
      "theme": "Not Disclosed",
      "language": "English",
      "link": "https://www.youtube.com/embed/RyKCmJ8C_LU"
    },
    {
      "name": "Linda Cox",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Male",
      "disability": "Allergies, Obsessive Compulsive Disorder, Autism",
      "theme": "Transition planning, assistive technology, Attention Deficit Disorder \"peer reviewed \" to research-based practices",
      "language": "English",
      "link": "https://www.youtube.com/embed/d1uT_frJLOA"
    },
    {
      "name": "Laurie McCarron",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Not Disclosed",
      "gender": "Female",
      "disability": "Not Disclosed",
      "theme": "Accommodations not being implemented, sibling, parent advisory councils",
      "language": "English",
      "link": "https://www.youtube.com/embed/t4H77Pb0MFg"
    },
    {
      "name": "Jaya Pandey",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Male",
      "disability": "Autism",
      "theme": "Manual for parents to understand the system, possibilities, services, information for new families",
      "language": "English",
      "link": "https://www.youtube.com/embed/dXu5r5Rhmpk"
    },
    {
      "name": "Ellen Shapiro Smith",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Male",
      "disability": "Atypical HFAutism",
      "theme": "Emotional and social wellbeing in conjunction with academics",
      "language": "English",
      "link": "https://www.youtube.com/embed/Jviw_VgeRVI"
    },
    {
      "name": "Yongting Wang",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Male",
      "disability": "HFAutism",
      "theme": "Provide access to information about special education",
      "language": "English",
      "link": "https://www.youtube.com/embed/vL6WUGBeXQk" 
    },
    {
      "name": "Stephanie Cahill",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Early Childhood",
      "gender": "Male",
      "disability": "Congenital Heart Disease, Hypotonia, Nonverbal Autism",
      "theme": "Collaboration between schools and parents, resources for parents related to self care and information centers",
      "language": "English",
      "link": "https://www.youtube.com/embed/LC-UuouvlMU"
    },
    {
      "name": "Claudia Espinoza",
      "year": "2018",
      "location": "Tennessee",
      "age": "School Age",
      "gender": "Male",
      "disability": "Attention Deficit Hyperactivity Disorder, Autism",
      "theme": "Including students with disabilities in activities, providing better communication between parents and teachers to allow for more participation ",
      "language": "Spanish",
      "link": "https://www.youtube.com/embed/YH3FbG4GDYA"
    },
    {
      "name": "Mayra Navaro",
      "year": "2018",
      "location": "Tennessee",
      "age": "Not Disclosed",
      "gender": "Female",
      "disability": "Autism",
      "theme": "Provide more services and therapies, provide supports for Latino families",
      "language": "Spanish",
      "link": "https://www.youtube.com/embed/3SjP7j0u5do"
    },
    {
      "name": "Ma Najero",
      "year": "2018",
      "location": "Tennessee",
      "age": "Early Childhood",
      "gender": "Female",
      "disability": "Autism",
      "theme": "Provide more education for teachers in autism",
      "language": "Spanish",
      "link": "https://www.youtube.com/embed/yOyS6-dSJGc"
    },
    {
      "name": "Patricia Rodriguez",
      "year": "2018",
      "location": "Tennessee",
      "age": "Early Childhood",
      "gender": "Male",
      "disability": "Autism",
      "theme": "Provide more therapies to support speech and behavior, provide more information in Spanish",
      "language": "Spanish",
      "link": "https://www.youtube.com/embed/AAmt0ZArOdk"
    },
    {
      "name": "Gladis Arevalo",
      "year": "2018",
      "location": "Tennessee",
      "age": "School Age",
      "gender": "Female",
      "disability": "Autism",
      "theme": "Lack of education about classmates with disabilities",
      "language": "Spanish",
      "link": "https://www.youtube.com/embed/J9h9FtUVb24"
    },
    {
      "name": "Jeannie Terrell",
      "year": "2018",
      "location": "Illinois",
      "age": "Adult Service",
      "gender": "Female",
      "disability": "MS",
      "theme": "Government is very concerned about the education of all children",
      "language": "English",
      "link": "https://www.youtube.com/embed/wJh45SphCTU"
    },
    {
      "name": "Talanda McMullen",
      "year": "2018",
      "location": "Illinois",
      "age": "School Age",
      "gender": "Male",
      "disability": "Autism",
      "theme": "Need more diversity and equity in education, ensure that funding is provided by the government",
      "language": "English",
      "link": "https://www.youtube.com/embed/Rkzg0whJzsw"
    },
    {
      "name": "Sandra Hite",
      "year": "2018",
      "location": "Illinois",
      "age": "Transition",
      "gender": "Male",
      "disability": "Autism",
      "theme": "Provide more funding for athletic services for individuals with disabilities",
      "language": "English",
      "link": "https://www.youtube.com/embed/RkhzS9ezC-w"
    },
    {
      "name": "Sarah Colella",
      "year": "2018",
      "location": "Illinois",
      "age": "Not Disclosed",
      "gender": "Female",
      "disability": "Learning Disability",
      "theme": "Ensure that all children with disabilities are provided FAPE, including those who are gifted and Learning Disability",
      "language": "English",
      "link": "https://www.youtube.com/embed/Z0KYhOR60nw"
    },
    {
      "name": "Shera Schwartz",
      "year": "2018",
      "location": "Illinois",
      "age": "Transition",
      "gender": "Male",
      "disability": "Learning Disability",
      "theme": "Stronger language in IDEA, shorten 60 day evaluation period, change \"consider\" to \"using\" independent evaluations to inform decisions",
      "language": "English",
      "link": "https://www.youtube.com/embed/xL9nQmTny6I"
    },
    {
      "name": "Charlotte McAneney",
      "year": "2018",
      "location": "Illinois",
      "age": "Transition",
      "gender": "Male",
      "disability": "Depression, Autism, Attention Deficit Hyperactivity Disorder",
      "theme": "Fully fund IDEA, hire fully qualified people, serve students beyond academics",
      "language": "English",
      "link": "https://www.youtube.com/embed/HQhKGC7d9N0"
    },
    {
      "name": "Vanessa Robinson",
      "year": "2018",
      "location": "Illinois",
      "age": "Transition",
      "gender": "Male",
      "disability": "Attention Deficit Hyperactivity Disorder",
      "theme": "Budget cuts in special education, learning centers for Learning Disability and young adults, more funding and more activities for special education, IEP meetings run by federal government and state board",
      "language": "English",
      "link": "https://www.youtube.com/embed/Nl-8Ty0MVFw"
    },
    {
      "name": "Tinch Marshall",
      "year": "2018",
      "location": "Illinois",
      "age": "Not Disclosed",
      "gender": "Male",
      "disability": "Auditory Processing Disorder",
      "theme": "Providing services that are in the IEP, communication between the school and family, accountability",
      "language": "English",
      "link": "https://www.youtube.com/embed/SCDNnZGf8DM"
    },
    {
      "name": "Whitney Scott",
      "year": "2018",
      "location": "Illinois",
      "age": "Not Disclosed",
      "gender": "Female",
      "disability": "Language Disorder, Attention Deficit Hyperactivity Disorder, Autism, Learning Disability",
      "theme": "Earlier and efficient testing",
      "language": "English",
      "link": "https://www.youtube.com/embed/jgykyYM4bFg"
    },
    {
      "name": "Kesha Grey",
      "year": "2018",
      "location": "Illinois",
      "age": "Early Childhood",
      "gender": "Male",
      "disability": "Down Syndrome",
      "theme": "More funding, appropriate supports and resources, sensitivity training for staff and students",
      "language": "English",
      "link": "https://www.youtube.com/embed/U9nHoiaNXaI"
    },
    {
      "name": "Margarita Flores",
      "year": "2018",
      "location": "Illinois",
      "age": "Transition",
      "gender": "Male",
      "disability": "Auditory Processing Disorder, Autism, Attention Deficit Disorder",
      "theme": "Provide more opportunities for diverse programming",
      "language": "English",
      "link": "https://www.youtube.com/embed/T0_outCZ-X0"
    },
    {
      "name": "Margarita Flores",
      "year": "2018",
      "location": "Illinois",
      "age": "Early Childhood",
      "gender": "Male",
      "disability": "Asperger's",
      "theme": "Provide funding for specialists closer to the district",
      "language": "English",
      "link": "https://www.youtube.com/embed/T0_outCZ-X0"
    },
    {
      "name": "Elaine",
      "year": "2018",
      "location": "Tennessee",
      "age": "Adult Service",
      "gender": "Male",
      "disability": "Traumatic Brain Injury",
      "theme": "Transitional, college, vocational services",
      "language": "English",
      "link": "https://www.youtube.com/embed/rxppLsg2sqE"
    },
    {
      "name": "Alana",
      "year": "2018",
      "location": "Tennessee",
      "age": "Early Childhood",
      "gender": "Male",
      "disability": "Char Syndrome",
      "theme": "Weekly ABA therapy",
      "language": "English",
      "link": "https://www.youtube.com/embed/-k5S4opnIac"
    },
    {
      "name": "Pamela",
      "year": "2018",
      "location": "Tennessee",
      "age": "Not Disclosed",
      "gender": "Male",
      "disability": "Developmental Delay",
      "theme": "More time for teachers to spend with students",
      "language": "English",
      "link": "https://www.youtube.com/embed/aB6iNdnuPgg"
    },
    {
      "name": "Angela Watson",
      "year": "2018",
      "location": "Tennessee",
      "age": "School Age",
      "gender": "Male",
      "disability": "Autism",
      "theme": "Increase funding for adequate staffing for a variety of programs",
      "language": "English",
      "link": "https://www.youtube.com/embed/3mWQNyoUrco"
    },
    {
      "name": "Bernadette Grey",
      "year": "2018",
      "location": "Tennessee",
      "age": "School Age",
      "gender": "Female",
      "disability": "Autism",
      "theme": "Increase age to 26",
      "language": "English",
      "link": "https://www.youtube.com/embed/tfoz9G0MYr0"
    },
    {
      "name": "Coletta Davis",
      "year": "2018",
      "location": "Tennessee",
      "age": "Early Childhood",
      "gender": "Male",
      "disability": "Developmental Delay",
      "theme": "Providing transition services starting in 5th grade",
      "language": "English",
      "link": "https://www.youtube.com/embed/7hPZGOloRjI"
    },
    {
      "name": "Stephanie Peterson",
      "year": "2018",
      "location": "Tennessee",
      "age": "Not Disclosed",
      "gender": "Male",
      "disability": "Autism",
      "theme": "Provide language, funding, practices for twice exceptional students",
      "language": "English",
      "link": "https://www.youtube.com/embed/NQRfTs8ScKI"
    },
    {
      "name": "Cassandra Grey",
      "year": "2018",
      "location": "Tennessee",
      "age": "Not Disclosed",
      "gender": "Male",
      "disability": "Intellectual Disability",
      "theme": "Provide functional life skills classes in every school",
      "language": "English",
      "link": "https://www.youtube.com/embed/9tOu1hM93hM"
    },
    {
      "name": "Sandi Raeuchle",
      "year": "2018",
      "location": "New Hampshire",
      "age": "Not Disclosed",
      "gender": "Male",
      "disability": "Cognitive Impairment, Learning Disability",
      "theme": "Fully funding IDEA",
      "language": "English",
      "link": "https://www.youtube.com/embed/xsSp79JnfqQ"
    }
];
addItem();
var userList = new List('users', options);

