import React from 'react';
import Alert from '../../../../dist/collection/components/alerts';

export default {
  title: 'Demo/alert',
  component: Alert,
  argTypes: {
    header: { type: 'string', description: 'alert title', require: false },
    description: {
      type: 'string',
      description: 'alert description',
      require: true,
    },
  },
};

const Template = args => {
  return <alert-component {...args}></alert-component>;
};

export const primary = Template.bind({});
primary.args = {
  header: 'Primary Alert',
  description: 'This is a simple description',
};
