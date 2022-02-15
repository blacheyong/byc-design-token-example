import { createButton } from './Button';

export default {
  title: 'Components/Button',
  argTypes: {
    backgroundColor: { control: 'color' },
    darkBg: {
      control: 'boolean',
      description: 'True if the button is on a dark background.',
      table: { defaultValue: { summary: false } },
    },
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
  secondary: false,
  disabled: false,
  label: 'Primary Button',
};

export const PrimaryOnDarkBackground = Template.bind({});
PrimaryOnDarkBackground.args = {
  primary: true,
  secondary: false,
  darkBg: true,
  disabled: false,
  label: 'Primary Button',
};
PrimaryOnDarkBackground.parameters = {
  backgrounds: { default: 'dark' }
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  primary: true,
  secondary: false,
  disabled: true,
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  secondary: true,
  disabled: false,
  label: 'Secondary Button',
};

export const SecondaryOnDarkBackground = Template.bind({});
SecondaryOnDarkBackground.args = {
  primary: false,
  secondary: true,
  darkBg: true,
  disabled: false,
  label: 'Secondary Button',
};
SecondaryOnDarkBackground.parameters = {
  backgrounds: { default: 'dark' }
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  primary: false,
  secondary: true,
  disabled: true,
  label: 'Secondary Button',
};

export const Small = Template.bind({});
Small.args = {
  primary: true,
  secondary: false,
  disabled: false,
  size: 'sm',
  label: 'Small Button',
};

export const Large = Template.bind({});
Large.args = {
  primary: true,
  secondary: false,
  disabled: false,
  size: 'lg',
  label: 'Large Button',
};

export const Link = Template.bind({});
Link.args = {
  primary: false,
  disabled: false,
  link: true,
  label: 'Link Button',
};

export const PrimaryWithIcon = ({ label }) => `<a class="btn btn-primary btn-icon btn-icon--icon-left" href="#">
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="7" cy="7" r="6.25" stroke="white" stroke-width="1.5"/>
</svg>
${ label }
</a>`
PrimaryWithIcon.args = {
  label: 'Icon on the left',
};
export const SecondaryWithIcon = ({ label }) => `<a class="btn btn-secondary btn-icon btn-icon--icon-left" href="#">
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="7" cy="7" r="6.25" stroke="white" stroke-width="1.5"/>
</svg>
${ label }
</a>`
SecondaryWithIcon.args = {
  label: 'Icon on the left',
};

export const IconOnTheLeft = ({ label }) => `<a class="btn btn-link btn-icon btn-icon--icon-left" href="#">
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="7" cy="7" r="6.25" stroke="white" stroke-width="1.5"/>
</svg>
${ label }
</a>`
IconOnTheLeft.args = {
  label: 'Icon on the left',
};

export const IconOnTheRight = ({ label }) => `<a class="btn btn-link btn-icon btn-icon--icon-right" href="#">
${ label }
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="7" cy="7" r="6.25" stroke="white" stroke-width="1.5"/>
</svg>
</a>`
IconOnTheRight.args = {
  label: 'Icon on the right',
};