import styled from "styled-components";
export default styled.footer`
	margin-top: ${props => props.pathname == '/contact' ? '-220px' : 'auto'};
	&::before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 50%;
		z-index: 0;
		transform: translate(-50%);
		width: 100vw;
		height: 100%;
		background: ${(props) => props.background};
		pointer-events: none;
	}
`;