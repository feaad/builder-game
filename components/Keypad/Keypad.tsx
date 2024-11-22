"use client";

import React, { use } from "react";
import Key from "./Key";
import { useState } from "react";
import SecondaryButton from "../SecondaryButton";
import SpaceBar from "./SpaceBar";
import { checkIfExist } from "@/app/countries/engine";
import Toast from "../Toast";
import { checkWin } from "@/app/countries/engine";

interface KeypadProps {
	letters: string[];
	countries: Set<string>;
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

	const [clickedKey, setClickedKey] = useState<string[]>([]);

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

	function clearWord() {
		setClickedKey([]);
	}

	const [colour, setColour] = useState<string[]>(
		Array(letters.length).fill("bg-white")
	);
	const [textColour, setTextColour] = useState<string[]>(
		Array(letters.length).fill("text-slate-950")
	);

	const [validInputs, setValidInputs] = useState<string[]>([]);
	const [toastMsg, setToast] = useState<string>("");
	const [toastColour, setToastColour] = useState<string>("");
	const [toastTxtColour, setToastTextColour] = useState<string>("");
	const [resInputs] = useState<string[]>([]);

	function getToast(message: string, colour: string, txtColour: string) { 
		setToast(message);
		setToastColour(colour);
		setToastTextColour(txtColour);
		setTimeout(() => {
			setToast("");
		}, 5000);
	}

	function submitWord() {
		let word = clickedKey.join("");
		console.log("Word: ", word);
		if (countries.has(word)) {
			if (checkIfExist(word, validInputs)) {
				getToast("Already exists", "bg-red-100", "text-red-500");
			} else {
				getToast(
					"Awesome! You got it right!",
					"bg-toast",
					"text-black"
				);
				setValidInputs((prevVal) => [...prevVal, word, " - "]);
				let res = resInputs.push(word);
				console.log("Valid Inputs: ", resInputs);
				changeColour(word);
				checkWin(resInputs, letters)
				clearWord();
			}
		} else if (word === "") {
			getToast("Kindly enter a country name", "bg-slate-900", "text-slate-200");
			clearWord();
		} else {
			getToast("Not on the list!", "bg-red-100", "text-red-500");
			clearWord();
		}
	}


	function changeColour(userInput: string) {
		const newColours = [...colour];
		const newTextColours = [...textColour];
		for (let i = 0; i < userInput.length; i++) {
			const index = letters.indexOf(userInput[i]);
			console.log(`Letter: ${userInput[i]}, Index: ${index}`);
			newColours[index] = "bg-clicked";
			newTextColours[index] = "text-textclicked";
		}
		setColour(newColours);
		setTextColour(newTextColours);
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

	function clickSpaceBar() {
		if (clickedKey.length > 0) {
			setClickedKey((prevVal) => [...prevVal, " "]);
			console.log("Space Bar Clicked");
		}
	}

	function getSpaceBar(spaceBarKey: string) {
		const spaceBar: JSX.Element = (
			<div>
				<SpaceBar label={spaceBarKey} onClick={clickSpaceBar} />
			</div>
		);

		return spaceBar;
	}

	



	return (
		<>
			{clickedKey && (
				<div>
					<div className='flex justify-center pt-4 h-10 text-white'>
						{clickedKey}
					</div>
				</div>
			)}

			{toastMsg && <Toast message={toastMsg} colour={toastColour} textColour={toastTxtColour} />}
			<div>
				<hr className='w-64 mx-auto h-px bg-gray-200 border-0'></hr>
			</div>
			<div className='flex justify-start pt-4 h-10 text-slate-200'>
				{validInputs}
			</div>

			<div className='grid'>
				<div className='m-auto flex h-fit w-fit flex-col justify-items-center'>
					{rows.map((rowLetters: string[], index: number) =>
						getRow(rowLetters, index)
					)}
				</div>
				<div>{getSpaceBar("space")}</div>
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
