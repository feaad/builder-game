import React from "react";

interface SecondaryButtonProps {
	label: string;
	onClick?: () => void;
	
}
const SecondaryButton = ({ label, onClick }: SecondaryButtonProps) => {
  return (
		<span className="justify-center px-2">
			<button className='btn btn-outline w-24 text-white text-[16px] font-mono md:w-36 lg:w-48' onClick={onClick}>{label}</button>
		</span>
	);
};

export default SecondaryButton;
