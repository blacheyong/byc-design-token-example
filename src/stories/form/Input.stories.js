export default {
    title: 'Form/Input',
    argTypes: {
      placeholder: {
        control: 'text',
        description: 'The placeholder attribute specifies a short hint that describes the expected value of an input field.',
      },
    }
}

export const Input = ({ placeholder }) => `
<input class="custom-input" placeholder="${placeholder}" />`
Input.args = {
  placeholder: 'Placeholder',
};