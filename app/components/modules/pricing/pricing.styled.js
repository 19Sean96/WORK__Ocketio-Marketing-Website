import {
	$bluelight,
	$mint,
	$pastelred,
	$primaryblack,
	$primarywhite,
	$secondaryblack,
} from "@lib/Colors";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";

const Section = styled.section`
	margin-top: 75px;
	padding-bottom: 0px;
	position: relative;

	.section {
		&--heading {
			margin-bottom: 65px;

			.h1 {
				font-weight: 600;
				margin-bottom: 6px;
				color: ${$primarywhite};
			}
			.p-lg {
				max-width: 500px;
				color: ${$primarywhite};
			}

			@media screen and (max-width: 875px) {
				margin-bottom: 40px;
			}
		}

		&--body {
			grid-column: 1/13;
			grid-row: 3/4;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			column-gap: 60px;
			row-gap: 16px;

			.price-toggle {
				position: relative;
				left: 50%;
				transform: translateX(-50%);
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				column-gap: 15px;
				color: ${$primarywhite};
				margin-bottom: 25px;

				.visually-hidden {
					visibility: hidden;
					display: none;
				}

				&--btn {
					width: 80px;
					height: 40px;
					border-radius: 100px;
					border: none;
					cursor: pointer;
					position: relative;
					transition: all 0.25s ease-in-out;

					&::before {
						content: "";
						position: absolute;
						top: 50%;
						right: 0;
						width: 30px;
						height: 30px;
						border-radius: 50%;
						transition: all 0.25s ease-in-out;
					}

					&.toggled {
						&__annual {
							background-color: ${$bluelight};
							&::before {
								transform: translate(-5px, -50%);
								background-color: ${$primarywhite};
								box-shadow: 10px 0px 4px rgba(1, 26, 50, 0.04),
									5px 0px 3px rgba(1, 26, 50, 0.13),
									2px 0px 2px rgba(1, 26, 50, 0.21),
									1px 0px 1px rgba(1, 26, 50, 0.25),
									0px 0px 0px rgba(1, 26, 50, 0.25);
							}
						}

						&__monthly {
							background-color: ${$primarywhite};
							&::before {
								transform: translate(-43px, -50%);
								background-color: ${$bluelight};
								box-shadow: -10px 0px 4px rgba(1, 26, 50, 0.04),
									-5px 0px 3px rgba(1, 26, 50, 0.13),
									-2px 0px 2px rgba(1, 26, 50, 0.21),
									-1px 0px 1px rgba(1, 26, 50, 0.25),
									-0px 0px 0px rgba(1, 26, 50, 0.25);
							}
						}
					}
				}

				&--label {
					font-size: 17px;
					&__annual {
						position: relative;

						&::after {
							position: absolute;
							width: 100%;
							color: ${$pastelred};
							content: "(save 10%)";
							font-size: 15px;
							margin-left: 8px;
							bottom: 1px;
							white-space: nowrap;
						}
					}
				}
			}

			@media screen and (max-width: 1080px) {
				gap: 20px;
			}

			@media screen and (max-width: 875px) {
				flex-direction: column;
				align-items: center;
				row-gap: 50px;
			}

			@media screen and (max-width: 450px) {
				.price-toggle {
					align-items: flex-start;
					&--label {
						&__annual {
							&::after {
								bottom: 0;
								left: 0;
								margin-left: 0;
								transform: translateY(17px);
							}
						}
					}
				}
			}
		}
		&--footer {
			grid-row: 4/5;
			grid-column: 1/13;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 33px;

			.h6 {
				font-weight: 600;
				margin-bottom: -2px;
				color: ${$primarywhite};
				font-size: 20px;
			}
			.p-sm {
				text-align: center;
				color: ${$primarywhite};
				font-family: "Poppins", sans-serif;
				font-weight: 600;

				a {
					color: ${$pastelred};
					text-decoration: none;
					text-align: center;
				}
			}
		}

		@media screen and (min-width: 2325px) {
			&--footer {
				margin-top: 8vw;
			}
		}
		@media screen and (min-width: 3069px) {
			&--footer {
				margin-top: 52px;

				.h6 {
					color: ${$primaryblack};
				}
			}
		}
	}
`;

const StyledCard = styled(ScrollAnimation)`
	position: relative;
	background-color: ${$secondaryblack};
	padding: 69px 55px 97px;
	border-radius: 10px;
	flex: 1 1 0px;
	min-width: 40%;
	max-width: 500px;
	justify-self: center;
	box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: stretch;

	.price-card {
		&--type {
			position: absolute;
			top: 0;
			left: 50%;
			transform: translate(-50%, -50%);
			font-size: 15px;
			padding: 4px 18px;
			border-radius: 15px;

			&__starter {
				background-color: ${$bluelight};
				color: ${$primarywhite};
			}

			&__essentials {
				background-color: ${$mint};
				color: ${$primaryblack};
			}
		}

		&--heading {
			text-align: center;
			width: 100%;
			padding: 0 15px;
			margin-bottom: 35px;
		}

		&--price {
			color: ${$primarywhite};

			* {
				font-family: "Poppins", sans-serif;
			}

			.price {
				font-size: 1em;
				font-size: clamp(28px, 1em, 38px);
				font-weight: 700;
			}

			.freq {
				font-size: 0.55em;
				font-size: clamp(14px, 0.55em, 16px);
				font-weight: 600;
			}
		}

		&--description {
			color: ${$primarywhite};
			font-size: 15px;
		}

		&--cta {
			width: 100%;
		}

		&--message {
			min-height: 90px;
			padding-bottom: 25px;
			border-bottom: 1px solid ${$secondaryblack};
		}

		&--features {
			margin-top: 60px;
			color: ${$primarywhite};
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 30px;
			.list__1 {
				flex-grow: 1;
			}

			h6 {
				margin-bottom: 16px;
				font-size: 17px;
			}

			ul li {
				display: flex;
				align-items: center;
				column-gap: 17px;
				margin-bottom: 15px;

				svg {
					fill: ${$pastelred};
					width: 22px;
					height: 22px;
					min-width: 22px;
					min-height: 22px;
				}

				.p-sm {
					font-size: 15px;
					color: ${$primarywhite};
				}
			}
		}
	}
	@media screen and (max-width: 875px) {
		max-width: 600px;
		width: 90vw;
		min-width: 250px;

		padding: 57.5px 45px 65px;
	}

	@media screen and (max-width: 625px) {
		padding: 52px 40px 72px;
		.price-card {
			&--description {
				width: min(300px, 90%);
				margin: 0 auto;
			}
		}
	}
	@media screen and (max-width: 450px) {
		padding: 48px 22px 42px;
	}
`;

const FAQSection = styled.section`
	margin-top: 75px;
	z-index: 1;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		z-index: -1;
		height: 75px;
		width: 100vw;
		background-color: ${$primarywhite};
	}
	.section {
		&--heading {
			margin-bottom: 34px;

			h2 {
				margin-bottom: 0px;
				text-align: center;
				color: ${$primarywhite};
			}
		}

		&--body {
			grid-row: 2/3;
			grid-column: 2/12;

			@media screen and (max-width: 700px) {
				grid-column: 1/13;
			}
		}
	}
`;

export { Section, StyledCard, FAQSection };
