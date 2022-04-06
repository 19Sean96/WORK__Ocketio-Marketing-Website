import { BsSearch } from 'react-icons/bs'

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
      <BsSearch id="search-icon"/>
    </aside>
  );
};

export default FilterSearch;
