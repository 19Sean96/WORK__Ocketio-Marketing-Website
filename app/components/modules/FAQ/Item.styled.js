import {
	$pastelred,
	$primaryblack,
	$primarywhite,
	$secondaryblack,
} from "@lib/Colors";
import styled from "styled-components";

const Question = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 8px;
	> * {
		margin: 0;
	}
	.h5 {
		color: ${({ isOpen }) => (isOpen ? $pastelred : $primarywhite)};
		transition: all 0.3s ease-in-out;
	}

	.icon {
		position: relative;
		transform: rotate(${({ isOpen }) => (isOpen ? 90 : 0)}deg);
		transition: all 0.3s ease-in-out;
		height: 30px;
		width: 30px;

		svg {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%) scaleX(75%);
			fill: ${({ isOpen }) => (isOpen ? $pastelred : $primarywhite)};
			transition: all 0.3s ease-in-out;
			height: 36px;
			width: auto;
		}
	}
`;
const Answer = styled.div`
	max-height: ${({ isOpen, tabHeight }) => (isOpen ? tabHeight : 0)}px;
	transition: max-height 0.4s cubic-bezier(0.33, 1, 0.68, 1);

	p {
		margin-top: 16px;
		position: "relative";
		transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1),
			opacity 0.25s cubic-bezier(0.64, 0, 0.78, 0);
		transform: translateY(${({ isOpen }) => (isOpen ? 0 : 100)}%);
		opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
		color: ${$primarywhite};
	}
	@media screen and (max-width: 575px) {
		p {
			margin-top: 8px;
		}
	}
`;
const Item = styled.article`
	cursor: pointer;
	display: flex;
	background-color: ${$secondaryblack};
	flex-direction: column;
	align-items: stretch;
	border-radius: 6px;
	border: solid 1px ${$primaryblack};
	padding: 32px 34px;
	overflow: hidden;

	@media screen and (max-width: 575px) {
		padding: 22px 28px;
	}
`;
export { Question, Answer, Item };
