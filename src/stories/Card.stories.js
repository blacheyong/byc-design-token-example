import imageDevice from '../images/device-1.png';

export default {
  title: 'Components/Card',
  argTypes: {
    title: { control: 'text' }, // not working atm because of html component
  },
}

export const Default = ({ title, hoverable, selected }) => `
<div class="row">
  <div class="col-6">
    <div class="card ${[hoverable ? `card--hoverable` : '']} ${[selected ? `card--selected` : '']}">
      <div class="card-body">
        <img src="${imageDevice}" alt="Device" class="card-img-top">
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
    </div>
  </div>
</div>`
Default.args = {
  hoverable: false,
  selected: false,
  title: 'Samsung Galaxy S21 FE 5G',
};

export const Hoverable = ({ title, hoverable, selected }) => `
<div class="row">
  <div class="col-6">
    <div class="card ${[hoverable ? `card--hoverable` : '']} ${[selected ? `card--selected` : '']}">
      <div class="card-body">
        <img src="${imageDevice}" alt="Device" class="card-img-top">
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
    </div>
  </div>
</div>`
Hoverable.args = {
  hoverable: true,
  selected: false,
  title: 'Samsung Galaxy S21 FE 5G',
};

export const Selected = ({ title, hoverable, selected }) => `
<div class="row">
  <div class="col-6">
    <div class="card ${[hoverable ? `card--hoverable` : '']} ${[selected ? `card--selected` : '']}">
      <div class="card-body">
        <img src="${imageDevice}" alt="Device" class="card-img-top">
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
    </div>
  </div>
</div>`
Selected.args = {
  hoverable: false,
  selected: true,
  title: 'Samsung Galaxy S21 FE 5G',
};

export const Overlay = ({ title, hoverable, selected }) => `
<div class="row">
  <div class="col-6">
    <div class="card ${[hoverable ? `card--hoverable` : '']} ${[selected ? `card--selected` : '']}">
      <img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" class="card-img" alt="Overlay">
      <div class="card-img-overlay">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text">Last updated 3 mins ago</p>
      </div>
    </div>
  </div>
</div>`
Overlay.args = {
  hoverable: false,
  selected: false,
  title: 'Card Title',
};