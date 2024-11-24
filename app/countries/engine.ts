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
	if (inputLetters.size === letters.length) {
		return true;
	}
}

export function resetInputs() {
	inputLetters = new Set();
}