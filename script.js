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
	Rock | Paper } Scissors`, "Scissors");
	return choice.toLowerCase();
}
