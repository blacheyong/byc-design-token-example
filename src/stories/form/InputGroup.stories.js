export default {
    title: 'Form/Input Group',
    argTypes: {
        placeholder: {
          control: 'text',
          description: 'The placeholder attribute specifies a short hint that describes the expected value of an input field.',
        },
    }
}

export const InputGroup = ({ placeholder }) => `
<div class="input-group">
    <input type="text" class="custom-input" placeholder="${placeholder}" aria-label="Username" aria-describedby="addon-wrapping">
    <span class="input-group__icon">
        @
    </span>
</div>`
InputGroup.args = {
    placeholder: 'Placeholder',
  };