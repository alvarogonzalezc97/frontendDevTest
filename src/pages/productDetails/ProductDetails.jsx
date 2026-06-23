import Header from '../../components/Header'

function ProductDetails() {

  return (
    <div>
        <Header 
          breadcrumbs={[{ label: 'Home', to: '/' }]} 
          showCart = {true}
        />

      <div>
        BODY ProductDetails
      </div>
    </div>
  )
}

export default ProductDetails