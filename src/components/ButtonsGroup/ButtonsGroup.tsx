import React, { FC } from "react";
import { Button } from "..";
import { ButtonProps } from "../Button/Button";
import styles from "./buttonsgroup.module.scss";

export interface ButtonsGroupProps {
	buttons: ButtonProps[];
}

const ButtonsGroup: FC<ButtonsGroupProps> = ({ buttons }) => (
	<div className={styles.container}>
		{buttons.map((button, index) => (
			<Button key={index} {...button} />
		))}
	</div>
);

export default ButtonsGroup;
