export default {
    title: 'Components/Badge',
    argTypes: {
        text: {
            control: 'text',
            description: 'Slot content',
            table: {
                category: 'Controls',
            },
        },
        variant: {
            options: ['danger', 'info', 'success', 'warning'],
            control: 'select',
            description: 'Choose badge color',
            table: { 
                category: 'Controls',
                defaultValue: { summary: 'danger' } 
            },
        },
        borderRadius: {
            description: '$badges-border-radius',
            table: {
                category: 'Tokens',
            }
        },
        fontFamily: {
            description: '$badges-text-font-family',
            table: {
                category: 'Tokens',
            }
        },
        fontSize: {
            description: '$badges-text-font-size',
            table: {
                category: 'Tokens',
            }
        },
        fontWeight: {
            description: '$badges-text-font-weight',
            table: {
                category: 'Tokens',
            }
        },
        horizontalPadding: {
            description: '$badges-padding-x',
            table: {
                category: 'Tokens',
            }
        },
        letterSpacing: {
            description: '$badges-text-letter-spacing',
            table: {
                category: 'Tokens',
            }
        },
        lineHeight: {
            description: '$badges-text-line-height',
            table: {
                category: 'Tokens',
            }
        },
        paragraphSpacing: {
            description: '$badges-text-paragraph-spacing',
            table: {
                category: 'Tokens',
            }
        },
        textDecoration: {
            description: '$badges-text-text-decoration',
            table: {
                category: 'Tokens',
            }
        },
        textTransform: {
            description: '$badges-text-text-case',
            table: {
                category: 'Tokens',
            }
        },
        VerticalPadding: {
            description: '$badges-padding-y',
            table: {
                category: 'Tokens',
            }
        },
      }
}

export const Danger = ({ text, variant }) => `
<span class="badge badge--${variant}">${text}</span>`
Danger.args = {
    text: '1',
    variant: 'danger',
    borderRadius: null,
    fontFamily: null,
    fontSize: null,
    fontWeight: null,
    horizontalPadding: null,
    letterSpacing: null,
    lineHeight: null,
    paragraphSpacing: null,
    textDecoration: null,
    textTransform: null,
    VerticalPadding: null,
};

export const Info = ({ text, variant }) => `
<span class="badge badge--${variant}">${text}</span>`
Info.args = {
    text: '2',
    variant: 'info',
};

export const Success = ({ text, variant }) => `
<span class="badge badge--${variant}">${text}</span>`
Success.args = {
    text: '3',
    variant: 'success',
};

export const Warning = ({ text, variant }) => `
<span class="badge badge--${variant}">${text}</span>`
Warning.args = {
    text: '4',
    variant: 'warning',
};