import { Link, useLocation } from 'react-router'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import phoneStoreLogo from '../../assets/phone_store_logo.png'
import './Header.scss'

function Header({ className = "", breadcrumbs = [], cartItems = 0 }) {
  return (
    <header className={`${className} header-container`}>
      <div className='logo-container' data-testid='nav-container'>
        <Link className='logo' to="/" data-testid='logo'>
          <img src={phoneStoreLogo} alt="phone_store_logo" />
        </Link>
      </div>

      <nav className='breadcrumb-container' data-testid='breadcrumb-container'>
        {breadcrumbs.map((crumb, index) => (
          crumb.to
            ? <Link
              key={index}
              className='breadcrumb breadcrumb-link'
              to={crumb.to}>{crumb.label}
            </Link>
            : <span
              key={index}
              className='breadcrumb breadcrumb-span'>
              {crumb.label}
            </span>
        ))}
      </nav>

      <div className='cart-container' data-testid='cart-container'>
        <ShoppingCartIcon />
        <span className='cart-count' data-testid='cart-count'>
          {cartItems}
        </span>
      </div>

    </header>
  )
}

export default Header