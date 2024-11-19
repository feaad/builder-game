import Keypad from "@/components/Keypad/Keypad";
import { main } from "./generator";
import { getCommonLetters } from "./generator";

export const meta = {
	title: "Countries - The Builder Game",
};

export default async function countries() {
	// const letters: string[] = await getUniqueLetters();
	// console.log("Letters: ", letters);

	const countries = await main();

	const letters = await getCommonLetters();

	return (
		<div className='bg-slate-600'>
			<Keypad letters={letters} />
		</div>
	);
}
