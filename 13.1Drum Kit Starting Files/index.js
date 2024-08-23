/*   **********Constructor function****************
function HouseKeeper(name, yearOfExperience, cleaningRepertoire) {
    this.name = name;
    this.yearOfExperience = yearOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
    this.cleaning = function(){
        alert("cleaninng in progress: ");
    }
}

var houseKeeper1 = new HouseKeeper(
    prompt("Enter Name"),
    prompt("Enter yearOfExperience"),
    prompt("Enter languages through comma")
);

houseKeeper1.cleaning();

*/

/*
document.querySelectorAll("button").forEach((element, index) => {
    element.addEventListener("click", () => {
        element.style.color = "white";
        MakeSound(element.innerHTML);
    });
});  */

// clicked
document.querySelectorAll("button").forEach((element) => {
    element.addEventListener("click", () => {
        element.style.color = "white";
        MakeSound(element.innerHTML);
        animation(element.innerHTML);
    });
});

// adding keypress
document.addEventListener("keypress", function(event) {
    // console.log("Key pressed: " + event.key);
    // console.log(event);
    MakeSound(event.key);
    animation(event.key);
});

/* 
addEventListener("keypress", function(element) {
    console.log("Key pressed: " + element.key);
    MakeSound(element.key);
});


Key Differences:
Scope: event is specific to event handlers and provides details about the event. element refers to a DOM element and is used more broadly in manipulating HTML elements.
Usage: event is used to get event-specific information like which key was pressed or which element was clicked. element is used to refer to and manipulate a specific DOM element.

*/

function MakeSound(wo){
    switch(wo){
        case "w":
            var sound = new Audio("./sounds/tom-1.mp3");
            sound.play();
            break;
        case "a":
            var sound = new Audio("./sounds/tom-2.mp3");
            sound.play();
            break;
        case "s":
            var sound = new Audio("./sounds/kick-bass.mp3");
            sound.play();
            break;
        case "d":
            var sound = new Audio("./sounds/snare.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("./sounds/crash.mp3");
            sound.play();
            break;
        case "k":
            var sound = new Audio("./sounds/kick-bass.mp3");
            sound.play();
            break;
        case "l":
            var sound = new Audio("./sounds/tom-1.mp3");
            sound.play();
            break;
        default:
            console.error("Invalid key");
    }
}

function animation(keypressed){
    var activation = document.querySelector("."+keypressed);
    activation.classList.add("pressed");

    setTimeout(function(){
        activation.classList.remove("pressed");
    },10);
}

