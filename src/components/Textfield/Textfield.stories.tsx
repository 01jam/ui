import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextfieldProps, default as Textfield } from "./Textfield";
import React from "react";

export default {
	title: "Atoms/Textfield",
	component: Textfield,
} as ComponentMeta<typeof Textfield>;

const Template: ComponentStory<typeof Textfield> = (args) => (
	<Textfield {...args} />
);

export const Default: { args?: TextfieldProps } = Template.bind({});

Default.args = {};
