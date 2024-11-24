"use client";

interface SpaceBarProps {
	label: string;
	onClick: () => void;
}

const SpaceBar = ({ label, onClick }: SpaceBarProps) => {
	return (
		<div className='flex px-8 md:px-18 lg:px-96 pt-3'>
			<button
				onClick={onClick}
				className={`btn-square w-full flex bg-white rounded-lg`}
			>
				<div className={`flex m-auto font-semibold text-slate-900 text-xl`}>
					{label}
				</div>
			</button>
		</div>
	);
};

export default SpaceBar;
