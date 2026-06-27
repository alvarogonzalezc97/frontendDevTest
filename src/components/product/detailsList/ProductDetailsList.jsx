import './ProductDetailsList.scss'

function ProductDetailsList({ fields, className = '' }) {
  function cleanedFields(fields) {
    return fields.map(cleanField).filter(Boolean)
  }
  
  function cleanField(field) {
    if (Array.isArray(field.value)) {
      const cleaned = cleanArray(field.value)
      return cleaned.length > 0 ? { ...field, value: cleaned } : null
    }
    return isEmpty(field.value) ? null : field
  }

  function isEmpty(value) {
    return (
      value === null || value === undefined || (typeof value === 'string' && value.trim() === '')
    )
  }

  function cleanArray(array) {
    return array.filter((value) => !isEmpty(value))
  }

  return (
    <ul className={`${className} product-details-list`} data-testid="product-details-list">
      {cleanedFields(fields).map((field) => (
        <li key={field.label}>
          <span className="product-details-list-label">{field.label}:</span>

          {Array.isArray(field.value)
            ? field.value.length > 0 && (
                <ul className="product-details-array-info">
                  {field.value.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              )
            : field.value}
        </li>
      ))}
    </ul>
  )
}

export default ProductDetailsList
