import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SelectProps, default as Select } from "./Select";
import React from "react";

export default {
	title: "Atoms/Select",
	component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default: { args?: SelectProps } = Template.bind({});

Default.args = {};
