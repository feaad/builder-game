import React from "react";

interface ToastProps {
	message: string;
    colour: string;
    textColour: string;
}

const Toast = ({ message, colour, textColour }: ToastProps) => {
	return (
		<div className='toast toast-center w-full'>
			<div className={`alert ${colour} max-w-7xl ${textColour} text-base`}>
				<span>{message}</span>
			</div>
		</div>
	);
};

export default Toast;
