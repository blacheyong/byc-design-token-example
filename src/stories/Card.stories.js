import { createCard } from './Card';

export default {
  title: 'Example/Card',
  argTypes: {
    // backgroundColor: { control: 'color' },
    // disabled: { control: 'boolean' },
    // label: { control: 'text' },
    // onClick: { action: 'onClick' },
    // primary: { control: 'boolean' },
    // size: {
    //   control: { type: 'select' },
    //   options: ['sm', 'md', 'lg'],
    // },
  },
};

const Template = ({ label, ...args }) => {
  return createCard({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
//   primary: true,
//   disabled: false,
//   label: 'Primary Card',
};