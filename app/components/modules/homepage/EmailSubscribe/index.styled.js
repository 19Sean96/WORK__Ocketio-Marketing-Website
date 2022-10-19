import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";

export default styled(ScrollAnimation)`
	position: relative;
	.decor {
		&__circle {
			&-1 {
				position: absolute;
				left: 0;
				top: 0;
				z-index: 11;
				height: 24vw;
				width: 24vw;
				max-width: 455px;
				max-height: 455px;
				background-color: $primary-black;
				transform: translate(-80%, -10%);
				border-radius: 50%;
			}
			&-2 {
				position: absolute;
				right: 0;
				bottom: 0;
				z-index: 11;
				height: 24vw;
				width: 24vw;
				max-width: 455px;
				max-height: 455px;
				background-color: $blue-mid;
				transform: translate(65%, 36%);
				border-radius: 50%;
			}
		}
	}
`;
