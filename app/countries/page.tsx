import Keypad from "@/components/Keypad/Keypad";
import { main } from "./generator";
import { getCommonLetters } from "./generator";
import { validCountries } from "./validCountries";

export const meta = {
	title: "Countries - The Builder Game",
};

export default async function countries() {
	await main();
	const letters = await getCommonLetters();
	const validCountriesList = await validCountries();

	return (
		<div className='bg-bkg h-screen pt-24 px-5'>
			{/* <div className='flex justify-center'>
				<h2 className='text-4xl font-bold '>The Builder Game</h2>
			</div> */}
			<div className='flex justify-center'>
				<h5>To win the game, form countries using all the letters!</h5>
			</div>
			<div className="pt-14">
				<Keypad letters={letters} countries={validCountriesList} />
			</div>
		</div>
	);
}
