import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";

export default styled(ScrollAnimation)`
	position: relative;
	z-index: 1;

	.emailIntake-decor-2 {
		
		@media screen and (max-width: 450px) {
			transform: translate(28vw, 55%);
		}
	}
`;
