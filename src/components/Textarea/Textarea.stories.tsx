import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextareaProps, default as Textarea } from "./Textarea";
import React from "react";

export default {
	title: "Atoms/Textarea",
	component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
	<Textarea {...args} />
);

export const Default: { args?: TextareaProps } = Template.bind({});

Default.args = {};
