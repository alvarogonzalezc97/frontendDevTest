import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import './SearchBar.scss'

function SearchBar({ className = "", placeholder, onSearch }) {
  return (
    <label className={`${className} search-bar-container`} data-testid='search-bar-container'>
      <MagnifyingGlassIcon className="search-bar-icon" data-testid='search-bar-icon' />
      <input
        id="search-bar"
        className="search-bar"
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
        data-testid='search-bar'
      />
    </label >
  )
}

export default SearchBar