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
      "location": "Memphis",
      "age": "Not Disclosed",
      "gender": "Boy",
      "link": "https://www.youtube.com/embed/fP4jhDf4svo",
      "disability": "ASD, ADHD",
      "theme": "school providing enough information, 1:1 therapy not just group, Classroom aides participating in IEPs",
      "language": "Spanish"
    },
    {
      "name": "Nancy Aguila",
      "year": "2018",
      "location": "Memphis",
      "age": "Not Disclosed",
      "gender": "Boy",
      "link": "https://www.youtube.com/embed/lxjLjLcE2do",
      "disability": "ASD",
      "theme": "Surveilance cameras in classrooms as a back-up for liability issues, inclusion with neurotypical children, increased funding in IDEA",
      "language": "Spanish"
    },
    {
      "name": "Johnnie Hatten",
      "year": "2018",
      "location": "Memphis",
      "age": "Not Disclosed",
      "gender": "Not Disclosed",
      "disability": "Not Disclosed",
      "theme": "Training and educating parents on disabilities laws",
      "language": "English"
    },
    {
      "name": "Barbara Duddy",
      "year": "2018",
      "location": "Memphis",
      "age": "Not Disclosed",
      "gender": "Not Disclosed",
      "disability": "Not Disclosed",
      "theme": "District and state funding increase; Make procedural safeguard easier; Funding for parent training; School admin attending IEP; better translators for IEP meetings; BCBAs conducting FBA; Short-term objective into IEP;",
      "language": "English"
    },
    {
      "name": "Cynthia Hunt",
      "year": "2018",
      "location": "Memphis",
      "age": "Adult Service",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Funding for programs for adult services; Parent training for law, rights and advocacy; After school program;",
      "language": "English"
    },
    {
      "name": "Jannes Roth",
      "year": "2018",
      "location": "Memphis",
      "age": "Adult Service",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Educational training on rights and responsibilities; Increase Part D funding (Parent resource centers);",
      "language": "English"
    },
    {
      "name": "Shontie Brown",
      "year": "2018",
      "location": "Memphis",
      "age": "Early Childhood",
      "gender": "Girl",
      "disability": "Down Syndrome",
      "theme": "More funding for inclusion with LRE;",
      "language": "English"
    },
    {
      "name": "Aceriane Leal",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Boy",
      "disability": "ADHD",
      "theme": "Gap in transition service between EI and Kinder; Training for school personnel and parents, Resources for parents",
      "language": "English"
    },
    {
      "name": "Amanda Bailey",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Early Childhood",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Inclusion in LRE; Seamless transition from EI",
      "language": "English"
    },
    {
      "name": "Alex Lauric",
      "year": "2018",
      "location": "Massachusetts",
      "age": "School Age",
      "gender": "Boy",
      "disability": "ID",
      "theme": "Accountability for services, especially inclusion, Parents being able to assess the classroom (due process)",
      "language": "English"
    },
    {
      "name": "Angela Pomaro",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Not Disclosed",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Schools providing enough time for parents to review relevant paperwork",
      "language": "English"
    },
    {
      "name": "Karen Claudio",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Early Childhood",
      "gender": "Girl",
      "disability": "ASD",
      "theme": "Procedural safeguard and due process explained; Local agencies providing services for parents; accountability for districts,",
      "language": "English"
    },
    {
      "name": "Mercedes Soto",
      "year": "2018",
      "location": "Massachusetts",
      "age": "School Age",
      "gender": "Boy",
      "disability": "Dyslexia",
      "theme": "Early screening and intervention",
      "language": "English"
    },
    {
      "name": "Michael Bernstein",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Early Childhood",
      "gender": "Boy",
      "disability": "Not Disclosed",
      "theme": "Providing aide; 100% federal funding IDEA",
      "language": "English"
    },
    {
      "name": "Salima Slimane",
      "year": "2018",
      "location": "Massachusetts",
      "age": "School Age",
      "gender": "Boy",
      "disability": "HFASD, ADHD, Social Anxiety",
      "theme": "Full inclusion with proper support, educational placement based on disability, generalization of skills",
      "language": "English"
    },
    {
      "name": "Stacy Scofield",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Not Disclosed",
      "gender": "Not Disclosed",
      "disability": "Not Disclosed",
      "theme": "Increased funding",
      "language": "English"
    },
    {
      "name": "Terri Taylor",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Boy",
      "disability": "Down Syndrome",
      "theme": "Language in IDEA for inclusion, Funding and guidance for school districts",
      "language": "English"
    },
    {
      "name": "Leatrice Gates",
      "year": "2018",
      "location": "Chicago",
      "age": "Transition",
      "gender": "Boy",
      "disability": "Multiple",
      "theme": "Parent involvement language in IDEA, liaison support for parents, increase parent participation in IEP process, children who are nonverbal be provided with AAC device, extend age to 26",
      "language": "English"
    },
    {
      "name": "Jazmin Perez",
      "year": "2018",
      "location": "Chicago",
      "age": "Not Disclosed",
      "gender": "Boy",
      "disability": "ASD, ADHD",
      "theme": "ADHD be added as a disability area, better train teachers to work with students with ADHD",
      "language": "Spanish"
    },
    {
      "name": "Leticia Ramirez",
      "year": "2018",
      "location": "Chicago",
      "age": "Transition",
      "gender": "Girl",
      "disability": "ASD",
      "theme": "Increase diversity of classes, help parents understand the law better, provide documentation so parents understand it and it isn't repetitive  ",
      "language": "Spanish"
    },
    {
      "name": "Basilia Peralta",
      "year": "2018",
      "location": "Chicago",
      "age": "Not Disclosed",
      "gender": "Boy",
      "disability": "Down Syndrome",
      "theme": "IEPs provided in home language, training for parents, more communication with parents, training for teachers",
      "language": "Spanish"
    },
    {
      "name": "Teresa Spruiell",
      "year": "2018",
      "location": "Chicago",
      "age": "Transition",
      "gender": "Boy",
      "disability": "ID",
      "theme": "Increase age to 26",
      "language": "English"
    },
    {
      "name": "Ileen Lasko",
      "year": "2018",
      "location": "Chicago",
      "age": "School Age",
      "gender": "Girl",
      "disability": "Learning Disability",
      "theme": "Funding (at least 40%)",
      "language": "English"
    },
    {
      "name": "Lilian Chen-Byerly",
      "year": "2018",
      "location": "Chicago",
      "age": "Adult Service",
      "gender": "Boy",
      "disability": "Asperger's",
      "theme": "Include educational partnerships between parents/teachers, communication, teacher training",
      "language": "English"
    },
    {
      "name": "Sharon Cerda",
      "year": "2018",
      "location": "Chicago",
      "age": "Transition",
      "gender": "Not Disclosed",
      "disability": "Deaf, ASD, Brown's Syndrome",
      "theme": "Gap in parent/teacher relationships, communication, teacher training, understanding parental rights",
      "language": "English"
    },
    {
      "name": "Silvia Rodriguez",
      "year": "2018",
      "location": "Chicago",
      "age": "School Age",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Increase age to 26",
      "language": "English"
    },
    {
      "name": "Sonya Northern",
      "year": "2018",
      "location": "Chicago",
      "age": "Transition",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Increase age to 26",
      "language": "English"
    },
    {
      "name": "Alma Ortega",
      "year": "2018",
      "location": "Chicago",
      "age": "Early Childhood",
      "gender": "Boy",
      "disability": "ADHD",
      "theme": "Teacher training in ADHD",
      "language": "English"
    },
    {
      "name": "Raquel Quezada",
      "year": "2018",
      "location": "Massachusetts",
      "age": "School Age",
      "gender": "Boy",
      "disability": "Cerebral Palsy",
      "theme": "Information in Spanish",
      "language": "Not Disclosed"
    },
    {
      "name": "Navarda Rindgater",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Not Disclosed",
      "gender": "Boy",
      "disability": "Down Syndrome",
      "theme": "More transparency with legal information, special education in the community, addressing demographical and cultural diversity",
      "language": "English"
    },
    {
      "name": "Erin Gannon",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Early Childhood",
      "gender": "Boy",
      "disability": "Autism",
      "theme": "Fully fund IDEA",
      "language": "English"
    },
    {
      "name": "Melissa Kielbania",
      "year": "2018",
      "location": "Massachusetts",
      "age": "School Age",
      "gender": "Boy",
      "disability": "Apraxia",
      "theme": "Facilitated IEP as a procedural safeguard",
      "language": "English"
    },
    {
      "name": "Carol Tessling",
      "year": "2018",
      "location": "Massachusetts",
      "age": "School Age",
      "gender": "Girl",
      "disability": "Autism",
      "theme": "Special education laws are rarely followed",
      "language": "English"
    },
    {
      "name": "Arelis Gomes",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Girl",
      "disability": "Dyslexia",
      "theme": "Understanding the law, providing information in other languages",
      "language": "English"
    },
    {
      "name": "Arelis Gomes",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Boy",
      "disability": "Autism",
      "theme": "Not Disclosed",
      "language": "English"
    },
    {
      "name": "Arelis Gomes",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Early Childhood",
      "gender": "Boy",
      "disability": "Autism",
      "theme": "Not Disclosed",
      "language": "English"
    },
    {
      "name": "Shonnon Gallagher",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Early Childhood",
      "gender": "Girl",
      "disability": "Down Syndrome",
      "theme": "Clear, strong language about inclusion, LRE, needs of individuals with disabilities; strengthen laws",
      "language": "English"
    },
    {
      "name": "Bllu Catalano",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Not Disclosed",
      "gender": "Girl",
      "disability": "Not Disclosed",
      "theme": "Low income families have access to supports and services",
      "language": "English"
    },
    {
      "name": "Cara Coller",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Boy",
      "disability": "ASD, ADHD, Anxiety, Asthma, Severe Allergies",
      "theme": "Define LRE per child",
      "language": "English"
    },
    {
      "name": "Cara Coller",
      "year": "2018",
      "location": "Massachusetts",
      "age": "School Age",
      "gender": "Girl",
      "disability": "Congenital Heart Disease, Seizure Disorder, Legal Blindness, TBI",
      "theme": "Not Disclosed",
      "language": "English"
    },
    {
      "name": "Cara Coller",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Early Childhood",
      "gender": "Boy",
      "disability": "Cardiac Disease, SLD",
      "theme": "Not Disclosed",
      "language": "English"
    },
    {
      "name": "Linda Cox",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Boy",
      "disability": "Allergies, OCD, ASD",
      "theme": "Transition planning, assistive technology, add \"peer reviewed \" to research-based practices",
      "language": "English"
    },
    {
      "name": "Laurie McCarron",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Not Disclosed",
      "gender": "Girl",
      "disability": "Not Disclosed",
      "theme": "Accommodations not being implemented, sibling, parent advisory councils",
      "language": "English"
    },
    {
      "name": "Jaya Pandey",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Manual for parents to understand the system, possibilities, services, information for new families",
      "language": "English"
    },
    {
      "name": "Ellen Shapiro Smith",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Boy",
      "disability": "Atypical HFASD",
      "theme": "Emotional and social wellbeing in conjunction with academics",
      "language": "English"
    },
    {
      "name": "Maria Hernandez",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Not Disclosed",
      "gender": "Not Disclosed",
      "disability": "Down Syndrome",
      "theme": "Bullying, provide resources, language barriers",
      "language": "English"
    },
    {
      "name": "Yongting Wang",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Boy",
      "disability": "HFASD",
      "theme": "Provide access to information about special education",
      "language": "English"
    },
    {
      "name": "Stephanie Cahill",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Early Childhood",
      "gender": "Boy",
      "disability": "Congenital Heart Disease, Hypotonia, Nonverbal ASD",
      "theme": "Collaboration between schools and parents, resources for parents related to self care and information centers",
      "language": "English"
    },
    {
      "name": "Claudia Espinoza",
      "year": "2018",
      "location": "Memphis",
      "age": "School Age",
      "gender": "Boy",
      "disability": "ADHD, ASD",
      "theme": "Including students with disabilities in activities, providing better communication between parents and teachers to allow for more participation ",
      "language": "Spanish"
    },
    {
      "name": "Mayra Navaro",
      "year": "2018",
      "location": "Memphis",
      "age": "Not Disclosed",
      "gender": "Girl",
      "disability": "ASD",
      "theme": "Provide more services and therapies, provide supports for Latino families",
      "language": "Spanish"
    },
    {
      "name": "Ma Najero",
      "year": "2018",
      "location": "Memphis",
      "age": "Early Childhood",
      "gender": "Girl",
      "disability": "ASD",
      "theme": "Provide more education for teachers in autism",
      "language": "Spanish"
    },
    {
      "name": "Patricia Rodriguez",
      "year": "2018",
      "location": "Memphis",
      "age": "Early Childhood",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Provide more therapies to support speech and behavior, provide more information in Spanish",
      "language": "Spanish"
    },
    {
      "name": "Gladis Arevalo",
      "year": "2018",
      "location": "Memphis",
      "age": "School Age",
      "gender": "Girl",
      "disability": "ASD",
      "theme": "Lack of education about classmates with disabilities",
      "language": "Spanish"
    },
    {
      "name": "Jeannie Terrell",
      "year": "2018",
      "location": "Chicago",
      "age": "Adult Service",
      "gender": "Girl",
      "disability": "MS",
      "theme": "Government is very concerned about the education of all children",
      "language": "English"
    },
    {
      "name": "Talanda McMullen",
      "year": "2018",
      "location": "Chicago",
      "age": "School Age",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Need more diversity and equity in education, ensure that funding is provided by the government",
      "language": "English"
    },
    {
      "name": "Sandra Hite",
      "year": "2018",
      "location": "Chicago",
      "age": "Transition",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Provide more funding for athletic services for individuals with disabilities",
      "language": "English"
    },
    {
      "name": "Sarah Colella",
      "year": "2018",
      "location": "Chicago",
      "age": "Not Disclosed",
      "gender": "Girl",
      "disability": "SLD",
      "theme": "Ensure that all children with disabilities are provided FAPE, including those who are gifted and SLD",
      "language": "English"
    },
    {
      "name": "Sarah Colella",
      "year": "2018",
      "location": "Chicago",
      "age": "Not Disclosed",
      "gender": "Boy",
      "disability": "SLD",
      "theme": "Not Disclosed",
      "language": "English"
    },
    {
      "name": "Shera Schwartz",
      "year": "2018",
      "location": "Chicago",
      "age": "Transition",
      "gender": "Boy",
      "disability": "SLD",
      "theme": "Stronger language in IDEA, shorten 60 day evaluation period, change \"consider\" to \"using\" independent evaluations to inform decisions",
      "language": "English"
    },
    {
      "name": "Charlotte McAneney",
      "year": "2018",
      "location": "Chicago",
      "age": "Transition",
      "gender": "Boy",
      "disability": "Depression, ASD, ADHD",
      "theme": "Fully fund IDEA, hire fully qualified people, serve students beyond academics",
      "language": "English"
    },
    {
      "name": "Vanessa Robinson",
      "year": "2018",
      "location": "Chicago",
      "age": "Transition",
      "gender": "Boy",
      "disability": "ADHD",
      "theme": "Budget cuts in special education, learning centers for SLD and young adults, more funding and more activities for special education, IEP meetings run by federal government and state board",
      "language": "English"
    },
    {
      "name": "Tinch Marshall",
      "year": "2018",
      "location": "Chicago",
      "age": "Not Disclosed",
      "gender": "Boy",
      "disability": "Auditory Processing Disorder",
      "theme": "Providing services that are in the IEP, communication between the school and family, accountability",
      "language": "English"
    },
    {
      "name": "Whitney Scott",
      "year": "2018",
      "location": "Chicago",
      "age": "Not Disclosed",
      "gender": "Girl",
      "disability": "Language Disorder, ADHD, ASD, SLD",
      "theme": "Earlier and efficient testing",
      "language": "English"
    },
    {
      "name": "Kesha Grey",
      "year": "2018",
      "location": "Chicago",
      "age": "Early Childhood",
      "gender": "Boy",
      "disability": "Down Syndrome",
      "theme": "More funding, appropriate supports and resources, sensitivity training for staff and students",
      "language": "English"
    },
    {
      "name": "Mary Ottinot",
      "year": "2018",
      "location": "Chicago",
      "age": "Early Childhood",
      "gender": "Girl",
      "disability": "Cerebral Palsy, ASD, ADHD",
      "theme": "Transition from early childhood and early intervention, clearly state what is necessary for students after the age of 3, outline protocol for 3-5",
      "language": "English"
    },
    {
      "name": "Margarita Flores",
      "year": "2018",
      "location": "Chicago",
      "age": "Transition",
      "gender": "Boy",
      "disability": "Auditory Processing Disorder, ASD, ADD",
      "theme": "Provide more opportunities for diverse programming",
      "language": "English"
    },
    {
      "name": "Margarita Flores",
      "year": "2018",
      "location": "Chicago",
      "age": "Early Childhood",
      "gender": "Boy",
      "disability": "Asperger's",
      "theme": "Provide funding for specialists closer to the district",
      "language": "English"
    },
    {
      "name": "Elaine",
      "year": "2018",
      "location": "Memphis",
      "age": "Adult Service",
      "gender": "Boy",
      "disability": "TBI",
      "theme": "Transitional, college, vocational services",
      "language": "English"
    },
    {
      "name": "Alana",
      "year": "2018",
      "location": "Memphis",
      "age": "Early Childhood",
      "gender": "Boy",
      "disability": "Char Syndrome",
      "theme": "Weekly ABA therapy",
      "language": "English"
    },
    {
      "name": "Pamela",
      "year": "2018",
      "location": "Memphis",
      "age": "Not Disclosed",
      "gender": "Boy",
      "disability": "Developmental Delay",
      "theme": "More time for teachers to spend with students",
      "language": "English"
    },
    {
      "name": "Angela Watson",
      "year": "2018",
      "location": "Memphis",
      "age": "School Age",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Increase funding for adequate staffing for a variety of programs",
      "language": "English"
    },
    {
      "name": "Bernadette Grey",
      "year": "2018",
      "location": "Memphis",
      "age": "School Age",
      "gender": "Girl",
      "disability": "ASD",
      "theme": "Increase age to 26",
      "language": "English"
    },
    {
      "name": "Coletta Davis",
      "year": "2018",
      "location": "Memphis",
      "age": "Early Childhood",
      "gender": "Boy",
      "disability": "Developmental Delay",
      "theme": "Providing transition services starting in 5th grade",
      "language": "English"
    },
    {
      "name": "Stephanie Peterson",
      "year": "2018",
      "location": "Memphis",
      "age": "Not Disclosed",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Provide language, funding, practices for twice exceptional students",
      "language": "English"
    },
    {
      "name": "Cassandra Grey",
      "year": "2018",
      "location": "Memphis",
      "age": "Not Disclosed",
      "gender": "Boy",
      "disability": "ID",
      "theme": "Provide functional life skills classes in every school",
      "language": "English"
    },
    {
      "name": "Zoubida",
      "year": "2013",
      "location": "Chicago",
      "age": "School Age",
      "gender": "Girl",
      "disability": "Cognitive Impairment, ASD, ADHD",
      "theme": "Providing transition services at 11",
      "language": "English"
    },
    {
      "name": "Sonia",
      "year": "2013",
      "location": "Chicago",
      "age": "Early Childhood",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "ABA fully funded for all children",
      "language": "English"
    },
    {
      "name": "Savonna",
      "year": "2013",
      "location": "Chicago",
      "age": "Not Disclosed",
      "gender": "Boy",
      "disability": "Tourette's Syndrome, ADHD, OCD, Asthma",
      "theme": "IDEA mandate high achiving schools to provide support for students with 504 plans and IEPs, fully fund IDEA, provide transition services at 11 or 12, more training for general education",
      "language": "English"
    },
    {
      "name": "Sarah",
      "year": "2013",
      "location": "Chicago",
      "age": "Early Childhood",
      "gender": "Boy",
      "disability": "Behavior Disorder, Learning Delay",
      "theme": "Fully funding IDEA, cap number of students with IEP in a classroom",
      "language": "English"
    },
    {
      "name": "Rose",
      "year": "2013",
      "location": "Chicago",
      "age": "Transition",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Budget cuts, closing facilities, more vocational services as adults",
      "language": "English"
    },
    {
      "name": "Paula Willis",
      "year": "2013",
      "location": "Chicago",
      "age": "Not Disclosed",
      "gender": "Not Disclosed",
      "disability": "Not Disclosed",
      "theme": "Transition starting at 10, implement at age 13",
      "language": "English"
    },
    {
      "name": "Nadine",
      "year": "2013",
      "location": "Chicago",
      "age": "School Age",
      "gender": "Boy",
      "disability": "Auditory Processing Disorder, ADHD, SLD, Executive Function Disorder, Speech Disorder",
      "theme": "Training for paraprofessionals, duty of care to the student instead of the school/district",
      "language": "English"
    },
    {
      "name": "Pat",
      "year": "2013",
      "location": "Chicago",
      "age": "Adult Service",
      "gender": "Girl",
      "disability": "Down Syndrome",
      "theme": "Transition services for those exiting school services",
      "language": "English"
    },
    {
      "name": "Pat",
      "year": "2013",
      "location": "Chicago",
      "age": "Transition",
      "gender": "Girl",
      "disability": "Down Syndrome",
      "theme": "Not Disclosed",
      "language": "Not Disclosed"
    },
    {
      "name": "Mignon Fulton",
      "year": "2013",
      "location": "Chicago",
      "age": "School Age",
      "gender": "Girl",
      "disability": "Cognitive Impairment, Emotional Disorder",
      "theme": "Limit class size, proper ratio of students with and without disabilities (30/70), give parents a stronger voice in LRE",
      "language": "English"
    },
    {
      "name": "Lynn Betts",
      "year": "2013",
      "location": "Chicago",
      "age": "Transition",
      "gender": "Boy",
      "disability": "Seizure Disorder, ID, ASD",
      "theme": "Training for paraprofessionals, classroom teachers",
      "language": "English"
    },
    {
      "name": "Laurie",
      "year": "2013",
      "location": "Chicago",
      "age": "Early Childhood",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Budget cuts for special education schools, fully fund special education",
      "language": "English"
    },
    {
      "name": "Julie",
      "year": "2013",
      "location": "Chicago",
      "age": "Transition",
      "gender": "Boy",
      "disability": "ID",
      "theme": "Implement goals/strategies aimed towards independence",
      "language": "English"
    },
    {
      "name": "Joan",
      "year": "2013",
      "location": "Chicago",
      "age": "Transition",
      "gender": "Girl",
      "disability": "Dyslexia",
      "theme": "Dyslexia identified and defined in IDEA, provide early screening for Dyslexia",
      "language": "English"
    },
    {
      "name": "Joan",
      "year": "2013",
      "location": "Chicago",
      "age": "School Age",
      "gender": "Boy",
      "disability": "Dyslexia",
      "theme": "Not Disclosed",
      "language": "English"
    },
    {
      "name": "Jennifer",
      "year": "2013",
      "location": "Chicago",
      "age": "School Age",
      "gender": "Girl",
      "disability": "Dyslexia",
      "theme": "Include definition of Dyslexia, all children be screened, teachers provided with training in Dyslexia",
      "language": "English"
    },
    {
      "name": "Jennifer",
      "year": "2013",
      "location": "Chicago",
      "age": "School Age",
      "gender": "Boy",
      "disability": "Dyslexia",
      "theme": "Not Disclosed",
      "language": "English"
    },
    {
      "name": "Jeff Taylor",
      "year": "2013",
      "location": "Chicago",
      "age": "Transition",
      "gender": "Boy",
      "disability": "HFASD",
      "theme": "Training for general education teacher in inclusion, differentiating instruction, integrating children with disabilities",
      "language": "English"
    },
    {
      "name": "Aubrey",
      "year": "2013",
      "location": "Chicago",
      "age": "Adult Service",
      "gender": "Boy",
      "disability": "ID",
      "theme": "Adult agencies at transition meetings, transition specialists in schools",
      "language": "English"
    },
    {
      "name": "Angie",
      "year": "2013",
      "location": "Chicago",
      "age": "School Age",
      "gender": "Boy",
      "disability": "Speech Delay, SLD",
      "theme": "Advocate educated in special education to assist parents in due process",
      "language": "English"
    },
    {
      "name": "Theresa",
      "year": "2013",
      "location": "UIUC",
      "age": "Transition",
      "gender": "Boy",
      "disability": "Down Syndrome",
      "theme": "Begin transition planning before 14, trained transition specialists, research-based transition assessment tools",
      "language": "English"
    },
    {
      "name": "Patty",
      "year": "2013",
      "location": "UIUC",
      "age": "School Age",
      "gender": "Boy",
      "disability": "HFASD",
      "theme": "Transition services in middle and high school, transition specialists, assessments for transitions",
      "language": "English"
    },
    {
      "name": "Linda",
      "year": "2013",
      "location": "UIUC",
      "age": "Adult Service",
      "gender": "Boy",
      "disability": "ID",
      "theme": "BCBA in every school district, work with educators and parents, continuum of educational programming in school districts, transition specialists, extend adult services through 22 instead of 21",
      "language": "English"
    },
    {
      "name": "Sasha",
      "year": "2013",
      "location": "DuPage",
      "age": "Early Childhood",
      "gender": "Girl",
      "disability": "Down Syndrome",
      "theme": "Progress updates provided frequently",
      "language": "English"
    },
    {
      "name": "Proceda",
      "year": "2013",
      "location": "DuPage",
      "age": "Transition",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Supports in the transition process, transition specialist",
      "language": "English"
    },
    {
      "name": "Mike",
      "year": "2013",
      "location": "DuPage",
      "age": "Early Childhood",
      "gender": "Boy",
      "disability": "Cerebral Palsy",
      "theme": "Goals should extend passed educational goals",
      "language": "English"
    },
    {
      "name": "Martin",
      "year": "2013",
      "location": "DuPage",
      "age": "Early Childhood",
      "gender": "Boy",
      "disability": "Cyclical Vomitting Syndrome, ASD, ADHD",
      "theme": "Private psychological evaluation provided by the school district, 40 hours of training for teachers working with individuals with ASD",
      "language": "English"
    },
    {
      "name": "Lupe",
      "year": "2013",
      "location": "DuPage",
      "age": "Transition",
      "gender": "Girl",
      "disability": "ASD, ID",
      "theme": "Smoother transition for students into adulthood, benchmarks should be met a year prior to exiting program",
      "language": "English"
    },
    {
      "name": "Cynthia",
      "year": "2013",
      "location": "DuPage",
      "age": "Not Disclosed",
      "gender": "Not Disclosed",
      "disability": "Not Disclosed",
      "theme": "SEAs are not correctly defining or assessing for SLD, strong language in terms of how disabilities are defined and assessed, consistency across districts and states",
      "language": "English"
    },
    {
      "name": "Cara",
      "year": "2013",
      "location": "DuPage",
      "age": "Transition",
      "gender": "Girl",
      "disability": "Down Syndrome, ASD",
      "theme": "Student/Staff ratios included in IDEA",
      "language": "English"
    },
    {
      "name": "Anna",
      "year": "2013",
      "location": "DuPage",
      "age": "Early Childhood",
      "gender": "Boy",
      "disability": "Behavioral Difficulties",
      "theme": "IEP specialists, therapies, assistive technology can not be taken away based on observations alone; IDEA must require a comprehensive assessment",
      "language": "English"
    },
    {
      "name": "Andrea",
      "year": "2013",
      "location": "DuPage",
      "age": "Transition",
      "gender": "Boy",
      "disability": "Down Syndrome",
      "theme": "Provide parental information about IDEA",
      "language": "English"
    },
    {
      "name": "Rickie Lee",
      "year": "2013",
      "location": "ISU",
      "age": "Early Childhood",
      "gender": "Not Disclosed",
      "disability": "Not Disclosed",
      "theme": "Fully funding IDEA",
      "language": "English"
    },
    {
      "name": "Kim",
      "year": "2013",
      "location": "ISU",
      "age": "Not Disclosed",
      "gender": "Not Disclosed",
      "disability": "Not Disclosed",
      "theme": "Start transition services at an earlier age",
      "language": "English"
    },
    {
      "name": "Erica",
      "year": "2013",
      "location": "ISU",
      "age": "Early Childhood",
      "gender": "Girl",
      "disability": "ASD",
      "theme": "Include ABA as a related service",
      "language": "English"
    },
    {
      "name": "Paula Moran",
      "year": "2013",
      "location": "Not Disclosed",
      "age": "Early Childhood",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Train teachers and paraprofessionals, ABA therapy",
      "language": "English"
    },
    {
      "name": "Michelle Phillips",
      "year": "2013",
      "location": "Chicago",
      "age": "Not Disclosed",
      "gender": "Not Disclosed",
      "disability": "Not Disclosed",
      "theme": "Define what an interpreter looks like, strengthen laws about 45 day disciplinary removal, fully fund IDEA",
      "language": "English"
    },
    {
      "name": "Maria",
      "year": "2013",
      "location": "Not Disclosed",
      "age": "Transition",
      "gender": "Girl",
      "disability": "ID",
      "theme": "More training for teachers working with individuals with intellectual disability",
      "language": "Spanish"
    },
    {
      "name": "Lydia",
      "year": "2013",
      "location": "Chicago",
      "age": "School Age",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "More time for therapies, ABA",
      "language": "Spanish"
    },
    {
      "name": "Jose",
      "year": "2013",
      "location": "Chicago",
      "age": "Not Disclosed",
      "gender": "Girl",
      "disability": "Severe Delays",
      "theme": "ABA, more training for teachers and paraprofessionals",
      "language": "Spanish"
    },
    {
      "name": "Edith",
      "year": "2013",
      "location": "Not Disclosed",
      "age": "School Age",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Understand the intelligence individuals with ASD have",
      "language": "Spanish"
    },
    {
      "name": "Jenna Knight",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Fully funding IDEA",
      "language": "English"
    },
    {
      "name": "Hima Bindu Pyda",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Modified test books",
      "language": "English"
    },
    {
      "name": "Elle Rucker",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Not Disclosed",
      "gender": "Girl",
      "disability": "Bipolar Disorder, ASD",
      "theme": "Parents should have access to records, services for individual students instead of disability areas, funding based on percent of population",
      "language": "English"
    },
    {
      "name": "Elle Rucker",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Not Disclosed",
      "gender": "Girl",
      "disability": "Dyslexia",
      "theme": "Not Disclosed",
      "language": "English"
    },
    {
      "name": "Ellen Chambers",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Not Disclosed",
      "gender": "Not Disclosed",
      "disability": "Not Disclosed",
      "theme": "Ensuring that schools that are out of compliance must rectify the problem faster, ensuring that IEPs address the students' needs before finding no manifestation",
      "language": "English"
    },
    {
      "name": "Carla Molina-Dean",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Girl",
      "disability": "Anxeity, OCD",
      "theme": "Update IDEA so it can be more flexible for children with disabilities, Faster communication between teachers and parents",
      "language": "English"
    },
    {
      "name": "Donna Nixon",
      "year": "2018",
      "location": "New Hampshire",
      "age": "Not Disclosed",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Provide information to parents in their native language within 20 days",
      "language": "English"
    },
    {
      "name": "Shawna Bowman",
      "year": "2018",
      "location": "New Hampshire",
      "age": "School Age",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Fully funding IDEA",
      "language": "English"
    },
    {
      "name": "Shawna Bowman",
      "year": "2018",
      "location": "New Hampshire",
      "age": "Not Disclosed",
      "gender": "Girl",
      "disability": "ADHD",
      "theme": "Not Disclosed",
      "language": "English"
    },
    {
      "name": "Jessica Lott",
      "year": "2018",
      "location": "New Hampshire",
      "age": "Not Disclosed",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Fully funding IDEA",
      "language": "English"
    },
    {
      "name": "Moira Ryan",
      "year": "2018",
      "location": "New Hampshire",
      "age": "Not Disclosed",
      "gender": "Not Disclosed",
      "disability": "ASD",
      "theme": "Fully funding IDEA",
      "language": "English"
    },
    {
      "name": "Sandi Raeuchle",
      "year": "2018",
      "location": "New Hampshire",
      "age": "Not Disclosed",
      "gender": "Boy",
      "disability": "Cognitive Impairment, Learning Disability",
      "theme": "Fully funding IDEA",
      "language": "English"
    },
    {
      "name": "LeeAnn Bower",
      "year": "2018",
      "location": "New Hampshire",
      "age": "Not Disclosed",
      "gender": "Girl",
      "disability": "TBI",
      "theme": "Fully funding IDEA",
      "language": "English"
    },
    {
      "name": "Ann Seward",
      "year": "2018",
      "location": "New Hampshire",
      "age": "School Age",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "System to ensure child's needs are being met by experts in the field, regulations for seclusionary practices, parents should be able to seek outside professional to determine appropriate interventions",
      "language": "English"
    },
    {
      "name": "Erin Pospychala",
      "year": "2018",
      "location": "New Hampshire",
      "age": "Early Childhood",
      "gender": "Girl",
      "disability": "Down Syndrome",
      "theme": "Require parents to sign each page of IEP, main the level of detail required for service providers and provision, clear statement requiring schools to provide the services in the IEP",
      "language": "English"
    },
    {
      "name": "Shannon Littlefield",
      "year": "2018",
      "location": "New Hampshire",
      "age": "Not Disclosed",
      "gender": "Boy",
      "disability": "ASD",
      "theme": "Parents should be allowed to see meeting agendas and relevant testing information 7 days prior to meeting",
      "language": "English"
    },
    {
      "name": "Emily James",
      "year": "2018",
      "location": "New Hampshire",
      "age": "School Age",
      "gender": "Girl",
      "disability": "Down Syndrome",
      "theme": "Parents should have access to and understand the IEP process, create an IEP summary for parents",
      "language": "English"
    },
    {
      "name": "Ellen Curran",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Not Disclosed",
      "gender": "Not Disclosed",
      "disability": "Emotional Disorder",
      "theme": "Loopholes in the interpretation and implementation of the disciplinary regulations should be closed",
      "language": "English"
    },
    {
      "name": "Kathleen Amaral",
      "year": "2018",
      "location": "Massachusetts",
      "age": "Transition",
      "gender": "Boy",
      "disability": "Congenital Disorder of Glycosylation",
      "theme": "Access to extracurricular activities for individuals with disabilities in order to promote social and emotional wellbeing",
      "language": "English"
    },
    {
      "name": "Carlina Machado",
      "year": "2018",
      "location": "Massachusetts",
      "age": "School Age",
      "gender": "Girl",
      "disability": "SLD",
      "theme": "Training for parents about their rights, require a nonbiased advocate at every meeting",
      "language": "English"
    }
];
addItem();
var userList = new List('users', options);

