import { NavBar, NavBarProps } from './NavBar';
import { Meta, Story } from '@storybook/react';
import React from 'react';

// This tells Storybook how to list your stories and provide information
export default {
  title: 'Component/NavBar',
  component: NavBar,
  argTypes: {
    variant: { control: 'select' }
  }
} as Meta;

// With named export we define component's story
export const Default: Story<NavBarProps> = (args) => <NavBar {...args} />;
// Define default arguments for the Default story
Default.args = {
  id: 'NavBarDefault',
};

// Second story
export const WithText: Story<NavBarProps> = (args) => (
  <NavBar {...args} />
);
// Define default arguments for the WithText component and inherit arguments from Default component
WithText.args = {
  ...Default.args,
};
