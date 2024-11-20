
import Keypad from "@/components/Keypad/Keypad";
import { main } from "./generator";
import { getCommonLetters } from "./generator";
import { validCountries } from "./validCountries";





export const meta = {
	title: "Countries - The Builder Game",
};

export default async function countries() {
	// const letters: string[] = await getUniqueLetters();
	// console.log("Letters: ", letters);

	const countries = await main();
	const letters = await getCommonLetters();
	const validCountriesList = await validCountries();




	return (
		<div className='bg-bkg h-screen pt-24 px-5'>
			<div className='flex justify-center'>
				<h2 className='text-4xl font-bold '>The Builder Game</h2>
			</div>
			<div className='flex justify-center pt-3'>
				{/* TODO:Import user selection */}
				<h5>Theme: {}</h5>
			</div>

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
				<Keypad letters={letters} countries={validCountriesList}/>
				
			</div>
		</div>
		// <div className='bg-slate-600'>
		// 	<Keypad letters={letters} />
		// </div>
	);
}


