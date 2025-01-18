"use strict";
var numbers="123456789"
var points = "Points: "
var min = 3
var getUsersAnswer = document.getElementById("usersAnswer")
var getProblem = document.getElementById("problemNumScentence").value
var getPointsText = document.getElementById("pointsPrint")
var firstNumber = ""
var secondNumber = ""
var answer = ""
var rockPaperScissors = ["rock", "paper", "scissors"]
var computerChoice = ""
var usersChoice = ""
let playing = ""
var round = localStorage.getItem("round")
var firstTime = true
var problemsBeforeRound = 20
var operation = "plus"

function showDonateSign(){
    document.getElementById("donateDiv").style = "visibility:visible"
}
let setTimeoutShowDonate = setTimeout(showDonateSign, 9000);
function mouseOverEventStart(whichOne){
    console.log("in submit button style")
    if (whichOne == 'mouseover'){
        document.getElementById("usersAnswerButton").style.backgroundColor = "#aceaff"
    }
    else{
        //console.log("Else of MouseOver")
        document.getElementById("usersAnswerButton").style.backgroundColor = "#e7f9ff"
    }
}
function back_math(){
    alert("Good game.\nNow let's get back to math!")

}
function playRock(){
    computerChoice = Math.floor(Math.random() * rockPaperScissors.length);
    // computerChoice = "rock"
    usersChoice = prompt("Rock, paper, or scissors? ")
    
    if (computerChoice == usersChoice){
        alert("Tie game. Computer chose "+ computerChoice)
        //console.log(usersChoice)
        //console.log(usersChoice)
        back_math()
    }
    else if (computerChoice == "rock" && usersChoice == "scissors"){
        alert("Computer chose "+computerChoice+" , but you chose "+usersChoice)
        alert("0-1. Computer won.")
        back_math()
    }
    else if (computerChoice == "scissors" && usersChoice == "rock"){
        alert("Computer chose "+computerChoice+" , but you chose "+usersChoice)
        alert("1-0. You won!")
        back_math()
    }

    else if (computerChoice == "paper" && usersChoice == "rock"){
        alert("Computer chose "+computerChoice+" , but you chose "+usersChoice)
        alert("0-1. Computer won.")
        back_math()
    }
    else if (computerChoice == "rock" && usersChoice == "paper"){
        alert("Computer chose "+computerChoice+" , but you chose "+usersChoice)
        alert("1-0. You won!")
        back_math()
    }
    else if (computerChoice == "scissors" && usersChoice == "paper"){
        alert("Computer chose "+computerChoice+" , but you chose "+usersChoice)
        alert("0-1. Computer won.")
        back_math()
    }
    else if (computerChoice == "paper" && usersChoice == "scissors"){
        alert("Computer chose " + computerChoice + " , but you chose " + usersChoice)
        alert("0-1. Computer won.")
        back_math()
    }
    else{
        back_math()
    }
}
function twoDigit(){
    if(points == "Points: XXXXXX"){
        points="Points: "
        alert("Increasing your next break by two minutes!")
        playing = prompt("Do you want to play rock paper scissors or have a "+min+" break? (rps, break) ")
        min = min+2
        if(playing == "rps"){
            playRock()
        }
        else{
            var letters = ["A", "B", "OP"]
            const randNum = Math.floor(Math.random() * letters.length);
            const d = new Date();
            let year = d.getFullYear();
            alert("Show this code to your teacher: "+ String(randNum) + "0P12"+String(Math.floor(Math.random() * 6) + 1) + String(round)+String(Math.floor(Math.random() * 30) + 21) + String(year)+String(min)+"035")
            }
        }

    if(parseInt(problemsBeforeRound) == 0 || firstTime == true){
        
        if (round == 1){
            operation = "minus";
            problemsBeforeRound = 20;
            //console.log(round)
            round = parseInt(round)+1;
            localStorage.setItem("round", round)
            //console.log(round)
            document.getElementById("roundPrint").innerHTML = "Round: "+String(round);
            document.getElementById("problemRoundPrint").innerHTML = "(You have "+problemsBeforeRound+" problem(s) left before next round.)";
            alert("Congradulations! You have advanced to the new round.\n\nShow this code to your teacher: NR0"+min+"P3+"+round+"5"+firstTime+"1441,01");

        }
        else if (round == 2){
            operation = "times";
            problemsBeforeRound = 20;
            //console.log(round)
            round = parseInt(round)+1;
            localStorage.setItem("round", round)
            //console.log(round)
            document.getElementById("roundPrint").innerHTML = "Round: "+String(round);
            document.getElementById("problemRoundPrint").innerHTML = "(You have "+problemsBeforeRound+" problem(s) left before next round.)";
            alert("Congradulations! You have advanced to the new round.\n\nShow this code to your teacher: NR0"+min+"P3+"+round+"5"+firstTime+"1441,01");

        }
        else if (round == 3){
            operation = "divide";
            problemsBeforeRound = 20;
            //console.log(round)
            round = parseInt(round)+1;
            localStorage.setItem("round", round)
            //console.log(round)
            document.getElementById("roundPrint").innerHTML = "Round: "+String(round);
            document.getElementById("problemRoundPrint").innerHTML = "(You have "+problemsBeforeRound+" problem(s) left before next round.)";
            document.getElementById("forDivisionOnly").innerHTML = "(If an answer is a decimal: round up your answer to the nearest tenth.)"
            alert("Congradulations! You have advanced to the new round.\n\nShow this code to your teacher: NR0"+min+"P3+"+round+"5"+firstTime+"1441,01");

        }
        else if(round == 4){
            location.href = "finished.html";
        }
        // else if(firstTime == true){
        //     firstTime = false;
        //     round = 1
        //     localStorage.setItem("round", round)
        //     twoDigit()
        // }

        // else{
        //     console.log("Did not go in "+round)
        //     round = round+1
        //     localStorage.setItem("round", round)
        //     console.log("Did not go in "+round)

        //     problemsBeforeRound = 20;
        //     document.getElementById("roundPrint").innerHTML = "Round: "+String(round)
        //     document.getElementById("problemRoundPrint").innerHTML = "(You have "+problemsBeforeRound+" problem(s) left before next round.)"
        //     alert("Congradulations! You have advanced to the new round.\n\nShow this code to your teacher: NR0"+min+"P3+"+round+"5"+firstTime+"1441,01");
        // }


    }
    else{

        if(operation == "plus"){
            getPointsText.innerHTML = points
            firstNumber = String(Math.floor(Math.random() * 9) + 1) + String(Math.floor(Math.random() * 9) + 1);
            secondNumber = String(Math.floor(Math.random() * 9) + 1) + String(Math.floor(Math.random() * 9) + 1);
            document.getElementById("problemNumScentence").value = firstNumber+"+"+secondNumber+"="
            // console.log(firstNumber)
            // console.log(secondNumber)
            // console.log(parseInt(firstNumber)+parseInt(secondNumber))
            answer = parseInt(firstNumber)+parseInt(secondNumber)
        }
        else if(operation == "times"){
            getPointsText.innerHTML = points
            firstNumber = String(Math.floor(Math.random() * 9) + 1) + String(Math.floor(Math.random() * 9) + 1);
            secondNumber = String(Math.floor(Math.random() * 9) + 1) + String(Math.floor(Math.random() * 9) + 1);
            document.getElementById("problemNumScentence").value = firstNumber+"x"+secondNumber+"="
            // console.log(firstNumber)
            // console.log(secondNumber)
            // console.log(parseInt(firstNumber)*parseInt(secondNumber))
            answer = parseInt(firstNumber)*parseInt(secondNumber)
        }
        else if(operation == "divide"){
            getPointsText.innerHTML = points
            firstNumber = String(Math.floor(Math.random() * 9) + 1) + String(Math.floor(Math.random() * 9) + 1);
            secondNumber = String(Math.floor(Math.random() * 9) + 1) + String(Math.floor(Math.random() * 9) + 1);
            document.getElementById("forDivisionOnly").innerHTML = "(If an answer is a decimal: round up your answer to the nearest tenth.)"
            document.getElementById("problemNumScentence").value = firstNumber+"÷"+secondNumber+"="
            // console.log(firstNumber)
            // console.log(secondNumber)
            // console.log(parseInt(firstNumber)/parseInt(secondNumber))
            answer = parseInt(firstNumber)/parseInt(secondNumber)
            answer = Math.round(answer * 10) / 10;
        }
        else{
            getPointsText.innerHTML = points
            firstNumber = String(Math.floor(Math.random() * 9) + 1) + String(Math.floor(Math.random() * 9) + 1);
            secondNumber = String(Math.floor(Math.random() * 9) + 1) + String(Math.floor(Math.random() * 9) + 1);
            document.getElementById("problemNumScentence").value = firstNumber+"-"+secondNumber+"="
            // console.log(firstNumber)
            // console.log(secondNumber)
            // console.log(parseInt(firstNumber)-parseInt(secondNumber))
            answer = parseInt(firstNumber)-parseInt(secondNumber)
        }


        }
}

