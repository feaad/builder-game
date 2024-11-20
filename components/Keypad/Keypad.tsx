"use client";

import React, { use } from "react";
import Key from "./Key";
import { useState } from "react";
import SecondaryButton from "../SecondaryButton";


interface KeypadProps {
	letters: string[];
	countries: string[];
}

const Keypad = ({ letters, countries }: KeypadProps) => {
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
							onClick={() => displayLetter(letter)}
						/>
					);
				})}
			</div>
		);

		return row;
	}

	const [clickedKey, setClickedKey] = useState<String[]>([]);

	function displayLetter(key: string) {
		setClickedKey((prevVal) => [...prevVal, key]);
	}

	function deleteLetter() {
		setClickedKey((prevVal) => {
			const newVal = [...prevVal];
			newVal.pop();
			return newVal;
		});
	}

	// function shuffleLetters() {
	// 	console.log("Letters: ", letters)
	// 	let shuffledLetters = [...letters].sort(() => 0.5 - Math.random());
	// 	console.log("Shuffled Letters: ", shuffledLetters)
	// }

	function submitWord() {
		let word = clickedKey.join("");
		console.log("Word: ", word);

		if (countries.includes(word)) {
			console.log("Correct");
		} else {
			console.log("Incorrect");
		}
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
			<div className='pt-8'>
				<SecondaryButton label='Delete' onClick={deleteLetter} />

				<SecondaryButton label='Submit' onClick={submitWord} />
			</div>
		</>
	);
};

export default Keypad;
