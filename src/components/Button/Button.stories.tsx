import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonProps, ButtonType, default as Button } from "./Button";
import React from "react";

export default {
	title: "Button",
	component: Button,
	argTypes: {
		type: {
			options: ButtonType,
			control: { type: "select" },
		},
		onClick: {
			control: { type: "none" },
		},
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default: { args?: ButtonProps } = Template.bind({});

Default.args = {
	label: "Button",
	type: ButtonType.Default,
};

export const Alert: { args?: ButtonProps } = Template.bind({});

Alert.args = {
	...Default.args,
	type: ButtonType.Alert,
};

export const Danger: { args?: ButtonProps } = Template.bind({});

Danger.args = {
	...Default.args,
	type: ButtonType.Danger,
};
