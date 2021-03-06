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
<span class="chip chip--${variant}">
    <span class="chip__text">${text}</span>
</span>`
Danger.args = {
    text: 'Danger',
    variant: 'danger',
};

export const Info = ({ text, variant }) => `
<span class="chip chip--${variant}">
    <span class="chip__text">${text}</span>
</span>`
Info.args = {
    text: 'Info',
    variant: 'info',
};

export const Success = ({ text, variant }) => `
<span class="chip chip--${variant}">
    <span class="chip__text">${text}</span>
</span>`
Success.args = {
    text: 'Success',
    variant: 'success',
};

export const Warning = ({ text, variant }) => `
<span class="chip chip--${variant}">
    <span class="chip__text">${text}</span>    
</span>`
Warning.args = {
    text: 'Warning',
    variant: 'warning',
};

export const ActionChip = ({ text, variant }) => `
<a href="javascript:void(0)" class="chip chip--${variant} chip--action">
    <span class="chip__text">${text}</span>
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.46967 9.53033C2.17678 9.23744 2.17678 8.76256 2.46967 8.46967L5.93934 5L2.46967 1.53033C2.17678 1.23744 2.17678 0.762563 2.46967 0.46967C2.76256 0.176777 3.23744 0.176777 3.53033 0.46967L7.53033 4.46967C7.82322 4.76256 7.82322 5.23744 7.53033 5.53033L3.53033 9.53033C3.23744 9.82322 2.76256 9.82322 2.46967 9.53033Z" fill="#003778"/>
    </svg>
</a>`
ActionChip.args = {
    text: 'Action chip',
    variant: 'primary',
};

export const DismissibleChip = ({ text, variant }) => `
<span class="chip chip--${variant} chip--dismissible">
    <span class="chip__text">${text}</span>
    <button type="button" class="close-btn close-btn--sm"></button>
</span>`
DismissibleChip.args = {
    text: 'Dismissible chip',
    variant: 'primary',
};

export const DisabledDismissibleChip = ({ text, variant }) => `
<span class="chip chip--${variant} chip--dismissible disabled">
    <span class="chip__text">${text}</span>
    <button type="button" class="close-btn close-btn--sm disabled">
    </button>
</span>`
DisabledDismissibleChip.args = {
    text: 'Disabled chip',
    variant: 'primary',
};