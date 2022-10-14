import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { BsWindows, BsApple } from "react-icons/bs";
import { DiAndroid, DiLinux } from "react-icons/di";
import tooltips from "@constants/features/tooltips"
import { useAppContext } from "@context/app";

export default () => {
    const [hoverInfoBox, toggleHoverInfoBox] = useState("");
	const { isMobile } = useAppContext();

	return (
		<article id="supportedOS" className="banner f f-justify-between">
			<h6 className="h6 banner--heading">Available for</h6>
			<ScrollAnimation
				animateOnce={true}
				animateIn="animate__fadeInUp"
				duration={1.2}
				className="item item-1"
				onMouseEnter={(e) => toggleHoverInfoBox("managedDevices")}
				onMouseLeave={(e) => toggleHoverInfoBox("")}>
				<div className="item--img__wrapper">
					<BsWindows className="item--img" />
					<span className="item--img--text">Windows</span>
				</div>
				<h6 className="h6 capitalize">
					managed <span className="last-word">devices</span>
				</h6>
			</ScrollAnimation>
			<ScrollAnimation
				animateOnce={true}
				animateIn="animate__fadeInUp"
				duration={isMobile ? 1.2 : 0.8}
				className="item item-2"
				onMouseEnter={(e) => toggleHoverInfoBox("supervisedDevices")}
				onMouseLeave={(e) => toggleHoverInfoBox("")}>
				<div className="item--img__wrapper">
					<div className="item-2__1 item-2__subitem">
						<BsApple className="item--img" />
						<span className="item--img--text">
							MacOS
							<br />
							iOS
						</span>
					</div>
					<div className="item-2__2 item-2__subitem">
						<DiLinux className="item--img" />
						<span className="item--img--text">Linux</span>
					</div>
					<div className="item-2__3 item-2__subitem">
						<DiAndroid className="item--img" />
						<span className="item--img--text">Android</span>
					</div>
				</div>
				<h6 className="h6 capitalize">
					monitored <span className="last-word">devices</span>
				</h6>
			</ScrollAnimation>
			<ScrollAnimation
				animateOnce={true}
				animateIn="animate__fadeInUp"
				duration={1.2}
				className="item item-3"
				onMouseEnter={(e) => toggleHoverInfoBox("gatewayManagement")}
				onMouseLeave={(e) => toggleHoverInfoBox("")}>
				<div className="item--img__wrapper">
					<DiLinux className="item--img" />
					<span className="item--img--text">Linux</span>
				</div>
				<h6 className="h6 capitalize">
					gateway <span className="last-word">management</span>
				</h6>
			</ScrollAnimation>
		</article>
	);
};
