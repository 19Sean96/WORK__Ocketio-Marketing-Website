import { AiOutlineSearch } from 'react-icons/ai'
import Search from './Search.styled'
const FilterSearch = ({ searchTerm, handleSearchUpdate, isSticky }) => {
  return (
    <Search className="search-filter" isSticky={isSticky}>
      <input
        type="text"
        className="search-filter--input"
        id="blogSearch"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchUpdate}
      />
      <AiOutlineSearch id="search-icon"/>
    </Search>
  );
};

export default FilterSearch;
