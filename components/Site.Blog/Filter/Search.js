import { BsSearch } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
const FilterSearch = ({ searchTerm, handleSearchUpdate }) => {
  return (
    <aside className="search-filter">
      <input
        type="text"
        className="search-filter--input"
        id="blogSearch"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchUpdate}
      />
      <AiOutlineSearch id="search-icon"/>
    </aside>
  );
};

export default FilterSearch;
