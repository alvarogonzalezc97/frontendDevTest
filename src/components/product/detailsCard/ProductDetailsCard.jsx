import './ProductDetailsCard.scss'

// Refactorizar esto
function ProductDetailsCard({ fields }) {
    function cleanedFields(fields) {
        return fields.map((field) => {
            if (Array.isArray(field.value)) {
                return {
                    ...field,
                    value: cleanArray(field.value),
                };
            }

            const isEmpty =
                field.value === null ||
                field.value === undefined ||
                (typeof field.value === 'string' && field.value.trim() === '');

            return isEmpty ? null : field;
        }).filter(Boolean);
    }

    function cleanArray(array) {
        return array.filter(
            (value) =>
                value !== null &&
                value !== undefined &&
                !(typeof value === 'string' && value.trim() === '')
        );
    }

    return (
        <ul className='product-details-card' data-testid='product-details-card'>
            {cleanedFields(fields).map((field) => (
                <li key={field.label}>
                    <span className='product-details-card-label'>{field.label}:</span>

                    {Array.isArray(field.value) ? (
                        field.value.length > 0 && (
                            <ul className='product-details-array-info'>
                                {field.value.map((value, index) => (
                                    <li key={index}>{value}</li>
                                ))}
                            </ul>
                        )
                    ) : (
                        field.value
                    )}
                </li>
            ))}
        </ul>
    )
}

export default ProductDetailsCard