//creates a function displayName
//takes arguments for a name, career, and description
//and logs it into the console with some style
function displayName(name, career, description) {
    console.log("Name: " + name.toUpperCase());
    console.log("Career: " + career);
    console.log("Description: " + description);
    console.log("");//adds a blank space
}

//call displayName, passing in some string values as the arguments
displayName('Elyse Wertheim', 'Paralegal', 'To be a great dev!!');

//adds new section called My Interests
console.log("My Interests:")

//creates a function displayInterests
//takes four arguments
//and logs it into the console with some style
function displayInterests (zero, one, two, three) {
    console.log("* " + zero);
    console.log("* " + one);
    console.log("* " + two);
    console.log("* " + three);
    console.log("");//adds a blank space
}

//call displayInterests, passing in some string values as the arguments
displayInterests ('Trivia', 'Concerts', 'People watching', 'Gym' )

//adds new section called My Previous Experience
console.log("My Previous Experience:")

//creates a function displayPosition
//takes arguments for a title, company and description
//and logs it to the console with some style
function displayPosition (title, company, description) {
console.log("* " + title + " at " + company + " - " + description);
}

//call displayPosition, passing in some string values as the arguments
displayPosition ('Math, Chemistry, Physics, Biology & English tutor', 'some school', 'Tutored students in those areas');

//call displayPosition, passing in some string values as arguments
displayPosition ("Undergraduate Teaching Assistant", "University of Georgia", "Helped grade assignments, answer questions, held lab and office hours")

//call displayPosition, passing in some string values as arguments
displayPosition ("Lead Programmer for iBeacon Experiment", "Georgia Museum of Art", "Created native iOS virtual tour guide that used iBeacon technology");

//adds new line and section called My Skills
console.log("");
console.log("My Skills:");

function displaySkill (skill, cool) {
    if (cool === true) {
        console.log ("* BAM: " + skill);
    } else {
       console.log ("* " + skill);
    }
}

//call displaySkill, passing in a string and evaluating boolean value
displaySkill ("Viola", true);

//call displaySkill, passing in a string and evaluating boolean value
displaySkill ("Spanish", true);

//call displaySkill, passing in a string and evaluating boolean value
displaySkill ("Java", false);

//call displaySkill, passing in a string and evaluating boolean value
displaySkill ("C/ C++", false);

//call displaySkill, passing in a string and evaluating boolean value
displaySkill ("Objective-C / Swift", true);

//call displaySkill, passing in a string and evaluating boolean value
displaySkill ("Javascript", false);

//call displaySkill, passing in a string and evaluating boolean value
displaySkill ("Python", false);

//call displaySkill, passing in a string and evaluating boolean value
displaySkill ("Typescript", true);