const FilterNav = ({ activeCategory, setActiveCategory }) => {
  return (
    <ul className="nav-filter">
      <li className="nav-filter__item">
        <button
          className={`filter-toggle ${activeCategory === "all" ? "filter-toggle-active" : ""}`}
          onClick={(e) => setActiveCategory("all")}
        >
          All
        </button>
      </li>
      <li className="nav-filter__item">
        <button
          className={`filter-toggle ${activeCategory === "tutorials" ? "filter-toggle-active" : ""}`}
          onClick={(e) => setActiveCategory("tutorials")}
        >
          Tutorials
        </button>
      </li>
      <li className="nav-filter__item">
        <button
          className={`filter-toggle ${activeCategory === "latest" ? "filter-toggle-active" : ""}`}
          onClick={(e) => setActiveCategory("latest")}
        >
          Latest
        </button>
      </li>
      <li className="nav-filter__item">
        <button
          className={`filter-toggle ${activeCategory === "news" ? "filter-toggle-active" : ""}`}
          onClick={(e) => setActiveCategory("news")}
        >
          News
        </button>
      </li>
      <li className="nav-filter__item">
        <button
          className={`filter-toggle ${activeCategory === "product-updates" ? "filter-toggle-active" : ""}`}
          onClick={(e) => setActiveCategory("product-updates")}
        >
          Product Updates
        </button>
      </li>
    </ul>
  );
};

export default FilterNav;
