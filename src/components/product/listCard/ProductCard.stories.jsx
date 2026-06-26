import { MemoryRouter } from 'react-router'
import ProductCard from './ProductCard';
import phoneStoreLogo from '../../../assets/phone_store_logo.webp'

export default {
    title: 'Components/ProductCard',
    component: ProductCard,
    tags: ['autodocs'],
    args: {
        product: {
            id: '1',
            imgUrl: phoneStoreLogo,
            brand: 'Nike',
            model: 'Air Max 90',
            price: 129.99,
        },
    },
    argTypes: {
        className: {
            control: 'text',
            description: 'Additional CSS classes to customise the selector’s styler',
        },
        product: {
            control: 'object',
            description: 'Product data displayed in the card',
        }
    }
};

export const ProductCardList = {
  render: (args) => {
    return (
      <MemoryRouter>
        <div style={{ maxWidth: 500 }}>
          <ProductCard {...args} />
        </div>
      </MemoryRouter>
    )
  },
}