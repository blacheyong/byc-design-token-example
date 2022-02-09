export default {
    title: 'Form/Input',
}

export const Input = ({ placeholder }) => `
<input class="custom-input" placeholder="${placeholder}" />`
Input.args = {
  placeholder: 'Placeholder',
};