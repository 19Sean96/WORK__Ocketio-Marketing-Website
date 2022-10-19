import styled from "styled-components";
import {
	$primarywhite,
	$primaryblack,
	$bluelight,
	$palemint,
	$secondaryblack,
} from "@lib/Colors";

export default styled.div`
	#features-hero {
		grid-column: 1/13;
		align-content: space-between;
		margin-top: 0;
		padding-top: 80px;
		position: relative;
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
		&-message {
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

		.image-group {
			align-self: center;
			position: relative;
			z-index: 5;
			display: grid;
			transform: translateX(4.25vw);

			&_wrapper {
				grid-column: 7/13;
				grid-row: 1/2;
			}

			&__image {
				transition: transform 3.5s cubic-bezier(0.22, 1, 0.36, 1);
			}

			#heroImageMain {
				left: 0;
				width: 75%;
				max-width: 360px;
				position: relative;
				filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.61))
					drop-shadow(0 0px 4px rgba(0, 0, 0, 0.63))
					drop-shadow(-4px 16px 64px rgba(0, 0, 0, 0.82));
			}

			#heroImageSubTop,
			#heroImageSubBot {
				width: 75%;
				max-width: 360px;
				position: absolute;
				filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.11))
					drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.23))
					drop-shadow(-16px 16px 32px rgba(0, 0, 0, 0.22));
			}

			#heroImageSubTop {
				left: 50%;
				top: 51.125%;
			}

			#heroImageSubBot {
				left: 45%;
				top: 82.5%;
			}
		}

		#supportedOS {
			grid-column: 1/9;
			grid-row: 3/4;
			padding: 22px 40px 19px;
			border-top: 3px solid ${$bluelight};
			background-color: ${$secondaryblack};
			border-radius: 10px;
			position: relative;

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
		}

		.banner {
			position: relative;
			z-index: 5;
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;
			gap: 10px;
			margin-top: 106px;
			margin-bottom: 42px;
			height: min-content;
			min-width: 800px;

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
					width: auto !important;
					height: 35px !important;
					min-width: 0 !important;
					min-height: 0 !important;
					fill: ${$primarywhite};
					color: ${$primarywhite};
					&__wrapper {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
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

		@media (max-width: 1250px) {
			.image-group {
				transform: translateX(0vw);

				&_wrapper {
					grid-column: 7/13;
				}

				#heroImageMain {
					max-width: 325px;
				}
				#heroImageSubTop,
				#heroImageSubBot {
					max-width: 325px;
				}
			}
		}

		@media (max-width: 1150px) {
			&-message {
				align-self: center;
				margin-right: 10px;
				.h1 {
					font-size: 38px;
					margin-bottom: 5px;
				}
				.p-lg {
					font-size: 17px;
					padding-right: 25px;
				}

				.cta-group {
					margin-top: 45px;
				}
			}
		}

		@media (max-width: 575px) {
			margin-top: 56px;

			&-message {
				margin: 0 3.5vw;
				grid-column: 1/13;
			}
			.banner {
				margin-top: 10px;

				.item {
					&-2 {
						margin-top: 11px;
						padding-top: 18px;
					}
				}
			}
			h2 {
				margin-top: -25px;
			}
			.cta-group {
				flex-direction: row;
				margin-top: 34px;

				button {
					width: 100%;
					min-width: 140px;
				}
			}
			.image-group {
				grid-column: 1/13;
				margin-top: 70px;
			}
		}

		@media (max-width: 450px) {
			.banner {
				margin-top: -60px;
				.item {
					width: 100%;

					&-1 {
						padding-top: 35px;
						margin-bottom: 0;
					}
					&-3 {
						order: 4;
						padding-top: 10px;
					}

					&:not(.item-2) {
						.item--img__wrapper {
							flex-direction: column;
							align-items: center;
						}
					}

					&-2 {
						padding: 25px 0;
						margin: 5px 0;

						&::before {
							width: 85%;
						}

						&::after {
							top: unset;
							bottom: 0;
							left: 50%;
							transform: translate(-50%, 0);
							height: 1px;
							width: 85%;
						}

						&__subitem {
							flex-direction: column;
							align-items: center;
						}
					}

					&-1,
					&-2,
					&-3 {
						max-width: 400px;
					}

					&--img {
						height: 45px !important;
						&__wrapper {
							gap: 2px;
							column-gap: 25px;
							justify-content: center;
							align-items: flex-start;
						}

						&--text {
							font-size: 12px;
							text-align: center;
						}
					}
				}
			}

			.image-group {
				margin-top: 75px;
				margin-bottom: 100px;
				#featuresHeroImageLeft {
					width: 92.5%;
					left: 50%;
				}
				#featuresHeroImageRight {
					width: 100%;
				}
			}
		}
	}

	@media (max-width: 1700px) {
		.features-decor__circle-grid {
			transform: translate(calc(-90% + 7vw), 105%) rotate(150deg);
		}
	}

	@media (max-width: 1300px) {
		.features-decor__single-circle {
			transform: translate(15%, 0%);
		}
	}
`;
