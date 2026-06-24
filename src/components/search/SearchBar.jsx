import './SearchBar.scss'

function SearchBar({ onSearch }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search by brand or model..."
      onChange={(e) => onSearch(e.target.value)}
    />
  )
}

export default SearchBar