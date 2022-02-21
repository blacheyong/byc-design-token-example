export default {
    title: 'Form/Checkbox',
    argTypes: {
        size: {
            options: ['md', 'lg'],
            control: 'radio',
            description: 'Choose checkbox size',
            table: { 
                defaultValue: { summary: 'md' } 
            },
        },
    }
}


export const Default = ({ size }) => `
<div class="form-check">
    <input class="custom-check custom-check--${size}" type="checkbox" name="examplecheckboxs" id="examplecheckboxs1" value="option1" checked>
    <label class="form-check-label" for="examplecheckboxs1">
        Default checkbox
    </label>
</div>
<div class="form-check">
    <input class="custom-check custom-check--${size}" type="checkbox" name="examplecheckboxs" id="examplecheckboxs2" value="option2">
    <label class="form-check-label" for="examplecheckboxs2">
        Second default checkbox
    </label>
</div>
<div class="form-check">
    <input class="custom-check custom-check--${size}" type="checkbox" name="examplecheckboxs" id="examplecheckboxs3" value="option3">
    <label class="form-check-label" for="examplecheckboxs3">
        Third default checkbox
    </label>
</div>`
Default.args = {
    size: 'md',
};

export const Large = ({ size }) => `
<div class="form-check">
    <input class="custom-check custom-check--${size}" type="checkbox" name="examplecheckboxs" id="examplecheckboxs1" value="option1" checked>
    <label class="form-check-label" for="examplecheckboxs1">
        Large checkbox
    </label>
</div>
<div class="form-check">
    <input class="custom-check custom-check--${size}" type="checkbox" name="examplecheckboxs" id="examplecheckboxs2" value="option2">
    <label class="form-check-label" for="examplecheckboxs2">
        Second large checkbox
    </label>
</div>
<div class="form-check">
    <input class="custom-check custom-check--${size}" type="checkbox" name="examplecheckboxs" id="examplecheckboxs3" value="option3">
    <label class="form-check-label" for="examplecheckboxs3">
        Third large checkbox
    </label>
</div>`
Large.args = {
    size: 'lg',
};

export const Disabled = ({ size }) => `
<div class="form-check">
    <input class="custom-check custom-check--${size}" type="checkbox" name="examplecheckboxs" id="examplecheckboxs1" value="option1" checked disabled>
    <label class="form-check-label" for="examplecheckboxs1">
        Disabled checkbox
    </label>
</div>
<div class="form-check">
    <input class="custom-check custom-check--${size}" type="checkbox" name="examplecheckboxs" id="examplecheckboxs2" value="option2" disabled>
    <label class="form-check-label" for="examplecheckboxs2">
        Second disabled checkbox
    </label>
</div>
<div class="form-check">
    <input class="custom-check custom-check--${size}" type="checkbox" name="examplecheckboxs" id="examplecheckboxs3" value="option3" disabled>
    <label class="form-check-label" for="examplecheckboxs3">
        Third disabled checkbox
    </label>
</div>`
Disabled.args = {
    size: 'md',
};

export const Indeterminate = ({ size }) => `
<div class="form-check">
    <input class="custom-check custom-check--${size}" type="checkbox" name="examplecheckboxs" id="exampleIndeterminateCheckbox" value="option1">
    <label class="form-check-label" for="exampleIndeterminateCheckbox">
        Indeterminate checkbox
    </label>
</div>
<script>document.getElementById("exampleIndeterminateCheckbox").indeterminate = true</script>`
Indeterminate.args = {
    size: 'md',
};