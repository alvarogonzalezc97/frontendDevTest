import { addProductToCart } from '../../../api/product.api'
import Selector from '../../../components/selector/Selector'
import { useCart } from '../../../hooks/useCart'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './ProductActions.scss'

function ProductActions({ productId, colors, storages, className = '' }) {
  const { t } = useTranslation()
  const [selectedColor, setSelectedColor] = useState(
    colors.length >= 1 ? colors[0].code : undefined
  )
  const [selectedStorage, setSelectedStorage] = useState(
    storages.length >= 1 ? storages[0].code : undefined
  )

  const { addItem } = useCart()
  const isDisabled = !selectedColor || !selectedStorage

  const handleAddToCart = async () => {
    const responseCount = await addProductToCart({
      id: productId,
      colorCode: selectedColor,
      storageCode: selectedStorage,
    })

    addItem({
      id: productId,
      colorCode: selectedColor,
      storageCode: selectedStorage,
      count: responseCount?.count ?? 1,
    })
  }

  return (
    <div className={`${className} product-actions-container`} data-testid="actions-container">
      <Selector
        className="selector-color"
        label={t('productActions.color')}
        options={colors}
        value={selectedColor}
        onChange={setSelectedColor}
      />

      <Selector
        className="selector-storage"
        label={t('productActions.storage')}
        options={storages}
        value={selectedStorage}
        onChange={setSelectedStorage}
      />

      <button
        className="product-actions-add-button"
        onClick={handleAddToCart}
        disabled={isDisabled}
        data-testid="product-actions-add-button"
      >
        {t('productActions.addButton')}
      </button>
    </div>
  )
}

export default ProductActions
