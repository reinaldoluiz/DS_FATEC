import React from 'react';
import MyComponent from '../../dist/collection/components/my-component/my-component';

export default {
  title: 'Demo/MyComponent',
  component: MyComponent,
  argTypes: {
    first: { type: 'string', description: 'first name' },
    middle: {
      type: 'string',
      description: 'middle name',
    },
    last: {
      type: 'string',
      description: 'last name',
      defaultValue: { summary: false },
    },
  },
};

const Template = args => {
  return <my-component {...args}></my-component>;
};

export const primary = Template.bind({});
primary.args = {
  first: 'Hello',
  middle: 'World',
  last: '!',
};
