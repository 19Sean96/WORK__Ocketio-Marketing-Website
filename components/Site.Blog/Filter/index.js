import FilterNav from "./Nav";
import FilterSearch from "./Search";

const Filter = ({
  activeCategory,
  setActiveCategory,
  searchTerm,
  handleSearchUpdate,
}) => {
  return (
    <div className="filter-row">
      <FilterNav
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <FilterSearch
        searchTerm={searchTerm}
        handleSearchUpdate={handleSearchUpdate}
      />
    </div>
  );
};

export {
    Filter,
    FilterNav,
    FilterSearch
};
