import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { css } from "../../helpers/css";
import styles from "./button.module.scss";

export enum ButtonType {
	Default = "DEFAULT",
	Alert = "ALERT",
	Danger = "DANGER",
}

export interface ButtonProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	variant?: ButtonType;
}

const Button: FC<ButtonProps> = ({ variant = ButtonType.Default, ...rest }) => (
	<input
		type={"button"}
		className={css([styles.container, styles[`type--${variant}`]])}
		{...rest}
	/>
);

export default Button;
