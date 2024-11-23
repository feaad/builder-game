"use client";

interface KeyProps {
	letter: string;
	colour: string;
	text: string;
	onClick: () => void;
}

const Key = ({ letter, colour, text, onClick,}: KeyProps) => {
	return (
		<div className='flex m-3'>
			<button
				onClick={onClick}
				// className='btn-square btn-lg flex bg-white rounded-lg'
				className={`btn-square btn-md flex ${colour} rounded-lg md:btn-lg lg:btn-xl`}
			>
				<div className={`flex m-auto font-semibold ${text} text-xl md:2xl lg:2xl`}>
					{letter}
				</div>
			</button>
		</div>
	);
};

export default Key;
