import { addProductToCart } from '../../../http/product.api'
import Selector from '../../../components/selector/Selector'
import { useCart } from '../../../hooks/useCart'
import { useState, useEffect } from 'react'
import './ProductActions.scss';

function ProductActions({ productId, colors, storages }) {
    const [selectedColor, setSelectedColor] = useState(colors.length >= 1 ? colors[0].code : undefined);
    const [selectedStorage, setSelectedStorage] = useState(storages.length >= 1 ? storages[0].code : undefined);

    const { addItem } = useCart()
    const isDisabled = !selectedColor || !selectedStorage;

    const handleAddToCart = async () => {
        const responseCount = await addProductToCart({
            id: productId,
            colorCode: selectedColor,
            storageCode: selectedStorage,
        });

        addItem({
            id: productId,
            colorCode: selectedColor,
            storageCode: selectedStorage,
            count: responseCount?.count ?? 1
        });
    };

    return (
        <div className="product-actions-container" data-testid='actions-container'>
            <Selector
                className="selector-color"
                label="Color"
                options={colors}
                value={selectedColor}
                onChange={setSelectedColor}
            />

            <Selector
                className="selector-storage"
                label="Storage"
                options={storages}
                value={selectedStorage}
                onChange={setSelectedStorage}
            />

            <button
                className="product-actions-add-button"
                onClick={handleAddToCart}
                disabled={isDisabled}
                data-testid='product-actions-add-button'
            >
                Add
            </button>
        </div>
    );
}

export default ProductActions;