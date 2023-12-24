import { FaSearch } from 'react-icons/fa'
import './SearchList.css'

export default function SearchList({ data, setSearchQuery }) {
  return (
      <>
          <div className="item_container">
            {data.map((value) => (
                  <p className='item' key={value} onClick={() => setSearchQuery(value)}><FaSearch className='search-icon' />{value}</p>
            ))}
          </div>
    </>
  )
}
