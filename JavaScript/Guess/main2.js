var secretNumber = 4;

input = prompt("Enter a number.....");
guessedNumber = Number(input);

if(isNaN(guessedNumber)) {
    alert("Enter a valid number...")
}
else { 
    
    if (guessedNumber < secretNumber) {
        alert("Entered number is smaller");
    }

    else if (guessedNumber > secretNumber) {
        alert("Entered number is larger");
    }

    else {
        alert("You have guessed the right number!!!!")
    }
}

