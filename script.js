/*
 * getComputerChoice
 * Generates a random number from 0 to 8 and
 * Returns: - "rock" [0, 2]
 * 	    - "paper" [3, 5]
 * 	    - "scissors" [6, 8]
 */
function getComputerChoice() {

	let pick = Math.floor(Math.random() * 9)
	let choice = "scissors";

	if (pick < 3)
		choice = "rock";
	else if (pick < 6)
		choice = "paper";

	return choice;
}
/*
 * getHumanChoice 
 * Prompts the user for their choice
 */
function getHumanChoice() {
	let choice = prompt(`Pick one: 
	Rock | Paper | Scissors`, "Scissors");
	return choice.toLowerCase();
}
/*
 * playRound
 * Compares the parameters and displays the winning party
 *
 * Spelling errors on the part of the user
 * are counted as a "loss"
 */
function playRound(humanChoice, computerChoice) {
	let roundResult = "loss";

	if (humanChoice == computerChoice) {
		roundResult = "tie";
		console.log("It's a tie");
	}

	else if (
			(humanChoice == "rock" && computerChoice == "scissors") || 
			(humanChoice == "paper" && computerChoice == "rock")  ||
			(humanChoice == "scissors" && computerChoice == "paper")
		) {
		
		roundResult = "win";
		console.log(`You win! ${humanChoice} beats ${computerChoice}`);
	}
	else {
		console.log(`You lose! ${computerChoice} beats ${humanChoice} 
		Either that, or ${humanChoice} isn't playable in this game!
		Check that you spelled it correctly!
		`);
	}

	return roundResult;
}

/*
 * playGame
 * Play the game for 5 rounds.
 */

function playGame() {
	let humanScore = 0;
	let computerScore = 0;
	let roundCount = 0;

	while (roundCount < 5) {
		let roundResult = playRound(getHumanChoice(), getComputerChoice());

		if (roundResult == "win") 
			++humanScore;
		else if (roundResult == "loss")
			++computerScore;
		roundCount++;
		console.log(`Human vs Computer \t  ${humanScore} : ${computerScore}`);
	}
}
playGame();
