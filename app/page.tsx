import Link from "next/link";
import Button from "../components/button";

export default function Home() {
	return (
		<main className='bg-bkg h-screen pt-24 px-10'>
			<div>
				<div className='flex justify-center'>
					<h2 className='text-4xl font-bold '>The Builder Game</h2>
				</div>
				<div className='flex justify-center pt-3'>
					<h5>Choose a theme</h5>
				</div>
				<div className='justify-center'>
					<div className='grid grid-cols-2 gap-5'>
						{/* TODO: Should come from the database */}
						<Link href={"/countries"}>
							<Button label='Countries' />
						</Link>
						<Link href={"/animals"}>
							<Button label='Animals' />
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
