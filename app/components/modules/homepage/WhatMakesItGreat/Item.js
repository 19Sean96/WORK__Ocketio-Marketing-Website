import { useRef } from "react";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { useAppContext } from "@context/app";
import ScrollAnimation from "react-animate-on-scroll";

export default ({
	reversed,
	title,
	par,
	list,
	isMobile,
	imageAttr,
	StyledImage,
}) => {
	const { alt, id } = imageAttr;
	const ref = useRef();
	const { scrollOffset, windowSize } = useAppContext();

	const distanceY =
		(ref?.current?.getBoundingClientRect()?.top +
		scrollOffset -
		windowSize.height / 2) || 0;

	return (
		<article
			className={`section--body--item${reversed ? " reversed" : ""}`}
			id={`${id}__wrapper`}>
			<ScrollAnimation
				animateOnce={true}
				animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
				className="text-block"
				duration={0.6}>
				<h3 className="h3 semi-bold">{title}</h3>
				<p className="p-sm">{par}</p>
			</ScrollAnimation>
			<ul className="checklist">
				{list.map((item, i) => (
					<li className="checklist--item" key={"item-" + i}>
						<ScrollAnimation
							animateOnce={true}
							duration={1 - i * 0.1}
							delay={i * 25}
							offset={-128}
							animateIn="animate__fadeInUp"
							className="checklist--item">
							<AiTwotoneCheckCircle className="checklist--item__icon" />
							<h5 className="h5">{item}</h5>
						</ScrollAnimation>
					</li>
				))}
			</ul>
			<ScrollAnimation
				animateOnce={true}
				animateIn="animate__fadeIn"
				duration={0.7}
				className="image__wrapper"
				delay={150}>
				<StyledImage
					alt={alt}
					id={id}
					className="section--body--item__image image"
					ref={ref}
					$offset={scrollOffset}
					$distanceY={distanceY}
				/>
			</ScrollAnimation>
		</article>
	);
}