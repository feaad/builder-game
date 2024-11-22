export function checkIfExist(word: string, validInputs: string[]): boolean {
	return validInputs.includes(word);
}

export function checkWin(validInputs: string[], letters: string[]) {
	const inputLetters = new Set();
	for (let i = 0; i < validInputs.length; i++) {
		for (let char of validInputs[i]) {
				inputLetters.add(char);
		}
	}
	console.log("Input Letters: ", inputLetters);
	console.log("Letters: ", letters);
    if (inputLetters.size === letters.length) {
        console.log("You Win!");
    }
}
