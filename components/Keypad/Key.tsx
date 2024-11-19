"use client";

interface KeyProps {
	letter: string;
	onClick: () => void;
}

const Key = ({ letter, onClick }: KeyProps) => {
	return (
		<div className='flex m-4'>
			<button
				onClick={onClick}
				className='btn-square btn-lg flex bg-white rounded-lg'
			>
				<div className='flex m-auto font-semibold text-slate-950 text-2xl'>
					{letter}
				</div>
			</button>
		</div>
	);
};

export default Key;
