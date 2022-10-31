import { $primaryblack, $primarywhite } from "@lib/Colors";
import styled from "styled-components";

const Section = styled.section`
	position: relative;
	z-index: 11;
	padding-top: 160px;
	padding-bottom: 120px;
	margin-top: 0;
	overflow: visible;

	.section {
		&--heading {
			margin-bottom: 40px;
			h2 {
				margin-bottom: 0;
				color: ${$primarywhite};
				text-align: center;
			}
			p {
				padding: 0 2.5vw;
			}
		}

		&--body {
			grid-row: 2/3;
			grid-column: 2/12;
		}

		@media screen and (max-width: 700px) {
			&--body {
				grid-column: 1/13;
				margin: 0 5vw;
			}
		}
	}
`;

const Background = styled.div`
	position: absolute;
	left: 50%;
	top: 0;
	transform: translate(-50%, 0);
	z-index: 0;
	width: 101vw;
	height: 100%;
	background-color: ${$primaryblack};
	clip-path: polygon(0% 0%, 100% 0%, 100% 580px, 0% 710px);
`;

export { Section, Background };
