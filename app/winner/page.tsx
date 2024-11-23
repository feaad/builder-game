"use client";
import SecondaryButton from "@/components/SecondaryButton";
import React from "react";
import Link from "next/link";

// interface WinnerProps {
// 	onClick: () => void;
// }

const Winner = () => {
	return (
		<main>
			<div className='bg-bkg h-screen pt-24 px-5'>
				<div className='flex justify-center items-center pt-40 '>
					<svg
						className='w-4 h-4 text-yellow-300 ms-1 animate-bounce'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						aria-hidden='true'
						viewBox='0 0 22 20'
					>
						<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
					</svg>
					<svg
						className='w-20 h-20 text-yellow-300 ms-1 animate-bounce'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						aria-hidden='true'
						viewBox='0 0 22 20'
					>
						<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
					</svg>
					<svg
						className='w-4 h-4 text-yellow-300 ms-1 animate-bounce'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						aria-hidden='true'
						viewBox='0 0 22 20'
					>
						<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
					</svg>
				</div>
				<div className='flex justify-center pt-10 '>
					<h2 className='text-4xl font-bold'>You Win!</h2>
				</div>
				<div className='flex justify-center pt-10'>
					<div>
						<Link href='/countries'>
							<SecondaryButton label='New Game' />
						</Link>
					</div>
					<div>
						<Link href='/'>
							<SecondaryButton label='Homepage'/>
						</Link>
</div>
				</div>
			</div>
		</main>
	);
};

export default Winner;
