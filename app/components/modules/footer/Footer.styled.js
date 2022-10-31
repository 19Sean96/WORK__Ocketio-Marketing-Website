import { $primaryblack, $primarywhite, $secondarywhite } from "@lib/Colors";
import styled from "styled-components";
export default styled.footer`
	width: 100vw;
	margin: 0 auto;
	max-width: 1575px;
	padding: 200px calc(2.5vw + 10px) 20px;
	position: relative;
	margin-top: ${(props) => (props.pathname == "/contact" ? "-220px" : "auto")};

	&::before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 50%;
		z-index: 0;
		transform: translate(-50%);
		width: 101vw;
		height: 100%;
		background: ${({ darkMode }) => (darkMode ? $primaryblack : 'transparent')};
		pointer-events: none;
	}

	.footer {
		&--top {
			position: relative;
			display: flex;
			justify-content: space-between;
			margin-bottom: 40px;
			flex-wrap: wrap;
			column-gap: 60px;
			row-gap: 40px;
		}
		&--bot {
			position: relative;
			display: flex;
			justify-content: space-between;
			padding-top: 30px;
			border-top: 1px solid ${$secondarywhite};
		}
		&--nav {
			display: flex;
			gap: 50px;
			flex-wrap: wrap;

			&--list {
				h6 {
					margin-bottom: 20px;
				}

				li {
					font-family: "Noto Sans", sans-serif;
					list-style: none;
					margin-bottom: 6px;
					a {
						font-family: inherit;
						font-weight: 400;
						text-decoration: none;
					}
				}
			}
		}
		&--logo {
			position: relative;
			z-index: 50;
			max-width: 225px;
			min-width: 175px;
			width: 10vw;
			cursor: pointer;
		}
		@media (min-width: 2160px) {
			max-width: 1880px;
		}

		@media (max-width: 550px) {
			&--top {
				flex-direction: column;
				gap: 32px;
			}
		}
	}
`;
