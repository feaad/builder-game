"use client";

import React, { use } from "react";
import Key from "./Key";
import { useState } from "react";

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

	const [clickedKey, setClickedKey] = useState<String[]>([]);

	function displayLetter(key: string) {
		setClickedKey((prevVal) => [...prevVal, key]);
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
							onClick={() => displayLetter(letter)}
						/>
					);
				})}
			</div>
		);

		return row;
	}

	return (
		<>
			{clickedKey && (
				<div className='flex justify-center pt-4 h-10 text-white'>
					{clickedKey}
				</div>
			)}
			<div className='grid'>
				<div className='m-auto flex h-fit w-fit flex-col justify-items-center'>
					{rows.map((rowLetters: string[], index: number) =>
						getRow(rowLetters, index)
					)}
				</div>
			</div>
		</>
	);
};

export default Keypad;


