import tabData from "@constants/features/tabs.js";
import Tab from "./Tab";

const Tabs = ({ activeTab, setActiveTab, setPreviousTab }) => {

	return (
		<ul className="tabs">
			{tabData.map((tab, i) => (
				<Tab
					i={i}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
					setPreviousTab={setPreviousTab}
					thisTab={tab}
				/>
			))}
		</ul>
	);
};

export default Tabs;
