import React, { FC } from "react";
import styles from "./select.module.scss";

export interface SelectProps {}

const Select: FC<SelectProps> = ({}) => (
	<select>
		<option value="a">Alpha</option>
		<option value="b">Bravo</option>
		<option value="c">Charlie</option>
		<option value="d">Delta</option>
	</select>
);

export default Select;
