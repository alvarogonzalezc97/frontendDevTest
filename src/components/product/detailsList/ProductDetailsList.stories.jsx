import { MemoryRouter } from 'react-router'
import ProductDetailsList from './ProductDetailsList'

export default {
  title: 'Components/ProductDetailsList',
  component: ProductDetailsList,
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
      description: 'Array of fields displayed in the details list',
    },
  },
}

export const DetailList = {
  render: (args) => (
    <div style={{ maxWidth: 500 }}>
      <ProductDetailsList {...args} />
    </div>
  ),
}

export const DetailListWithEmptyAndArrayValues = {
  args: {
    fields: [
      { label: 'Brand', value: 'Adidas' },
      { label: 'Model', value: 'Ultraboost' },
      { label: 'Sizes', value: ['38', '', null, '39', '40'] },
      { label: 'Description', value: '' },
      { label: 'Notes', value: null },
    ],
  },

  render: (args) => (
    <div style={{ maxWidth: 500 }}>
      <ProductDetailsList {...args} />
    </div>
  )
}