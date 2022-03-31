import FilterNav from "./Nav";
import FilterSearch from "./Search";

const Filter = ({
    activeCategory,
    setActiveCategory
}) => {


    return (
        <div className="filter-row">
            <FilterNav 
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            <FilterSearch />
        </div>
    )
}

export default Filter