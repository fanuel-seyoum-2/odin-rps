/*
 * getComputerChoice
 * Generates a random number from 0 to 8 and
 * Returns: - "rock" [0, 2]
 * 	    - "paper" [3, 5]
 * 	    - "scissors" [6, 8]
 */
function getComputerChoice() {

	let pick = Math.floor(Math.random() * 9)
	let choice = "Scissors";

	if (pick < 3)
		choice = "Rock";
	else if (pick < 6)
		choice = "Paper";

	return choice;
}
