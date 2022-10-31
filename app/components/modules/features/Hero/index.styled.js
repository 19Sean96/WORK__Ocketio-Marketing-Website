import styled from "styled-components";
import {
	$primarywhite,
	$primaryblack,
	$bluelight,
	$palemint,
	$secondaryblack,
} from "@lib/Colors";

export default styled.div`
	position: relative;

	#features-hero {
		position: relative;
		grid-column: 1/13;
		align-content: space-between;
		margin-top: 0;
		padding-top: 80px;
		padding-bottom: 125px;

		.bg {
			content: "";
			position: absolute;
			z-index: 0;
			top: 0;
			left: 50%;
			width: 100vw;
			transform: translateX(-50%);
			height: 100%;
			background-color: ${$primaryblack};
			clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 87%);
		}
		.message {
			position: relative;
			z-index: 2;
			grid-column: 1/7;
			grid-row: 1/2;
			align-self: flex-end;
			margin-right: 40px;
			margin-bottom: 16px;

			h1 {
				margin-bottom: 12px;
				color: ${$primarywhite};
			}

			p {
				padding-right: 50px;
				color: ${$primarywhite};
				letter-spacing: 0.025em;
			}

			.cta-group {
				margin-top: 60px;

				.cta {
					letter-spacing: 0.035em;
					max-width: 400px;
				}
			}
		}

		.banner {
			position: relative;
			z-index: 5;
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;
			gap: 10px;
			grid-column: 1/9;
			grid-row: 3/4;
			height: min-content;
			min-width: 800px;
			margin: 106px 0 42px;
			padding: 33px 40px 13px;
			background-color: ${$secondaryblack};
			border-top: 3px solid ${$bluelight};
			border-radius: 10px;

			&::before {
				content: "";
				position: absolute;
				bottom: 0;
				right: 0;
				width: 40%;
				height: 100%;
				background-color: ${$palemint};
				clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 125px 100%);
				border-bottom-right-radius: 10px;
				border-top-right-radius: 10px;
			}

			&--heading {
				position: absolute;
				top: 0;
				left: 0;
				transform: translate(30px, -50%);
				color: ${$primaryblack};
				background-color: ${$bluelight};
				padding: 3px 12px;
				border-radius: 50px;
				font-weight: 600;
				font-size: 12px;
			}

			.item {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;
				justify-content: space-between;
				gap: 10px;
				background-color: transparent;
				border-radius: 0;

				.h6 {
					position: relative;
					cursor: pointer;
					text-align: center;
					color: ${$primarywhite};

					br {
						display: none;
					}

					.last-word {
						position: relative;

						&::after {
							content: "";
							position: absolute;
							right: 0;
							top: 0;
							transform: translate(20px, -5px);
							width: 16px;
							height: 16px;
							border-radius: 50%;
							background-size: cover;
							background-repeat: no-repeat;
						}
					}
				}

				&--img {
					width: auto;
					height: 35px;
					min-width: 0;
					min-height: 0;
					fill: ${$primarywhite};
					color: ${$primarywhite};
					&__wrapper {
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						align-items: center;
						gap: 6px;
					}

					&--text {
						color: ${$primarywhite};
						font-size: 15px;
						text-align: center;
					}
				}

				&-1 {
					flex-grow: 1;
				}

				&-2 {
					flex-grow: 3;
					position: relative;

					&__subitem {
						display: flex;
						flex-direction: column;
						align-items: center;
						gap: 6px;
					}

					.item--img__wrapper {
						width: 75%;
						min-width: 270px;
						flex-direction: row;
						align-items: flex-start;
					}
				}

				&-3 {
					flex-grow: 1;

					.h6 {
						color: ${$primaryblack};
					}

					.item--img {
						fill: ${$primaryblack};

						&__wrapper {
							position: relative;
						}

						&--text {
							color: ${$primaryblack};
						}
					}
				}
			}

			#explain {
				position: absolute;
				left: 50%;
				bottom: 20px;
				transform: translateX(-50%);
				text-decoration: underline;
				color: $secondary-white;
				font-weight: 700;
			}
		}

		@media screen and (max-width: 1100px) {
			align-content: center;

			.bg {
				height: calc(100% - 50px);
			}
			.message {
				align-self: center;
				grid-row: 1/2;
				grid-column: 3/11;
				margin: 0 0 105px;

				.h1 {
					text-align: center;
					margin-bottom: 4px;
				}

				.p-lg {
					text-align: center;
					padding: 0;
				}

				.cta-group {
					justify-content: center;
					margin-top: 30px;
					.cta {
						width: 100%;
					}
				}
			}
			.banner {
				grid-row: 3/4;
				grid-column: 2/12;
				padding: 27px 27px 15px;
				margin: 75px 0 0;
				min-width: 0px;
				justify-content: center;
				&::before {
					width: 35%;
					clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 75px 100%);
				}

				&--heading {
					left: 50%;
					transform: translate(-50%, -50%);
				}

				.item {
					&-1,
					&-3 {
						width: 28%;
					}
					&-2 {
						.item--img__wrapper {
							justify-content: center;
							gap: 33px;
						}
					}
				}
			}
		}
		@media screen and (max-width: 960px) {
			.message {
				grid-column: 2/12;
				margin-bottom: 75px;
			}
			.banner {
				grid-column: 1/13;
				gap: 6px;
				max-width: 615px;
				justify-self: center;
				width: 100%;
				.item {
					gap: 13px;
					.h6 {
						font-size: 14px;

						br {
							display: block;
						}
					}
					&-1,
					&-3 {
						width: 100px;
						flex-grow: unset;
					}

					&--img {
						height: 27.5px;

						&--text {
							font-size: 14px;
						}
					}
				}
			}
		}

		@media screen and (max-width: 875px) {
			padding-top: 50px;
		}

		@media screen and (max-width: 750px) {
			.banner {
				grid-column: 1/13;
			}
		}

		@media screen and (max-width: 650px) {
			.message {
				margin: 0 3.5vw 85px;
				grid-column: 1/13;

				.cta-group {
					flex-direction: row;
					margin-top: 34px;

					button {
						width: 100%;
						min-width: 140px;
					}
				}
			}
			.banner {
				grid-column: 1/13;
				max-width: 90vw;
				justify-content: space-between;

				&::before {
					width: 35%;
					clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 75px 100%);
				}

				.item {
					width: 80px;

					&-2 {
						flex-grow: 0;
						width: 50%;
						.item--img__wrapper {
							gap: 22px;
						}
					}
				}
			}
		}

		@media screen and (max-width: 525px) {
			.banner {
				flex-direction: column;
				gap: 10px;
				padding: 30px;
				margin: 90px 0 0;
				&::before {
					display: none;
				}

				&--heading {
					left: 0;
					transform: translate(42px, -50%);
				}

				.item {
					flex-direction: row;
					width: min-content;
					justify-content: flex-start;
					gap: 30px;
					padding: 12px;

					.h6 {
						order: 1;
						text-align: left;
						width: 100px;
						font-size: 13px;
					}
					&--img {
						height: 30px;

						&__wrapper {
							order: 2;
						}

						&--text {
							display: none;
						}
					}

					&-2 {
						.item--img__wrapper {
							min-width: 0px;
							width: auto;
						}
					}
					&-3 {
						background-color: ${$primarywhite};
						border-radius: 8px;
						padding-right: 30px;
					}
				}
			}
		}

		@media screen and (max-width: 450px) {
			.message {
				margin-bottom: 50px;
			}

			.banner {
				padding: 22px 20px;
				.item {
					gap: 15px;
				}
				.item-2 {
					.item--img__wrapper {
						gap: 11px;
					}
				}
			}
		}
		@media screen and (max-width: 350px) {
			.banner {
				.item {
					padding: 8px;

					.h6 {
						width: 95px;
					}
				}
			}
		}
	}

	@media screen and (max-width: 1700px) {
		.features-decor__circle-grid {
			transform: translate(calc(-90% + 7vw), 105%) rotate(150deg);
		}
	}

	@media screen and (max-width: 1250px) {
		.features-decor__single-circle {
			transform: translate(15%, 20%);
		}
	}

	@media screen and (max-width: 860px) {
		.features-decor__single-circle {
			transform: translate(15%, -20%);
		}
	}

	@media screen and (max-width: 625px) {
		.hero_wrapper {
			padding: 0 1vw;
		}
	}
`;
