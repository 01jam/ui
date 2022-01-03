import React, { FC, MouseEventHandler } from "react";
import { css } from "../../helpers/css";
import styles from "./button.module.scss";

export enum ButtonType {
	Default = "DEFAULT",
	Alert = "ALERT",
	Danger = "DANGER",
}
export interface ButtonProps {
	label: string;
	type?: ButtonType;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({
	type = ButtonType.Default,
	label,
	onClick,
}) => (
	<button
		className={css([styles.reset, styles[`type--${type}`]])}
		onClick={onClick}
	>
		{label}
	</button>
);

export default Button;
