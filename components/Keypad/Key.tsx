"use client";

interface KeyProps {
	letter: string;
	colour: string;
	text: string;
	onClick: () => void;
}

const Key = ({ letter, colour, text, onClick,}: KeyProps) => {
	return (
		<div className='flex m-4'>
			<button
				onClick={onClick}
				// className='btn-square btn-lg flex bg-white rounded-lg'
				className={`btn-square btn-lg flex ${colour} rounded-lg`}
			>
				<div className={`flex m-auto font-semibold ${text} text-2xl`}>
					{letter}
				</div>
			</button>
		</div>
	);
};

export default Key;
