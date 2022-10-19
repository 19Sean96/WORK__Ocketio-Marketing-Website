import { Item, Nav } from "./Nav.styled";
import categories from "@constants/blog/categories";
const NavItem = ({ activeCategory, setActiveCategory, thisCategory }) => (
	<Item active={thisCategory.cat == activeCategory}>
		<button onClick={(e) => setActiveCategory(thisCategory.cat)}>
			{thisCategory.label}
		</button>
	</Item>
);

const FilterNav = ({ activeCategory, setActiveCategory, isSticky }) => (
	<Nav isSticky={isSticky}>
		{categories.map((cat) => (
			<NavItem
				activeCategory={activeCategory}
				setActiveCategory={setActiveCategory}
				thisCategory={cat}
				key={cat.cat}
			/>
		))}
	</Nav>
);

export default FilterNav;
