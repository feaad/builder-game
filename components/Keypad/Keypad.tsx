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

	// let colour = "bg-green-500";

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

	const [colour, setColour] = useState<string[]>(
		Array(letters.length).fill("bg-white")
	);
	const [textColour, setTextColour] = useState<string[]>(
		Array(letters.length).fill("text-slate-950")
	);

	function submitWord() {
		let word = clickedKey.join("");
		console.log("Word: ", word);

		if (countries.includes(word)) {
			console.log("correct");

			const newColours = [...colour];
			const newTextColours = [...textColour];
			for (let i = 0; i < word.length; i++) {
				const index = letters.indexOf(word[i]);
				console.log(`Letter: ${word[i]}, Index: ${index}`);
				newColours[index] = "bg-clicked";
				newTextColours[index] = "text-textclicked";
			}
			setColour(newColours);
			setTextColour(newTextColours);
		} else if (word === "") {
			console.log("Kindly enter a country name");
		} else {
			console.log("Incorrect");
		}
	}

	function getRow(rowLetters: string[], rowIndex: number) {
		const row: JSX.Element = (
			<div
				key={`kp-row-${rowIndex}`}
				className='m-auto flex h-fit w-fit flex-row justify-items-center'
			>
				{rowLetters.map((letter, index) => {
					const letterIndex = letters.indexOf(letter);
					return (
						<Key
							key={`key-${rowIndex}${index}`}
							letter={letter}
							onClick={() => displayLetter(letter)}
							colour={colour[letterIndex]}
							text={textColour[letterIndex]}
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
			<div className='pt-8 flex justify-center'>
				<div className='grid grid-cols-3 gap-2'>
					<SecondaryButton label='Delete' onClick={deleteLetter} />
					<SecondaryButton
						label='Shuffle'
						onClick={() => console.log("Shuffle")}
					/>
					<SecondaryButton label='Submit' onClick={submitWord} />
				</div>
			</div>
		</>
	);
};

export default Keypad;
