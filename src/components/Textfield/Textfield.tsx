import React, {
	ChangeEventHandler,
	DetailedHTMLProps,
	FC,
	forwardRef,
	InputHTMLAttributes,
	useState,
} from "react";
import styles from "./textfield.module.scss";

export interface TextfieldProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {}

const Textfield: FC<TextfieldProps> = forwardRef(({ ...rest }, ref) => {
	const [value, setValue] = useState(rest.value || "");

	const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		setValue(event.currentTarget.value);
		rest.onChange && rest.onChange(event);
	};

	return (
		<label className={styles.container}>
			<input
				ref={ref}
				type={"text"}
				onChange={onChange}
				value={value}
				{...rest}
			/>
		</label>
	);
});

export default Textfield;
