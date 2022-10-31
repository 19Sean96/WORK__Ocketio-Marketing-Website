import styled from "styled-components";

export default styled.li`
	position: relative;
	background-color: ${({ active }) => (active ? "#C3CCCC" : "#F5F5F5")};
	box-shadow: 0px 4px 4px
		${({ active }) => (active ? "#96a1ad" : "transparent")};

	.tab--num {
		color: #${({ active }) => (active ? "f5f5f5" : "151779")};

		&::before {
			content: "";
			z-index: -1;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background-color: #${({ active }) => active ? '151779' : "f5f5f5"};
      border: 3px solid #151779;
			width: 48px;
			height: 48px;
			border-radius: 50%;
		}
	}

	@media screen and (max-width: 875px) {
		opacity: ${(props) => (props.active ? 1 : 0)};
	}
`;