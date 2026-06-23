import { Link, useLocation } from 'react-router'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import phoneStoreLogo from '../assets/phone_store_logo.png'
import './Header.scss'

function Header({ breadcrumbs = [], showCart = false }) {
  return (
    <header className='header-container'>
      <div  className='nav-container'>
        <Link className='logo' to="/">
          <img src={phoneStoreLogo} alt="phone_store_logo"/>
        </Link>
        <nav className='breadcrumb-container'>
          {breadcrumbs.map((crumb, i) => (
            crumb.to 
              ? <Link key={i} to={crumb.to}>{crumb.label}</Link>
              : <span key={i}>{crumb.label}</span>
          ))}
        </nav>
      </div>

      <div className='cart-container'>
        {showCart && <><ShoppingCartIcon /><span>{1} items</span></>}
      </div>

    </header>
  )
}

export default Header