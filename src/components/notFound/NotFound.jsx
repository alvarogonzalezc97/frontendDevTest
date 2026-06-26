import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import './NotFound.scss'

function NotFound({ message, className = '' }) {
  return (
    <div className={`${className} not-found-container`} data-testid="not-found-container">
      <ExclamationTriangleIcon className="not-found-icon" data-testid="not-found-icon" />
      <p className="not-found-message" data-testid="not-found-message">
        {message}
      </p>
    </div>
  )
}

export default NotFound
