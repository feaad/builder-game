"use client";

import { space } from "postcss/lib/list";

interface SpaceBarProps {
	spacebar: string;
	onClick: () => void;
}

const Key = ({ spacebar, onClick }: SpaceBarProps) => {
	return (
		<div className='flex m-4'>
			<button
				onClick={onClick}
				// className='btn-square btn-lg flex bg-white rounded-lg'
				className={`btn-square w-full flex bg-white rounded-lg`}
			>
				<div className={`flex m-auto font-semibold text-slate-900 text-xl`}>
					{spacebar}
				</div>
			</button>
		</div>
	);
};

export default Key;
