  import Header from '../../components/Header'

  function ProductList() {

    return (
      <div>
          <Header 
            breadcrumbs={[{ label: 'Home', to: '/' }]} 
            showCart = {true}
          />

        <div>
          BODY ProductList
        </div>
      </div>
    )
  }

  export default ProductList