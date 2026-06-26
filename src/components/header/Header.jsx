import { Link, useLocation } from 'react-router'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import phoneStoreLogo from '../../assets/phone_store_logo.webp'
import { useTranslation } from 'react-i18next'
import { ROUTES } from '../../router/routes'
import './Header.scss'

function Header({ className = "", breadcrumbs = [], cartItems = 0 }) {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <header className={`${className} header-container`}>
      <div className='logo-container' data-testid='nav-container'>
        <Link className='logo' to={ROUTES.HOME} data-testid='logo'>
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

      <div className='actions-container' data-testid='actions-container'>
        <div className='language-switcher' data-testid='language-switcher'>
          <button
            className={`language-switcher-english ${i18n.language === 'en' ? 'active' : ''}`}
            data-testid='language-switcher-english'
            onClick={() => changeLanguage('en')}
          >
            {t('header.language.english')}
          </button>

          <button
            className={`language-switcher-spanish ${i18n.language === 'es' ? 'active' : ''}`}
            data-testid='language-switcher-spanish'
            onClick={() => changeLanguage('es')}
          >
            {t('header.language.spanish')}
          </button>
        </div>

        <div className='cart-container' data-testid='cart-container'>
          <ShoppingCartIcon />
          <span className='cart-count' data-testid='cart-count'>
            {cartItems}
          </span>
        </div>
      </div>

    </header>
  )
}

export default Header