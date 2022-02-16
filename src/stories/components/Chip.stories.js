export default {
    title: 'Components/Chip',
    argTypes: {
        text: {
            control: 'text',
            description: 'Slot content',
        },
        variant: {
            options: ['primary', 'danger', 'info', 'success', 'warning'],
            control: 'select',
            description: 'Choose badge color',
            table: { 
                defaultValue: { summary: 'primary' } 
            },
        },
    }
}

export const Danger = ({ text, variant }) => `
<span class="chip chip--${variant}">${text}</span>`
Danger.args = {
    text: 'Danger',
    variant: 'danger',
};

export const Info = ({ text, variant }) => `
<span class="chip chip--${variant}">${text}</span>`
Info.args = {
    text: 'Info',
    variant: 'info',
};

export const Success = ({ text, variant }) => `
<span class="chip chip--${variant}">${text}</span>`
Success.args = {
    text: 'Success',
    variant: 'success',
};

export const Warning = ({ text, variant }) => `
<span class="chip chip--${variant}">${text}</span>`
Warning.args = {
    text: 'Warning',
    variant: 'warning',
};

export const ActionChip = ({ text, variant }) => `
<span class="chip chip--${variant} chip--action">
    ${text}
</span>`
ActionChip.args = {
    text: 'Action chip',
    variant: 'primary',
};

export const DismissibleChip = ({ text, variant }) => `
<span class="chip chip--${variant} chip--dismissible">
    ${text}
</span>`
DismissibleChip.args = {
    text: 'Dismissible chip',
    variant: 'primary',
};