"use client";
import React, { useState } from "react";
import SecondaryButton from "../components/SecondaryButton";

export interface GridProps {
	onButtonClick: (letter: string) => void;
}

export default function Grid() {
	// useState(() => {
	// 	getLabels();
	// });

	// function getLabels(): string[] {
	// 	let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	// 	const labels: string[] = [];

	// 	for (let i = 0; i < alphabet.length; i++) {
	// 		let letter = alphabet[Math.floor(Math.random() * alphabet.length)];
	// 		labels.push(letter);
	// 	}
	// 	return labels;
	// }
	// const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	// for (let i = 0; i < alphabet.length; i++) {
	//     // let letter = alphabet[Math.floor(Math.random() * alphabet.length)];
	// 	let letter = alphabet[Math.floor(Math.random() * alphabet.length)];
	//     labels.push(letter);
	// }

	let labels = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
	];

	const [val, setVal] = useState<string[]>([]);

	function onButtonClick(letter: string) {
		setVal((prevVal) => [...prevVal, letter]);
	}

	function displayLetter() {
		return (
			<div className='flex justify-center pt-8 text-white'>
				<p>{val}</p>
			</div>
		);
	}

	function deleteLetter() {
		setVal((prevVal) => {
			const newVal = [...prevVal];
			newVal.pop();
			return newVal;
		});
	}

	function printGrid() {
		let row = 4;
		let col = 4;

		let val = "";

		const grid: JSX.Element[] = [];
		for (let i = 0; i < row; i++) {
			const rowElements: JSX.Element[] = [];
			for (let j = 0; j < col; j++) {
				rowElements.push(
					<div className='p-2'>
						<button
							key={`${i}-${j}`}
							className='bg-white text-slate-950 font-semibold text-2xl h-20 rounded-[8px] w-20'
							onClick={() =>
								onButtonClick(labels[(i * col + j) % labels.length])
							}
						>
							{labels[(i * col + j) % labels.length]}
						</button>
					</div>
				);
			}
			grid.push(
				// <div key={`row-${i}`} className='flex'>
				//     {rowElements}
				// </div>
				<div key={i} className='flex'>
					{rowElements}
				</div>
			);
		}
		return grid;
	}

	// return <div className='pt-8'>{buttonClick(printGrid())}</div>;
	return (
		<div>
			<div>{displayLetter()}</div>
			<div className='pt-8'>{printGrid()}</div>
			<div className='pt-16'>
				<SecondaryButton label='Delete' onClick={deleteLetter} />
				<SecondaryButton label='Reshuffle' />
				<SecondaryButton label='Submit' />
			</div>
		</div>
	);
}
