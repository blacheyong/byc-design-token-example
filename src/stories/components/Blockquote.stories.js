export default {
    title: 'Components/Blockquote',
    argTypes: {
        textBlockquote: {
            control: 'text',
            description: 'Slot content',
        },
        textFooter: {
            control: 'text',
            description: 'Slot content',
        },
    }
}

export const Blockquote = ({ textBlockquote, textFooter }) => `
<figure>
    <blockquote class="blockquote">
        <p>${textBlockquote}</p>
    </blockquote>
    <figcaption class="blockquote-footer">
        ${textFooter}
    </figcaption>
</figure>`
Blockquote.args = {
    textBlockquote: 'A well-known quote, contained in a blockquote element.',
    textFooter: 'Someone famous in <cite title="Source Title">Source Title</cite>',
};