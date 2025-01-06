let userScore = 0;
let compScore = 0;

// to get all the choice divs
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const UScore = document.querySelector("#user-score");
const CScore = document.querySelector("#comp-score");

// generate computer choice
const genCompChoice = () =>{
    // EXPLAINATION OF HOW WE CAN GENERATE RANDOM STRING !!
    // there's no as such option in js to generate random string so we make array so that we can use indx of array and then use math random module to generate random whole no(which is nothing but are indices).
    //  now we've three options so we need to generate btw (0 to 2) and to obtain this we multiply by 3 to get btw 0 to 2 
    // and to remove after decimal numbers we use math floor 
    const options = ["rock","paper","scissor"];
    const randomIndx = Math.floor(Math.random() * 3);
    return options[randomIndx];

}
const playGame = (userChoice)=>{
    // comp choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        msg.innerText =`It's a tie!. Computer choose '${compChoice}'`;
        msg.style.backgroundColor = "rgba(2, 14, 45, 0.959)";
        // user-win
    }else if((userChoice === "rock" && compChoice === "scissor") || (userChoice === "paper" && compChoice === "rock") || (userChoice === "scissor" && compChoice === "paper")){
        userScore++;
        UScore.innerText = userScore;
        msg.innerText =`Congratulations! You win. Computer choose '${compChoice}'`;
        msg.style.backgroundColor = "green";
        // comp-win
    }else{
        compScore++;
        CScore.innerText = compScore;
        msg.innerText =`Oh no! You lost. Computer choose '${compChoice}'`;
        msg.style.backgroundColor = "red";
    }

}
// to handle click event
choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
        // to get users choice
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});