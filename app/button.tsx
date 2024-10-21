import React from "react";

interface ButtonProps {
	label: string;
}
const Button = ({ label }: ButtonProps) => {
	return (
		<div className='pt-24'>
			<button className='bg-white h-28 rounded-[12px] w-36'>{label}</button>
		</div>
	);
};
export default Button;
