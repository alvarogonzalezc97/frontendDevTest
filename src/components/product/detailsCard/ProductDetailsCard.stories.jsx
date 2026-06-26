import { MemoryRouter } from 'react-router'
import ProductDetailsCard from './ProductDetailsCard'

export default {
  title: 'Components/ProductDetailsCard',
  component: ProductDetailsCard,
  tags: ['autodocs'],
  args: {
    fields: [
      { label: 'Brand', value: 'Nike' },
      { label: 'Model', value: 'Air Max 90' },
      { label: 'Price', value: '129.99€' },
      { label: 'Sizes', value: ['40', '41', '42'] },
    ],
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes for styling',
    },
    fields: {
      control: 'object',
      description: 'Array of fields displayed in the details card',
    },
  },
}

export const DetailCard = {
  render: (args) => (
    <div style={{ maxWidth: 500 }}>
      <ProductDetailsCard {...args} />
    </div>
  ),
}

export const DetailCardWithEmptyAndArrayValues = {
  render: (args) => (
    <div style={{ maxWidth: 500 }}>
      <ProductDetailsCard {...args} />
    </div>
  ),
  args: {
    fields: [
      { label: 'Brand', value: 'Adidas' },
      { label: 'Model', value: 'Ultraboost' },
      { label: 'Sizes', value: ['38', '', null, '39', '40'] },
      { label: 'Description', value: '' },
      { label: 'Notes', value: null },
    ],
  },
}