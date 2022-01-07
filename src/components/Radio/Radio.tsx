import React, {
	DetailedHTMLProps,
	FC,
	forwardRef,
	InputHTMLAttributes,
} from "react";
import styles from "./radio.module.scss";

export interface RadioProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label: string;
}

const Radio: FC<RadioProps> = forwardRef(({ label, ...rest }, ref) => (
	<label className={styles.container}>
		<input ref={ref} type="radio" {...rest} />
		<div className={styles.mock}>
			<div className={styles["mock-input"]} />
			{label}
		</div>
	</label>
));

export default Radio;
