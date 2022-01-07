import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonsGroupProps, default as ButtonsGroup } from "./ButtonsGroup";
import React from "react";
import * as ButtonStories from "../Button/Button.stories";

export default {
	title: "Molecules/ButtonsGroup",
	component: ButtonsGroup,
} as ComponentMeta<typeof ButtonsGroup>;

const Template: ComponentStory<typeof ButtonsGroup> = (args) => (
	<ButtonsGroup {...args} />
);

export const Default: { args?: ButtonsGroupProps } = Template.bind({});

Default.args = {
	buttons:
		(ButtonStories.Default.args && [
			{ ...ButtonStories.Default.args },
			{ ...ButtonStories.Default.args },
		]) ||
		[],
};
