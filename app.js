let userScore = 0; //user no initial score
let compScore = 0; //comp no initial score

const choices = document.querySelectorAll(".choice"); //for access of all 3 choice
const msg = document.querySelector("#msg"); //msg ne access karva mate bcoz tya apde change karvanu che ke either the user lose or win

const userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

// we have made the individual function for generation of computer choice so we can directly compare it with user choice in playGame function and aslo we can use the logic in future also for the same logic ---> modular way
const generateCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3); //this is the inbuilt function in math class which generates a random number which has range of 0-1 pn apde vadhare moto np. generate karva mate simply desired output wala no. sathe multipple kari devanu
  //math.floor random values ne remove kari dese
  // rock, paper , scissors mathi game te ek random choice select karavani che for that we will store our choice in a array.
  return options[randIdx]; // this will return the random choice genrated by computer to the playGame function
};

// draw conditon mate nu function
const drawGame = () => {
  // console.log("Game was Draw");
  msg.innerText = "It's Draw! Play Again";
  msg.style.background = "#081b31";
};

// showing the winnner oof the game we're making the function
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    //console.log("You win!");
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.background = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    //console.log("You lose!");
    msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    msg.style.background = "red";
  }
};

// in this function wen generated a random choice for computer and then we compare it with user choice and we'll let to know that who is going to win, accordingly we'll update the score.
const playGame = (userChoice) => {
  // console.log("user choice =", userChoice);
  //Generate the Comp choice
  const compChoice = generateCompChoice();
  // console.log("comp choice =", compChoice);

  //  we've all the choices, now we're going to set the condtions of win , draw, lose
  if (userChoice === compChoice) {
    // Draw Condition
    drawGame();
  } else {
    let userWin = true; // this will track whether the user os winning or not.  true---> winner false --> loser
    if (userChoice === "rock") {
      //compChoice = paper , scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //compChoice = rock , scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //compChoice = paper , rock
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice); // we're calling this function to see whether the user won or not
  }
};

// to access an individual choice on click we have add an event listner using forEach loop.
choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); // this function is made for user selection
    // console.log("choice was clicked", userChoice);
    playGame(userChoice); // we call the game function here bcoz after the selection of user we're going to generate the random choice of computer will compare the choices by passing the userChoice.
  });
});
