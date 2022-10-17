import styled from "styled-components";

export default styled.div`
	position: absolute;
	height: ${({ styles }) => styles?.height || "auto"};
	width: ${({ styles }) => styles?.height || "auto"};
	top: ${({ styles }) => styles?.top || "unset"};
	left: ${({ styles }) => styles?.left || "unset"};
	bottom: ${({ styles }) => styles?.bottom || "unset"};
	right: ${({ styles }) => styles?.right || "unset"};
	transform: ${({ styles }) => styles?.transform || "translate(0,0)"};
	background-color: ${({ styles }) => styles?.backgroundColor || "#f5f5f5"};
	z-index: ${({ styles }) => styles?.zIndex || 1};
	border-radius: 50%;

	&::before {
		display: ${({ withRing }) => (withRing ? "block" : "none")};
		content: "";
		position: absolute;
		width: ${({ styles }) => styles?.ringSize || "125%"};
		height: ${({ styles }) => styles?.ringSize || "125%"};
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 3px solid ${({ styles }) => styles?.ringColor || "#88E4C3"};
		border-radius: 50%;
	}
`;
