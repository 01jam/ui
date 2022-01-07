import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonProps, ButtonType, default as Button } from "./Button";
import React from "react";

export default {
	title: "Atoms/Button",
	component: Button,
	argTypes: {
		variant: {
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
	value: "Button",
	variant: ButtonType.Default,
};

export const Alert: { args?: ButtonProps } = Template.bind({});

Alert.args = {
	...Default.args,
	variant: ButtonType.Alert,
};

export const Danger: { args?: ButtonProps } = Template.bind({});

Danger.args = {
	...Default.args,
	variant: ButtonType.Danger,
};
