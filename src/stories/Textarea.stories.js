export default {
    title: 'Example/Textarea',
}

export const Textarea = ({ cols, placeholder, rows }) => `
<textarea class="custom-input" cols="${cols}" rows="${rows}" placeholder="${placeholder}"></textarea>`
Textarea.args = {
    cols: 50,
    placeholder: 'Placeholder',
    rows: 10,
};