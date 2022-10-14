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
			<FilterSearch
				searchTerm={searchTerm}
				handleSearchUpdate={handleSearchUpdate}
			/>
			<FilterNav
				activeCategory={activeCategory}
				setActiveCategory={setActiveCategory}
			/>
		</div>
	);
};

export { Filter, FilterNav, FilterSearch };
