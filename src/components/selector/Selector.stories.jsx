import { useState } from 'react';
import Selector from './Selector';

export default {
    title: 'Components/Selector',
    component: Selector,
    tags: ['autodocs'],
    args: {
        label: 'Selector',
        options: [
            { value: 'A', name: 'Option A' },
            { value: 'B', name: 'Option B' },
        ],
        value: 'A',
    },
    argTypes: {
        className: {
            control: 'text',
            description: 'Additional CSS classes to customise the selector’s styler',
        },
        label: {
            control: 'text',
            description: 'Label displayed above the selector',
        },
        value: {
            control: 'text',
            description: 'Currently selected value',
        },
        options: {
            control: 'object',
            description: 'List of options available in the selector',
        },
        onChange: {
            action: 'changed',
            description: 'Callback that is executed when the user selects an option',
        },
    },
};

export const Select = {
    render: (args) => {
        const [value, setValue] = useState(args.value);

        return (
            <Selector
                {...args}
                value={value}
                onChange={setValue}
            />
        );
    },
};

export const SingleOption = {
    args: {
        label: 'Solo una opción',
        options: [{ value: 'A', name: 'Only option' }],
        value: 'A',
    },
};

export const Empty = {
    args: {
        label: 'Sin opciones',
        options: [],
        value: '',
    },
};