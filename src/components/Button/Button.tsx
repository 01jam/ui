import React, { FC } from "react";

interface ButtonProps {
	label: string;
}

const Button: FC<ButtonProps> = ({ label }) => <button>{label}</button>;

export default Button;