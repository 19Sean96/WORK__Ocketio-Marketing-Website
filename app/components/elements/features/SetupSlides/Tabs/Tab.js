import StyledTab from "./Tab.styled";
import { useAppContext } from "@context/app";

export default ({ i, activeTab, setActiveTab, setPreviousTab, thisTab }) => {
    const { isMobile } = useAppContext();

	return (
		<div
			className="tab--outer"
			key={`tab-${i}`}
			style={{
				pointerEvents: i == activeTab || !isMobile ? "all" : "none",
			}}>
			<StyledTab
				className={`tab tab-${i + 1}`}
				key={i}
				active={i === activeTab}
				onClick={(e) => {
					setPreviousTab(activeTab);
					if (isMobile) {
						if (activeTab == 4) {
							setActiveTab(0);
						} else setActiveTab(activeTab + 1);
					} else setActiveTab(i);
				}}>
				<span className="tab--num">{i + 1}</span>
				<div className="tab--text">
					<h6 className="h6">{thisTab.title}</h6>
					<p className="p-sm">{thisTab.par}</p>
				</div>
			</StyledTab>
		</div>
	);
};
