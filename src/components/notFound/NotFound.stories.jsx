import NotFound from './NotFound'

export default {
    title: 'Components/NotFound',
    component: NotFound,
    tags: ['autodocs'],
    args: {
        message: 'Page not found'
    },
    argTypes: {
        message: {
            control: 'text',
            description: 'Message displayed in the component',
        },
        className: {
            control: 'text',
            description: 'Optional CSS class for custom styling',
        },
    },
}

export const notFound = {
    args: {
        message:
            'The resource you are looking for does not exist or may have been removed',
    },
    render: (args) => <NotFound {...args} />,
}