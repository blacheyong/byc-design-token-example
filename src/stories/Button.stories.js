import { createButton } from './Button';

export default {
  title: 'Example/Button',
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  disabled: false,
  label: 'Primary Button',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  primary: true,
  disabled: true,
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  disabled: false,
  label: 'Secondary Button',
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  primary: false,
  disabled: true,
  label: 'Secondary Button',
};

export const Small = Template.bind({});
Small.args = {
  disabled: false,
  size: 'sm',
  label: 'Small Button',
};

export const Large = Template.bind({});
Large.args = {
  disabled: false,
  size: 'lg',
  label: 'Large Button',
};
