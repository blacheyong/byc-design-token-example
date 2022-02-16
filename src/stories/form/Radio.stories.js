export default {
    title: 'Form/Radio',
    argTypes: {
        size: {
            options: ['md', 'lg'],
            control: 'radio',
            description: 'Choose radio size',
            table: { 
                defaultValue: { summary: 'md' } 
            },
        },
    }
}

export const Default = ({ size }) => `
<div class="form-check">
    <input class="custom-check custom-check--${size}" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
    <label class="form-check-label" for="exampleRadios1">
        Default radio
    </label>
</div>
<div class="form-check">
    <input class="custom-check custom-check--${size}" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
    <label class="form-check-label" for="exampleRadios2">
        Second default radio
    </label>
</div>
<div class="form-check">
    <input class="custom-check custom-check--${size}" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
    <label class="form-check-label" for="exampleRadios3">
        Third default radio
    </label>
</div>`
Default.args = {
    size: 'md',
};

export const Large = ({ size }) => `
<div class="form-check">
    <input class="custom-check custom-check--${size}" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
    <label class="form-check-label" for="exampleRadios1">
        Large radio
    </label>
</div>
<div class="form-check">
    <input class="custom-check custom-check--${size}" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
    <label class="form-check-label" for="exampleRadios2">
        Second large radio
    </label>
</div>
<div class="form-check">
    <input class="custom-check custom-check--${size}" type="radio" name="exampleRadios" id="exampleRadios3" value="option3">
    <label class="form-check-label" for="exampleRadios3">
        Third large radio
    </label>
</div>`
Large.args = {
    size: 'lg',
};

export const Disabled = ({ size }) => `
<div class="form-check">
    <input class="custom-check custom-check--${size}" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked disabled>
    <label class="form-check-label" for="exampleRadios1">
        Disabled radio
    </label>
</div>
<div class="form-check">
    <input class="custom-check custom-check--${size}" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" disabled>
    <label class="form-check-label" for="exampleRadios2">
        Second disabled radio
    </label>
</div>
<div class="form-check">
    <input class="custom-check custom-check--${size}" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
    <label class="form-check-label" for="exampleRadios3">
        Third disabled radio
    </label>
</div>`
Disabled.args = {
    size: 'md',
};