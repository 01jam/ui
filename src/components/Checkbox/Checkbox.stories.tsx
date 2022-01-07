import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CheckboxProps, default as Checkbox } from "./Checkbox";
import React from "react";

export default {
	title: "Atoms/Checkbox",
	component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
	<Checkbox {...args} />
);

export const Default: { args?: CheckboxProps } = Template.bind({});

Default.args = {
	label: "Some label",
};
