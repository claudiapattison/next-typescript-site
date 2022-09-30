import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer } from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Primary = Template.bind({}); 

Primary.args = {
  text: 'Innovative technologies and services for complex training needs.',
  email: 'info@aquilalearning.com',
  contactDetails: {
    email: 'info@aquilalearning.com',
    offices: [
      {
        name: 'Oxford',
        address: {
          building: 'Bloxham Mill Business Park',
          town: 'Bloxham',
          county: 'Oxfordshire',
          postCode: 'OX15 4FF'
        }
      }
    ]
  }
}
