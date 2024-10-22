import Link from "next/link";
import Button from "./button";

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
						<Button label='Countries' />
						<Button label='Animals' />
					</div>
				</div>
					<div className='absolute bottom-20 inset-x-0 '>
          <div className="flex justify-center">
            {/* TODO: Link to game page */}
							<Link href={"/"} className='font-semibold text-xl'>
								Start Game
							</Link>
						</div>
					</div>
				
			</div>
		</main>
	);
}
