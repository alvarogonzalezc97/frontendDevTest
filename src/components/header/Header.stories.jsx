import { MemoryRouter } from 'react-router'
import { useTranslation } from 'react-i18next'
import Header from './Header'

export default {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
    cartItems: 3,
    breadcrumbs: [
      { label: 'Home', to: '/' },
      { label: 'Category', to: '/category' },
      { label: 'Subcategory', to: '/subcategory' },
      { label: 'Product' },
    ]
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Optional CSS class for styling the header',
    },
    cartItems: {
      control: 'number',
      description: 'Number of items in the cart',
    },

    breadcrumbs: {
      control: 'object',
      description:
        'Breadcrumb navigation items with label and optional route',
    },
  },
}

export const HeaderDefault = {
  render: (args) => {
    const { t } = useTranslation()
    return (
      <MemoryRouter>
        <Header
          {...args}
          breadcrumbs={[
            { label: t('productDetails.breadcrumb.productList'), to: '/' },
            { label: t('productDetails.breadcrumb.productDetail') }
          ]}
        />
      </MemoryRouter>
    )
  }
}