"use client";
import React, { useState } from "react";
import SecondaryButton from "../components/SecondaryButton";

export interface GridProps {
	onButtonClick: (letter: string) => void;
}

export default function Grid() {
	function generateLabels() {
		const labels = new Set();

		const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		for (let i = 0; labels.size < 16; i++) {
			labels.add(alphabet[Math.floor(Math.random() * alphabet.length)]);
		}
		return labels;
	}

	let labels = new Set();
	let storedLabels: string | null = null;

	if (typeof window !== "undefined") {
		storedLabels = localStorage.getItem("labels");
	}

	if (storedLabels) {
		labels = new Set(JSON.parse(storedLabels));
	} else {
		labels = generateLabels();
		localStorage.setItem("labels", JSON.stringify(Array.from(labels)));
	}

	const [val, setVal] = useState<string[]>([]);

	function onButtonClick(letter: string) {
		setVal((prevVal) => [...prevVal, letter]);
	}

	function displayLetter() {
		return (
			<div className='flex justify-center pt-4 h-10 text-white'>
				{val}
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
		const row = 4;
		const col = 4;

		const grid: JSX.Element[] = [];
		for (let i = 0; i < row; i++) {
			const rowElements: JSX.Element[] = [];
			for (let j = 0; j < col; j++) {
				rowElements.push(
					<div className='p-2' key={`div-btn-${i}-${j}`}>
						<button
							key={`btn-${i}-${j}`}
							className='bg-white text-slate-950 font-semibold text-2xl h-20 rounded-[8px] w-20'
							onClick={() =>
								onButtonClick(
									String(Array.from(labels)[(i * col + j) % labels.size])
								)
							}
						>
							{String(Array.from(labels)[(i * col + j) % labels.size])}
						</button>
					</div>
				);
			}
			grid.push(
				<div key={i} className='flex'>
					{rowElements}
				</div>
			);
		}
		return grid;
	}
	return (
		<div>
			{displayLetter()}
			<hr/>
			<br />
			<div className='pt-2' >{printGrid()}</div>
			<div className='pt-16'>
				<SecondaryButton label='Delete' onClick={deleteLetter} />
				<SecondaryButton label='Reshuffle' />
				<SecondaryButton label='Submit' />
			</div>
		</div>
	);
}
