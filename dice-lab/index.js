// note: all of the variables are global variables
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls; // define variables
balance = 0;  // initial value
var die1Image = new Image();
var die2Image = new Image();

function rollDice() {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;

    // set the dice images based on the roll
    die1Image = document.querySelectorAll("img")[0];
    die1Name = "images/dice" + die1 + ".png";
    die1Image.setAttribute("src", die1Name);

    die2Image = document.querySelectorAll("img")[1];
    die2Name = "images/dice" + die2 + ".png";
    die2Image.setAttribute("src", die2Name);
}

function whoWon() {
    // in h3 report how much money was won or lost and the balance
    if (dieSum <= 5){
        outcome = "You lose, please pay me " + 5 + " dollars.";
        balance -= 5;
    } else if (dieSum >= 9){
        outcome = "You win, I pay you " + 5 + " dollars.";
        balance += 5; // This should be += instead of -=
    } else {
        outcome = "It's a draw, nobody wins or loses.";
    }

    // Report the outcome:
    banner = die1 + " + " + die2 + " is: " + dieSum;
    document.querySelector("#balanceOutcome").innerHTML = banner + "<br>" + outcome;
}

const buttonLetsPlay = document.querySelector('.letsPlayButton')

function letsPlay(){
    var numberPlay = prompt("How many times do you want to play?");
    document.querySelector("#timesPlay").innerHTML = "You are playing " + numberPlay + " time(s)...";
    for ( ; numberPlay > 0; numberPlay--) {
        rollDice();
        whoWon();
        document.querySelector("#numberBalance").innerHTML = "Your balance is: " + balance;
        console.log(numberPlay + " " + balance);
    }
    document.getElementById ("timesPlay").style.border = "thin solid white";
}