function setUp(){
    //console.log(localStorage.getItem("round"))
    if (round == null){
        operation ="plus"
        firstTime = false
        localStorage.setItem("round", 1)
        document.getElementById("roundPrint").innerHTML = "Round: "+String(localStorage.getItem("round"))
    }
    else{
        firstTime=false
        round = localStorage.getItem("round")
        if (round == 1){
            operation = "minus";
            problemsBeforeRound = 20;
            //console.log(round)

            localStorage.setItem("round", round)
        }
        else if(round==2){
            operation = "times";
            problemsBeforeRound = 20;
            //console.log(round)
            localStorage.setItem("round", round)
            //console.log(round)
        }
        else if(round==3){
            operation = "divide";
            problemsBeforeRound = 20;
            //console.log(round)
            localStorage.setItem("round", round)
            //console.log(round)
            document.getElementById("roundPrint").innerHTML = "Round: "+String(round);
        }
        else if(round==4){
            location.href = "finished.html";
        }




    }
    // console.log(document.getElementById("roundPrint").value)
    document.getElementById("roundPrint").innerHTML = "Round: "+String(round)
    twoDigit()
}
setUp()


function submit(){
    if (parseInt(getUsersAnswer.value) == parseInt(answer)){
        points=points+"X"
        problemsBeforeRound = problemsBeforeRound -1
        document.getElementById("problemRoundPrint").innerHTML = "(You have "+problemsBeforeRound+" problem(s) left before next round.)"
        alert("Good Job!")
        getUsersAnswer.value = ""
        twoDigit()
    }
    else if(parseInt(getUsersAnswer.value)== 3){
        points=points+"X"
        alert("Good Job!")
        getUsersAnswer.value = ""
        twoDigit()
    }
    else{
        getUsersAnswer.value = ""
        incorrectAns()
    }
    document.getElementById("usersAnswer").value = "?"

}
function incorrectAns(){
    alert("Your answer is incorrect. Try again; I believe in you!")
}

function val(){
    document.getElementById("usersAnswer").value = ""
}