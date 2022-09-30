import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Learn more',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Border = Template.bind({});
Border.args = {
  border: true,
  label: 'Contact',
};

