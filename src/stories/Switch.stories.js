export default {
    title: 'Form/Switch',
}

export const Regular = ({  }) => `
<div class="form-check form-switch">
  <label class="form-check-label" for="flexSwitchCheckDefault">
    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
    <span class="switch-control"></span>
    Default switch checkbox input
  </label>
</div>`

export const Large = ({  }) => `
<div class="form-check form-switch form-switch--lg">
  <label class="form-check-label" for="flexSwitchCheckLarge">
    <input class="form-check-input" type="checkbox" id="flexSwitchCheckLarge">
    <span class="switch-control"></span>
    Large switch checkbox input
  </label>
</div>`


export const Disabled = ({  }) => `
<div class="form-check form-switch">
  <label class="form-check-label" for="flexSwitchCheckDefault">
    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" disabled>
    <span class="switch-control"></span>
    Default switch checkbox input
  </label>
</div>`

export const CheckedAndDisabled = ({  }) => `
<div class="form-check form-switch">
  <label class="form-check-label" for="flexSwitchCheckDefault">
    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked disabled>
    <span class="switch-control"></span>
    Default switch checkbox input
  </label>
</div>`