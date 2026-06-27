import { Link } from 'react-router'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import phoneStoreLogo from '../../assets/phone_store_logo.webp'
import { ROUTES } from '../../router/routes'
import { setLocalStorage } from '../../storage/localStorage'
import './Header.scss'

function Header({ className = '', breadcrumbs = [], cartItems = 0 }) {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    setLocalStorage('i18n', lang)
  }

  return (
    <header className={`${className} header-container`}>
      <div className="nav-container" data-testid="nav-container">
        <Link className="logo" to={ROUTES.HOME} data-testid="logo">
          <img src={phoneStoreLogo} alt="phone_store_logo" />
        </Link>
        <nav className="breadcrumb-container" data-testid="breadcrumb-container">
          {breadcrumbs.map((crumb, index) =>
            <span key={index} className="breadcrumb-item">
              {index > 0 && <span className="breadcrumb-separator">›</span>}
              {crumb.to ? (
                <Link className="breadcrumb breadcrumb-link" to={crumb.to}>
                  {crumb.label}
                </Link>
              ) : (
                <span className="breadcrumb breadcrumb-span">
                  {crumb.label}
                </span>
              )}
            </span>
          )}
        </nav>
      </div>

      <div className="actions-container" data-testid="actions-container">
        <div className="language-switcher" data-testid="language-switcher">
          <button
            className={`language-switcher-english ${i18n.language === 'en' ? 'active' : ''}`}
            data-testid="language-switcher-english"
            onClick={() => changeLanguage('en')}
          >
            {t('header.language.english')}
          </button>

          <button
            className={`language-switcher-spanish ${i18n.language === 'es' ? 'active' : ''}`}
            data-testid="language-switcher-spanish"
            onClick={() => changeLanguage('es')}
          >
            {t('header.language.spanish')}
          </button>
        </div>
        
        <div className="language-switcher-mobile">
          <GlobeAltIcon className="language-switcher-mobile-icon" />
          <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
        </div>

        <div className="cart-container" data-testid="cart-container">
          <ShoppingCartIcon />
          <span className="cart-count" data-testid="cart-count">
            {cartItems}
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
