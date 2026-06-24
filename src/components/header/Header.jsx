import { Link, useLocation } from 'react-router'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import phoneStoreLogo from '../../assets/phone_store_logo.png'
import './Header.scss'

function Header({ breadcrumbs = [], cartItems = 0 }) {
  return (
    <header className='header-container'>
      <div className='nav-container' data-testid='nav-container'>
        <Link className='logo' to="/" data-testid='logo'>
          <img src={phoneStoreLogo} alt="phone_store_logo"/>
        </Link>
        
        <nav className='breadcrumb-container' data-testid='breadcrumb-container'>
          {breadcrumbs.map((crumb, index) => (
            crumb.to 
              ? <Link key={index} to={crumb.to}>{crumb.label}</Link>
              : <span key={index}>{crumb.label}</span>
          ))}
        </nav>
      </div>

      <div className='cart-container' data-testid='cart-container'>
        <ShoppingCartIcon />
        <span data-testid='cart-count'>
          {cartItems}
        </span>
      </div>

    </header>
  )
}

export default Header