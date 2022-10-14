import Link from "next/link";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import ScrollAnimation from "react-animate-on-scroll";
import ContentWrapper from "@util/ContentWrapper";
import { useSwipeable } from "react-swipeable";
import { BsCaretRightFill, BsCaretLeftFill } from "react-icons/bs";
import { useAppContext } from "@context/app";
import SetupRegister from "@images/features/setup/step-1-register.svg";
import SetupCreateNetwork from "@images/features/setup/step-2-create_network.svg";
import SetupInstallGateway from "@images/features/setup/step-3-install_gateway.svg";
import SetupDeviceSetup from "@images/features/setup/step-4-device_setup.svg";
import SetupSecuritySettings from "@images/features/setup/step-5-security_settings.svg";

import Tabs from "@elements/features/SetupSlides/Tabs";

const SetupSlides = (props) => {
	const { isMobile } = useAppContext();

	const [previousTab, setPreviousTab] = useState(null);
	const [activeTab, setActiveTab] = useState(0);
	const [isIntersecting, setIsIntersecting] = useState(false);

	const swipeHandlers = useSwipeable({
		onSwiped: (evtData) => console.log("SWIPED!", evtData),
		onSwipedLeft: (evtData) =>
			setActiveTab(activeTab < tabs.length - 1 ? activeTab + 1 : 0),
		onSwipedRight: (evtData) =>
			setActiveTab(activeTab > 0 ? activeTab - 1 : tabs.length - 1),
	});

	const { ref, inView, entry } = useInView({});

	useEffect(() => {
		console.log(inView);
	}, [inView]);

	return (
		<ContentWrapper>
			<section
				className="section section__with-grid all-columns"
				id="setupSection">
				<ScrollAnimation
					animateOnce={true}
					animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
					duration={0.44}
					offset={-186}
					className="section--heading">
					<h2 className="h2 capitalize">straightforward setup</h2>
					<p className="p-lg">
						Forget all the manual configuration historically required for
						traditional WireGuard® configuration. Instead get up and running in
						minutes with a delightfully simple setup process and accessible
						admin panel.
					</p>
				</ScrollAnimation>
				<article className="section--body">
					<ScrollAnimation
						animateOnce={true}
						className="tabs__wrapper"
						animateIn="animate__fadeInUp"
						duration={0.725}>
						<Tabs
							activeTab={activeTab}
							setActiveTab={setActiveTab}
							setPreviousTab={setPreviousTab}
						/>
					</ScrollAnimation>

					<div className="slides-number-group">
						<BsCaretLeftFill
							className="j-display _700 slides-number-group--item"
							style={{
								visibility: activeTab == 0 ? "hidden" : "visible",
							}}
							onClick={(e) => setActiveTab(activeTab > 0 ? activeTab - 1 : 4)}>
							1
						</BsCaretLeftFill>
						<BsCaretRightFill
							className="j-display _700 slides-number-group--item"
							style={{
								visibility: activeTab == 4 ? "hidden" : "visible",
							}}
							onClick={(e) => setActiveTab(activeTab <= 3 ? activeTab + 1 : 0)}>
							2
						</BsCaretRightFill>
					</div>
					<ScrollAnimation
						animateOnce={true}
						animateIn="animate__fadeIn"
						duration={0.88}
						className="image__wrapper display">
						<div className="slideshow" ref={ref}>
							<div className="slideshow--item__wrapper">
								<SetupRegister opacity={activeTab === 0 ? 1 : 0} />
							</div>
							<div className="slideshow--item__wrapper">
								<SetupCreateNetwork opacity={activeTab === 1 ? 1 : 0} />
							</div>
							<div className="slideshow--item__wrapper">
								<SetupInstallGateway opacity={activeTab === 2 ? 1 : 0} />
							</div>
							<div className="slideshow--item__wrapper">
								<SetupDeviceSetup opacity={activeTab === 3 ? 1 : 0} />
							</div>
							<div className="slideshow--item__wrapper">
								<SetupSecuritySettings opacity={activeTab === 4 ? 1 : 0} />
							</div>
						</div>
					</ScrollAnimation>
					<div className="cta-group">
						<Link href="/pricing">
							<ScrollAnimation
								animateOnce={true}
								animateIn="animate__fadeInUp"
								duration={0.675}
								className="cta">
								<button
									className="cta btn btn--filled j-text _400"
									aria-label="Get started with our beta program by creating a network">
									Create a Network
								</button>
							</ScrollAnimation>
						</Link>
						<Link href="/features">
							<ScrollAnimation
								animateOnce={true}
								animateIn="animate__fadeInUp"
								duration={0.675}
								className="cta">
								<button
									className="cta btn btn--bordered j-text _400 capitalize"
									aria-label="Get additional information about Wirewise">
									learn more
								</button>
							</ScrollAnimation>
						</Link>
					</div>
					{isMobile && (
						<div
							data-InView={inView}
							className="tabs--mobile"
							style={{
								transform: inView
									? "translate(-50%, 0)"
									: "translate(-50%, 150%)",
							}}>
							<button
								className="tabs--mobile--btn tabs--mobile__left"
								style={{
									visibility: activeTab == 0 ? "hidden" : "visible",
								}}
								onClick={(e) =>
									setActiveTab(activeTab > 0 ? activeTab - 1 : 4)
								}>
								<span className="tab--num">{activeTab}</span>
								<BsCaretLeftFill />
							</button>

							<button
								className="tabs--mobile--btn tabs--mobile__right"
								style={{
									visibility: activeTab == 4 ? "hidden" : "visible",
								}}
								onClick={(e) =>
									setActiveTab(activeTab <= 3 ? activeTab + 1 : 0)
								}>
								<span className="tab--num">{activeTab + 2}</span>
								<BsCaretRightFill />
							</button>
						</div>
					)}
				</article>
			</section>
		</ContentWrapper>
	);
};

export default SetupSlides;
