import { createCard } from './Card';

export default {
  title: 'Example/Card',
  argTypes: {
    // backgroundColor: { control: 'color' },
    // disabled: { control: 'boolean' },
    title: { control: 'text' },
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

// export const Default = Template.bind({});
// Default.args = {
// //   primary: true,
// //   disabled: false,
// //   label: 'Primary Card',
// };

export const Default = ({ title, hoverable, selected }) => `
<div class="card ${[hoverable ? `card--hoverable` : '']} ${[selected ? `card--selected` : '']}">
  <div class="card-body">
    <img src="assets/images/device-1.png" alt="Device">
    <h3 class="card-title">${title}</h3>
    <div class="card__prices d-flex align-items-center justify-content-center">
      <div>
        <h3>$8.30/mo.</h3>
        <h6>for 24 months</h6>
      </div>
      <div>
        <h3>$0.00</h3>
        <h6>down</h6>
      </div>
    </div>
    <div class="card__buttons d-flex justify-content-center">
      <a href="#" class="btn btn-primary">Buy now</a>
      <a href="#" class="btn btn-secondary">More infos</a>
    </div>
  </div>
</div>`
Default.args = {
  hoverable: false,
  selected: false,
  title: 'Samsung Galaxy S21 FE 5G',
};