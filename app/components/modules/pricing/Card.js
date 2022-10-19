import Link from "next/link";
import { forwardRef } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { StyledCard } from "./pricing.styled";
export default forwardRef(
	(
		{
			name,
			price,
			message,
			features,
			button,
			tallestCardHeading,
			tallestFeaturesList,
		},
		ref
	) => {
		return (
			<StyledCard
				animateOnce={true}
				duration={0.7}
				delay={400}
				animateIn="animate__fadeInLeft"
				className={`section--body--item price-card price-card-${name}`}
				ref={ref}>
				<h2
					className={`price-card--type capitalize h2 price-card--type__${name}`}>
					{name}
				</h2>

				<div
					className="price-card--heading"
					style={{
						minHeight: tallestCardHeading,
					}}>
					<h2 className="price-card--price h2">
						<span className="price capitalize">{price} </span>
						<span className="freq">{price !== "free" ? "user/month" : ""}</span>
					</h2>
					<p className="p-sm price-card--description">{message}</p>
				</div>

				<Link href={button.url}>
					<button
						className={`btn  ${button.className}  ${button.className}__darkmode capitalize price-card--cta`}>
						{button.value}
					</button>
				</Link>

				<div className="price-card--features">
					<div
						className="list list__1"
						style={{
							minHeight: tallestFeaturesList,
						}}>
						<h6 className="h6">Includes</h6>
						<ul>
							{features[0].map((feat) => (
								<li>
									<AiFillCheckCircle aria-hidden="true" />
									<p className="p-sm">{feat}</p>
								</li>
							))}
						</ul>
					</div>
					<div className="list list__2">
						<h6 className="h6">Key Features</h6>
						<ul>
							{features[1].map((feat) => (
								<li>
									<AiFillCheckCircle aria-hidden="true" />
									<p className="p-sm">{feat}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</StyledCard>
		);
	}
);
