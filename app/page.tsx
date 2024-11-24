import Link from "next/link";
import Button from "../components/button";

export default function Home() {
	return (
		<main className='bg-bkg h-screen pt-24 px-10'>
			<div>
				<div className='flex justify-center'>
					<h2 className='text-3xl font-bold lg:text-4xl text-white'>The Builder Game</h2>
				</div>
				<div className='flex justify-center pt-3 text-white'>
					<h5>Choose a theme</h5>
				</div>
				<div className='flex justify-center'>
					<div className='grid grid-cols-2 gap-5 lg:gap-40'>
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
