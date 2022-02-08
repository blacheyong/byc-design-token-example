export default {
    title: 'Example/Input',
}

export const Input = ({ placeholder }) => `
<input class="custom-input" placeholder="${placeholder}" />`
Input.args = {
  placeholder: 'Placeholder',
};