import Loader from './Loader'

export default {
    title: 'Components/Loader',
    component: Loader,
    tags: ['autodocs'],
    argTypes: {
        message: {
            control: 'text',
            description: 'Message displayed below the spinner',
        },
        className: {
            control: 'text',
            description: 'Optional CSS class for custom styling',
        },
    },
}

export const loaderMessage = {
    args: {
        message: 'Loading products...',
    },
    render: (args) => 
        <Loader {...args} />,
}

export const loaderWithoutMessage = {
    args: {},
    render: (args) => 
        <Loader {...args} 
    />,
}