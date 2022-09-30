import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Hero } from './Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'Innovative technologies and services for complex training needs.',
  text: 'Technologies and services to analyse, design, deliver and assure world class training and associated risk for demanding, high-risk and high-compliance occupations.',
  image: '/images/27-inch-imac-2011-1536x1152.png',
};


