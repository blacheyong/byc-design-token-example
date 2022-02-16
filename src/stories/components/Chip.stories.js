export default {
    title: 'Components/Chip',
    argTypes: {
        variant: {
            options: ['primary', 'danger', 'info', 'success', 'warning'],
            control: 'select',
            description: 'Choose badge color',
            table: { 
                category: 'Controls',
                defaultValue: { summary: 'primary' } 
            },
        },
    }
}

export const Danger = ({ variant }) => `
<span class="chip chip--${variant}">Danger</span>`
Danger.args = {
    variant: 'danger',
};

export const Info = ({ variant }) => `
<span class="chip chip--${variant}">Info</span>`
Info.args = {
    variant: 'info',
};

export const Success = ({ variant }) => `
<span class="chip chip--${variant}">Success</span>`
Success.args = {
    variant: 'success',
};

export const Warning = ({ variant }) => `
<span class="chip chip--${variant}">Warning</span>`
Warning.args = {
    variant: 'warning',
};

export const ActionChip = ({ variant }) => `
<span class="chip chip--${variant} chip--action">
    Action chip
</span>`
ActionChip.args = {
    variant: 'primary',
};

export const DismissibleChip = ({ variant }) => `
<span class="chip chip--${variant} chip--dismissible">
    Dismissible chip
</span>`
DismissibleChip.args = {
    variant: 'primary',
};