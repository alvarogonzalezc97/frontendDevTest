import './Loader.scss'

function Loader({ message, className='' }) {
  return (
    <div className={`${className} loader-container`} data-testid="loader">
      <div className="loader-spinner" />
      <p className="loader-message">{message}</p>
    </div>
  )
}

export default Loader