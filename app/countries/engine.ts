export function checkIfExist(word: string, validInputs: string[]): boolean {
	return validInputs.includes(word);
}

let inputLetters = new Set();
export function checkWin(validInputs: string[], letters: string[]) {
	
	for (let i = 0; i < validInputs.length; i++) {
		for (const char of validInputs[i]) {
				inputLetters.add(char);
		}
	}
	console.log("Input Letters: ", inputLetters);
	console.log("Letters: ", letters);
    if (inputLetters.size === letters.length) {
		console.log("You Win!");
		return true;
    }
}

export function resetInputs() {
    inputLetters = new Set();
    console.log("Resetting Inputs");
    console.log("Input Letters: ", inputLetters);
}