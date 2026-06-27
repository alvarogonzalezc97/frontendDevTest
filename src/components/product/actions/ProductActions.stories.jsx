import ProductActions from './ProductActions'

export default {
  title: 'Components/ProductActions',
  component: ProductActions,
  tags: ['autodocs'],
  args: {
    productId: '1',
    colors: [
      { code: 'red', name: 'Red' },
      { code: 'blue', name: 'Blue' },
    ],
    storages: [
      { code: '64', name: '64GB' },
      { code: '128', name: '128GB' },
    ]
  },
  argTypes: {
    productId: {
      control: 'text',
      description: 'Unique identifier of the product used when adding to cart',
    },

    colors: {
      control: 'object',
      description: 'List of available colors',
    },

    storages: {
      control: 'object',
      description: 'List of available storage options',
    },

    className: {
      control: 'text',
      description: 'Optional CSS class to customize the wrapper styling',
    },
  },
}
export const Actions = {
  render: (args) =>
    <ProductActions {...args} />
}

export const DisabledState = {
  args: {
    colors: [],
    storages: [],
  },
  render: (args) =>
    <ProductActions {...args} />
}