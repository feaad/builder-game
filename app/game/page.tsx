"use client";
import React from "react";
// import { observer } from "mobx-react-lite";
import Grid from "./Grid";
// import { observer } from "mobx-react";
import SecondaryButton from "../components/SecondaryButton";
import { on } from "events";
import deleteLetter from "./Grid";

interface GameProps {
	theme: string;
}

// export default observer(function Game({ theme }: GameProps) {

// });

const Game = () => {
	// const data = useLocalObservable(() => ({
	// 	Grid,
    // }));

	return (
		<div className='bg-bkg h-screen pt-24 px-5'>
			<div className='flex justify-center'>
				<h2 className='text-4xl font-bold '>The Builder Game</h2>
			</div>
			<div className='flex justify-center pt-3'>
				{/* TODO:Import user selection */}
				<h5>Theme: {}</h5>
			</div>
			{/* <div className='flex justify-center pt-8'>
				<input
					type='text'
					placeholder="You can't touch this"
					className='input input-bordered w-full bg-bkg'
					disabled
                />
				
			</div> */}
			{/* TODO:relevant approved words show up here */}
			<div className='flex justify-center pt-8 px-3'>
				<input
					type='text'
					placeholder="You can't touch this"
					className='w-full bg-bkg'
					disabled
				/>
			</div>
			<div>
				<Grid />
			</div>
            {/* <div className='pt-16'>
				<SecondaryButton label='Delete' onClick={deleteLetter} />
				<SecondaryButton label='Reshuffle' />
				<SecondaryButton label='Submit' />
			</div> */}
		</div>
	);
};
export default Game;
