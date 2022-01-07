import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RadioProps, default as Radio } from "./Radio";
import React, { Fragment } from "react";

export default {
	title: "Atoms/Radio",
	component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => (
	<Fragment>
		<Radio name={"traffic_light"} {...args} />
		<Radio name={"traffic_light"} {...args} />
		<Radio name={"traffic_light"} {...args} />
	</Fragment>
);

export const Default: { args?: RadioProps } = Template.bind({});

Default.args = {
	label: "Some label",
};
