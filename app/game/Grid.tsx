import React from "react";

// export interface GridProps {
//     row: number;
//     col: number;
//     }

export default function Grid() {
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

	function printGrid() {
		let row = 4;
		let col = 4;
		const grid: JSX.Element[] = [];
		for (let i = 0; i < row; i++) {
			const rowElements: JSX.Element[] = [];
			for (let j = 0; j < col; j++) {
				rowElements.push(
					<div className="p-2">
						<button
							key={`${i}-${j}`}
							className='bg-white text-slate-950 font-semibold text-2xl h-20 rounded-[8px] w-20'
						>
							{labels[(i * col + j) % labels.length]}
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
	return <div className='pt-8'>{printGrid()}</div>;
}
