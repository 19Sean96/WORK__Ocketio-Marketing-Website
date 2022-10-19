import { $bluelight, $primaryblack, $primarywhite, $secondarywhite } from "@lib/Colors";
import styled from "styled-components";

export default styled.a`
	position: relative;
	text-decoration: none;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: space-between;
	height: 100%;
	padding: 20px 20px 16px;
	border-radius: 16px;
	transition: all 0.1s ease-out;
	transform: scale(1) translate3d(0, 0, 0);
	will-change: contents;
	background: ${$primaryblack};
	box-shadow: 0 20px 8px rgba(0, 0, 0, 0.01), 0 13px 7px rgba(0, 0, 0, 0.1),
		0 3px 6px rgba(0, 0, 0, 0.35), 0 3px 4px rgba(0, 0, 0, 0.6),
		0 1px 2px rgba(0, 0, 0, 0.69), 0 0px 0px rgba(0, 0, 0, 0.7);

	&:hover,
	&:active,
	&:focus {
		transform: scale(1.01) translate3d(0, -1%, 0);
		box-shadow: 0 24px 13px rgba(0, 0, 0, 0.02), 0 16px 11px rgba(0, 0, 0, 0.14),
			0 9px 10px rgba(0, 0, 0, 0.48), 0 4px 7px rgba(0, 0, 0, 0.81),
			0 2px 4px rgba(0, 0, 0, 0.93), 0 0px 0px rgba(0, 0, 0, 0.95);
	}
	.blog {
		&--title {
			font: normal 600 18px/26px "Poppins", sans-serif;
			color: ${$bluelight};
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			max-height: 26px;
			-webkit-line-clamp: 1; /* number of lines to show */
			-webkit-box-orient: vertical;
			transition: max-height 25s ease-out 0.05s;
		}

		&--info {
			color: ${$secondarywhite};
			font: normal 600 13px/13px "Poppins", sans-serif;
			margin-bottom: 3px;
		}

		&--body {
			color: ${$primarywhite};
			font-size: 12px;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			line-height: 1.5em;
			max-height: 3em; /* fallback */
			-webkit-line-clamp: 2; /* number of lines to show */
			-webkit-box-orient: vertical;
			transition: max-height 25s ease-out 0.05s;
			text-align: left;

			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				display: none;
			}

			* {
				font-size: 1em;
			}
		}

		&--cta {
			display: inline-block;
			font-size: 14px;
			font-family: "Poppins", sans-serif;
			font-weight: 600;
			color: ${$bluelight};
			margin-top: 16px;
			text-decoration: underline;
			position: relative;

			&::before {
				position: absolute;
				content: "";
				top: 50%;
				right: 0;
				width: 11px;
				height: 11px;
				background: ${$bluelight};
				clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
				transform: translate(calc(100% + 20px), -50%);
			}
		}

		&--img {
			&__wrapper {
				width: 100%;
				position: relative;
				aspect-ratio: 16/9;
				min-height: unset;
				height: unset;
				flex-grow: 1;
				border-radius: 12px;
				margin-top: 30px;
				overflow: hidden;
			}
		}

		&__bot {
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			display: initial;
			.p-small {
				margin-left: 0;
			}
		}
	}
`;
