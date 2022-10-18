import { useState, useRef } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { _primarywhite, _pastelred } from "@lib/Colors";

export default ({ question, answer, index }) => {
	const [isOpen, toggleOpen] = useState(false);

	const ref = useRef();
	return (
		<div
			className="faq--list--item"
			onClick={(e) => toggleOpen(!isOpen)}
			key={index}>
			<div className="heading">
				<h5
					className="h5"
					style={{
						color: isOpen ? _pastelred : _primarywhite,
						transition: "all .3s ease-in-out",
					}}>
					{question}
				</h5>
				<div
					className="icon"
					style={{
						position: "relative",
						transform: `rotate(${isOpen ? 90 : 0}deg)`,
						transition: "all .3s ease-in-out",
						height: "30px",
						width: "30px",
					}}>
					<AiOutlineRight
						style={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%) scaleX(75%)",
							fill: isOpen ? _pastelred : _primarywhite,
							transition: "all .3s ease-in-out",
							height: "36px",
							width: "auto",
						}}
					/>
				</div>
			</div>
			<div
				className="body"
				style={{
					maxHeight: isOpen ? ref.current.clientHeight + 35 : 0,
					transition: "max-height .4s cubic-bezier(0.33, 1, 0.68, 1)",
				}}>
				<p
					ref={ref}
					className="p-sm"
					style={{
						position: "relative",
						transition:
							"transform .35s cubic-bezier(.25, 1, .5, 1), opacity .25s cubic-bezier(0.64, 0, 0.78, 0)",
						transform: `translateY(${isOpen ? 0 : 100}%)`,
						opacity: isOpen ? 1 : 0,
						color: _primarywhite,
					}}>
					{answer}
				</p>
			</div>
		</div>
	);
};
