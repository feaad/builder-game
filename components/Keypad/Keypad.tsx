"use client";

import Key from "./Key";

interface KeypadProps {
	letters: string[];
}

const Keypad = ({ letters }: KeypadProps) => {
	const maxLetterOnRow = 4;
	const rows: string[][] = [];

	for (let i = 0; i < letters.length; i += maxLetterOnRow) {
		rows.push(letters.slice(i, i + maxLetterOnRow));
	}

	function handleOnClick(key: string) {
		console.log("key", key);
	}

	function getRow(rowLetters: string[], rowIndex: number) {
		const row: JSX.Element = (
			<div
				key={`kp-row-${rowIndex}`}
				className='m-auto flex h-fit w-fit flex-row justify-items-center'
			>
				{rowLetters.map((letter, index) => {
					return (
						<Key
							key={`key-${rowIndex}${index}`}
							letter={letter}
							onClick={() => handleOnClick(letter)}
						/>
					);
				})}
			</div>
		);

		return row;
	}

	return (
		<div className='grid'>
			<div className='m-auto flex h-fit w-fit flex-col justify-items-center'>
				{rows.map((rowLetters: string[], index: number) =>
					getRow(rowLetters, index)
				)}
			</div>
		</div>
	);
};

export default Keypad;
