import React, { FC, useRef, useState } from "react";
import styles from "./textarea.module.scss";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

export interface TextareaProps {}

const Textarea: FC<TextareaProps> = ({}) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const EditorRef = useRef<Editor>(null);

	const onChange = (editorState: EditorState) => setEditorState(editorState);

	return (
		<label
			className={styles.container}
			onClick={(_event) => EditorRef.current?.focus()}
		>
			<Editor
				ref={EditorRef}
				editorState={editorState}
				onChange={onChange}
			/>
		</label>
	);
};

export default Textarea;
