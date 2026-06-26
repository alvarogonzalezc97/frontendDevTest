import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import './NotFound.scss'

function NotFound() {
  const { t } = useTranslation()

  return (
    <div className='notFound-page' data-testid='notFound-page'>
      <MagnifyingGlassIcon className='notFound-page-icon' />
      <h1 className='notFound-page-title'>{t('notFound.title')}</h1>
      <p className='notFound-page-message'>{t('notFound.message')}</p>
      <Link to='/' className='notFound-page-button' data-testid='notFound-page-button'>
        {t('notFound.button')}
      </Link>
    </div>
  )
}

export default NotFound