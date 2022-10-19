import { $primaryblack, $primarywhite } from "@lib/Colors";
import styled from "styled-components";

export default styled.aside`
	position: absolute;
	left: 5vw;
	top: 0;
	z-index: 50;
	color: ${$primaryblack};
	p {
		vertical-align: middle;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		.link {
			cursor: pointer;
			font-size: 16px;
			text-decoration: none;
			color: inherit;
		}

		.divider {
			font-size: 11px;
			margin: 0 4px;
		}
	}
`;
