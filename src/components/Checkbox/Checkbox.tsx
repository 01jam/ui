import React, {
	DetailedHTMLProps,
	FC,
	forwardRef,
	InputHTMLAttributes,
} from "react";
import styles from "./checkbox.module.scss";

export interface CheckboxProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label: string;
}

const Checkbox: FC<CheckboxProps> = forwardRef(({ label, ...rest }, ref) => (
	<label className={styles.container}>
		<input ref={ref} type={"checkbox"} {...rest} />
		<div className={styles.mock}>
			<div className={styles["mock-input"]} />
			{label}
		</div>
	</label>
));

export default Checkbox;
