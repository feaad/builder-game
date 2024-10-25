import Link from "next/link";
import React from "react";

interface SecondaryButtonProps {
	label: string;
	onClick?: () => void;
}
const SecondaryButton = ({ label, onClick }: SecondaryButtonProps) => {
  return (
		<span className="justify-center px-2">
			<button className='btn btn-outline w-28 text-white text-[16px] font-mono' onClick={onClick}>{label}</button>
		</span>
	);
};

export default SecondaryButton;
