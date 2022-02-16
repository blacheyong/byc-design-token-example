export default {
    title: 'Form/Switch',
    argTypes: {
      size: {
          options: ['md', 'lg'],
          control: 'radio',
          description: 'Choose switch size',
          table: { 
              defaultValue: { summary: 'md' } 
          },
      },
  }
}

export const Regular = ({ size }) => `
<div class="form-check form-switch form-switch--${size}">
  <label class="form-check-label" for="flexSwitchCheckDefault">
    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
    <span class="switch-control"></span>
    Default switch checkbox input
  </label>
</div>`
Regular.args = {
  size: 'md',
};

export const Large = ({ size }) => `
<div class="form-check form-switch form-switch--${size}">
  <label class="form-check-label" for="flexSwitchCheckLarge">
    <input class="form-check-input" type="checkbox" id="flexSwitchCheckLarge">
    <span class="switch-control"></span>
    Large switch checkbox input
  </label>
</div>`
Large.args = {
  size: 'lg',
};


export const Disabled = ({ size }) => `
<div class="form-check form-switch form-switch--${size}">
  <label class="form-check-label" for="flexSwitchCheckDefault">
    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" disabled>
    <span class="switch-control"></span>
    Default switch checkbox input
  </label>
</div>`
Disabled.args = {
  size: 'md',
};

export const CheckedAndDisabled = ({ size }) => `
<div class="form-check form-switch form-switch--${size}">
  <label class="form-check-label" for="flexSwitchCheckDefault">
    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked disabled>
    <span class="switch-control"></span>
    Default switch checkbox input
  </label>
</div>`
CheckedAndDisabled.args = {
  size: 'md',
};