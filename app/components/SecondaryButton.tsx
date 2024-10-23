import Link from "next/link";
import React from "react";

interface SecondaryButtonProps {
	label: string;
	onCLick?: () => void;
}
const SecondaryButton = ({ label }: SecondaryButtonProps) => {
  return (
		<span className="justify-center px-2">
			<button className='btn btn-outline w-28 text-white text-[16px] font-mono'>{label}</button>
		</span>
	);
};

export default SecondaryButton;
