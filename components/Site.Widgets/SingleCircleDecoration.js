import styled from "styled-components";

const StyledSingleCircleDecoration = styled.div`
	position: absolute;
	height: ${({ styles }) => styles?.height || "auto"};
	width: ${({ styles }) => styles?.height || "auto"};
	top: ${({ styles }) => styles?.top || "unset"};
	left: ${({ styles }) => styles?.left || "unset"};
	bottom: ${({ styles }) => styles?.bottom || "unset"};
	right: ${({ styles }) => styles?.right || "unset"};
	transform: ${({ styles }) => styles?.transform || "translate(0,0)"};
	background-color: ${({ styles }) => styles?.backgroundColor || "#f5f5f5"};
	z-index: 10;
	border-radius: 50%;

	&::before {
		display: ${({ withRing }) => (withRing ? "block" : "none")};
		content: "";
		position: absolute;
		width: ${({ styles }) => styles?.ringSize || "115%"};
		height: ${({ styles }) => styles?.ringSize || "115%"};
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 3px solid ${({ styles }) => styles?.ringColor || "88E4C3"};
		border-radius: 50%;
	}
`;

const SingleCircleDecoration = ({ styles, withRing }) => (
	<StyledSingleCircleDecoration
		className="decor decor--single-circle"
		styles={styles}
		withRing={withRing}></StyledSingleCircleDecoration>
);

export default SingleCircleDecoration;
