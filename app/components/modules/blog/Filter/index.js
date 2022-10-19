import FilterNav from "./Nav";
import FilterSearch from "./Search";
import { useRef, useState, useEffect } from "react";
import { useAppContext } from "@context/app";
import StyledFilter from './index.styled'

const Filter = ({
	activeCategory,
	setActiveCategory,
	searchTerm,
	handleSearchUpdate,
	blogsRef,
}) => {
	const [isSticky, setIsSticky] = useState(false);
	const ref = useRef();
	const { scrollOffset, windowSize } = useAppContext();
	useEffect(() => {

		if (scrollOffset > (blogsRef?.offsetTop - ref.current.offsetHeight - 50) && windowSize.width < 750) {
			setIsSticky(true);
		} else setIsSticky(false);
	}, [scrollOffset]);

	return (
		<StyledFilter className={"filter-row" + (isSticky ? " isSticky" : "")} ref={ref}>
			<FilterSearch
				searchTerm={searchTerm}
				handleSearchUpdate={handleSearchUpdate}
				isSticky={isSticky}
			/>
			<FilterNav
				activeCategory={activeCategory}
				setActiveCategory={setActiveCategory}
				isSticky={isSticky}
			/>
		</StyledFilter>
	);
};

export { Filter, FilterNav, FilterSearch };
