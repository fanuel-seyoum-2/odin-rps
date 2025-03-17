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
 * playRound
 * Compares the parameters and displays the winning party
 *
 * Spelling errors on the part of the user
 * are counted as a "loss"
 */
function playRound(humanChoice, computerChoice) {
	let roundResult = "loss";

	const comments = document.querySelector(".comments");

	if (humanChoice == computerChoice) {
		roundResult = "tie";
		comments.textContent = "It's a tie";
	}

	else if (
			(humanChoice == "rock" && computerChoice == "scissors") || 
			(humanChoice == "paper" && computerChoice == "rock")  ||
			(humanChoice == "scissors" && computerChoice == "paper")
		) {
		
		roundResult = "win";
		comments.textContent =`You win! ${humanChoice} beats ${computerChoice}`;
	}
	else {
		comments.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
	}

	return roundResult;
}

function updateScore(roundResult, currentScore) {
	let [humanScore, computerScore] = currentScore;

	if (roundResult === "win") ++humanScore;
	else if (roundResult === "loss") ++computerScore;

	let scoreDiv = document.querySelector(".score");
	scoreDiv.textContent = `${humanScore} : ${computerScore}`

	return [humanScore, computerScore];
}

let score = [0,0];

let bts = document.querySelector(".bts");
bts.addEventListener('click', (e) => {
	let id = e.target.id;
	let compChoice = getComputerChoice();
	let res = playRound(id, compChoice);
	score = updateScore(res, score);
});
