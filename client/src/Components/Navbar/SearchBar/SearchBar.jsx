import React, { useState } from 'react';
import './SearchBar.css';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaMicrophone } from 'react-icons/fa';
import SearchList from './SearchList';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [search, setSearchList] = useState(false);
  const data = useSelector((state) =>
    state.video?.data
      ?.filter((d) => typeof d === 'string')
      .filter((d) => d.toUpperCase().includes(searchQuery.toUpperCase()))
  );

  const handleSearch = () => {
    setSearchList(true);
  };

  return (
    <>
      <div className="Search_container">
        <div>
          <input
            type="text"
            className="SearchInput"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          {searchQuery && search && <SearchList data={data} setSearchQuery={setSearchQuery} />}
        </div>
        <div className="search_icon_container">
          <Link to={`/search/${searchQuery}`} className="search_icon" onClick={handleSearch}>
            <FaMagnifyingGlass style={{color:"white"}} />
          </Link>
        </div>
        <div className="mic-container">
          <FaMicrophone />
        </div>
      </div>
    </>
  );
}
