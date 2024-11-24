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
		<div className='bg-bkg min-h-screen pt-10'>
			<div className='flex justify-center'>
				<div className='flex justify-center w-60 md:w-auto lg:w-auto text-center text-white'>
					<h5>To win the game, form countries using all the letters!</h5>
				</div>
			</div>

			<div className='pt-8'>
				<Keypad letters={letters} countries={validCountriesList} />
			</div>
		</div>
	);
}
