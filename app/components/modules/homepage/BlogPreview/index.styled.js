import { $pastelred, $primaryblack, $primarywhite } from "@lib/Colors";
import styled from "styled-components";

export default styled.section`
	display: flex;
	flex-direction: column;
	position: relative;
	margin-top: -5px;
	padding-top: 170px;
	padding-bottom: 45px;
	padding: 170px 5vw 45px;
	margin-bottom: -2px;
	&::before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 200vw;
		-webkit-transform: translateX(-50%);
		-moz-transform: translateX(-50%);
		transform: translateX(-50%);
		height: 100%;
		z-index: 0;
		background-color: ${$primaryblack};
	}

	.section--heading {
		color: ${$primarywhite};
		margin-bottom: 24px;
		position: relative;
		z-index: 1;
	}

	#blogPosts {
		margin-top: 42px;
	}

	.blogs {
		grid-template-columns: 1fr 1fr 1fr;

		&--preview {
			cursor: pointer;
			display: flex;
			flex-direction: column;
			align-items: stretch;
			justify-content: space-between;
			padding: 52px 57px;
			border-radius: 16px;
			border: 3px solid ${$pastelred};
			text-decoration: none;
			color: ${$primarywhite};
			transition: all 0.1s ease-out;
			transform: scale(1) translate3d(0, 0, 0);
			box-shadow: 0 20px 8px rgba(0, 0, 0, 0.01), 0 13px 7px rgba(0, 0, 0, 0.1),
				0 3px 6px rgba(0, 0, 0, 0.35), 0 3px 4px rgba(0, 0, 0, 0.6),
				0 1px 2px rgba(0, 0, 0, 0.69), 0 0px 0px rgba(0, 0, 0, 0.7);

			svg {
				position: relative;
				transform-origin: top right;
				transform: scale(1.15);
				width: 116px;
				height: 112px;
			}

			&:hover,
			&:active,
			&:focus {
				transform: scale(1.01) translate3d(0, -1%, 0);
				box-shadow: 0 24px 13px rgba(0, 0, 0, 0.02),
					0 16px 11px rgba(0, 0, 0, 0.14), 0 9px 10px rgba(0, 0, 0, 0.48),
					0 4px 7px rgba(0, 0, 0, 0.81), 0 2px 4px rgba(0, 0, 0, 0.93),
					0 0px 0px rgba(0, 0, 0, 0.95);
			}
		}
	}

	@media screen and (max-width: 1150px) {
		.blogs {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr min-content;

			&--preview {
				grid-row: 2/3;
				grid-column: 1/3;
				flex-direction: row;
				align-items: center;
				justify-content: flex-start;
				padding: 30px 85px;
				gap: 60px;
				svg {
					width: 87px;
					height: 85px;
					transform: scale(1);
				}
			}
		}
	}
	@media screen and (max-width: 960px) {
		padding-top: 95px;
	}
	@media screen and (max-width: 850px) {
		.blogs {
			row-gap: 25px;
			column-gap: 10px;
			grid-template-columns: 1fr;
			grid-template-rows: auto;
			&--preview {
				grid-row: 3/4;
			}

			.blog {
				&:first-child {
					grid-row: 1/2;
				}
				&:nth-child(2) {
					grid-row: 2/3;
				}
			}
		}

		#blogPosts {
			margin-top: 5px;
		}
	}
	@media screen and (max-width: 650px) {
		.blogs {
			&--preview {
				padding: 20px 45px;
				gap: 30px;
			}
		}
	}
`;
