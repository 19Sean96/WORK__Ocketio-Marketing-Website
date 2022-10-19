import { useState, useRef, useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Question, Answer, Item } from "./Item.styled";
import { useAppContext } from "@context/app";
export default ({ question, answer, index }) => {
	const [isOpen, toggleOpen] = useState(false);
	const [tabHeight, setTabHeight] = useState(0);
	const { windowSize } = useAppContext()
	const ref = useRef();

	useEffect(() => {
		if (tabHeight !== ref.current.clientHeight) {
			setTabHeight(ref.current.clientHeight)
		}
	}, [windowSize])
	return (
		<Item onClick={(e) => toggleOpen(!isOpen)} key={index}>
			<Question isOpen={isOpen}>
				<h5 className="h5">{question}</h5>
				<div className="icon">
					<AiOutlineRight />
				</div>
			</Question>
			<Answer isOpen={isOpen} tabHeight={tabHeight + 35}>
				<p ref={ref} className="p-sm">
					{answer}
				</p>
			</Answer>
		</Item>
	);
};
