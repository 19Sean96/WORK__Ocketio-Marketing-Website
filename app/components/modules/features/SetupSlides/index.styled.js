import {
	$bluelight,
	$gray4,
	$primaryblack,
	$primarywhite,
	$secondaryblack,
	$secondarywhite,
} from "@lib/Colors";
import styled from "styled-components";

export default styled.section`
	justify-items: stretch;
	.section {
		&--body {
			grid-row: 2/3;
			grid-column: 1/13;
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			justify-self: stretch;
			flex-wrap: wrap;
			gap: 25px;
			position: relative;
			width: 95vw;
			max-width: 1260px;
			margin: 0 auto;

			.tabs {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				row-gap: 18px;
				margin-left: 2.5%;
				width: 95%;
				&__wrapper {
					width: 44%;
					max-width: 600px;
				}
				.tab {
					display: flex;
					align-items: center;
					justify-content: flex-start;
					gap: 20px;
					width: 100%;
					max-width: 600px;
					border: ${$gray4} 1px solid;
					border-radius: 8px;
					padding: 22px 19px 22px 15px;
					transition: 0.2s ease-in-out all;
					cursor: pointer;

					&--outer {
						display: flex;
						align-items: center;
						justify-content: stretch;
						gap: 25px;
						width: 100%;
					}

					&--num {
						font-size: 19px;
						font-weight: 600;
						width: 60px;
						text-align: center;
						position: relative;
						z-index: 10;
						margin: 0;
					}
					&--text {
						.h6 {
							font-size: 20px;
							font-weight: 500;
						}
						.p-sm {
							color: ${$secondaryblack};
						}
					}
				}

				&--mobile {
					display: none;
				}
			}

			.display {
				position: relative;
				flex-grow: 1;
				align-self: stretch;
				padding: 0 3px;
				margin-top: 11px;

				.slideshow {
					position: relative;
					width: 100%;
					height: 130%;
					display: flex;
					justify-content: center;
					align-items: flex-start;
					&--item {
						transition: 0.35s ease-in-out all;
						max-height: 100%;
						width: 100%;
						&__wrapper {
							position: absolute;
							top: 0%;
							left: 50%;
							width: 100%;
							height: min-content;
							max-height: 100%;
							transform: translate(-50%, 0%);
							display: flex;
							justify-content: center;
							align-items: safe center;
						}
					}

					@media (max-width: 1280px) {
						height: 114%;
					}
					@media (max-width: 875px) {
						height: 100%;
						&--item {
							position: relative;
							object-position: center;
						}
					}
				}

				// @media
			}

			.slides-number-group {
				display: none;
				width: 90vw;
				justify-content: center;
				gap: 2vw;
				&--item {
					font-size: 24px;
					border-radius: 50%;
					padding: 8px;
					width: 52px;
					height: 52px;
					background-color: #fff;
					color: ${$secondaryblack};
					border: 2px solid ${$secondaryblack};
				}
			}

			.cta-group {
				position: relative;
				justify-content: center;
				align-items: center;
				flex-grow: 1;
				width: 100%;
				position: relative;
				margin-top: 117px;
				padding: 35px 0;
				column-gap: 32px;

				&::before {
					content: "";
					position: absolute;
					top: 0;
					left: 50%;
					transform: translateX(-50%);
					width: 100vw;
					height: 100%;
					background-color: ${$bluelight};
				}

				.btn--bordered {
					background-color: ${$bluelight};
				}
			}
			&--heading {
				margin-bottom: 63px;
				.p-large {
					color: ${$primaryblack};
					opacity: 1;
					max-width: 872px;
					width: 100%;
				}
			}
		}
	}
	@media (max-width: 1450px) {
		.section {
			&--body {
				.cta-group {
					margin-top: 65px;
				}
			}
		}
	}

	@media (max-width: 1150px) {
		.section {
			&--body {
				column-gap: 20px;
				.tabs {
					.tab {
						padding: 17px 18px 17px 15px;
						gap: 12px;

						&--num {
							font-size: 17px;

							&::before {
								width: 42px;
								height: 42px;
							}
						}

						&--text {
							.h6 {
								font-size: 18px;
							}
							.p-sm {
								font-size: 14px;
							}
						}
					}
				}
			}
		}
	}
	@media (max-width: 1080px) {
		margin-top: 145px;
		.section {
			&--heading {
				grid-column: 3/11;
			}
			&--body {
				.tabs {
					&__wrapper {
						width: 40%;
					}
				}
			}
		}
	}
	@media (max-width: 1000px) {
		.section {
			&--body {
				column-gap: 10px;
				.tabs {
					margin-left: 0;

					.tab {
						padding: 15px 10px 15px 9px;
						gap: 8px;

						&--text {
							.h6 {
								font-size: 17px;
							}
							.p-sm {
								font-size: 13px;
							}
						}

						&--num {
							font-size: 15px;

							&::before {
								width: 37px;
								height: 37px;
							}
						}
					}
				}

				.display {
					min-width: 400px;
					min-height: 400px;
				}
			}
		}
	}

	@media (max-width: 875px) {
		margin-top: 100px;
		.section {

			&--body {
				justify-content: center;
				align-items: center;
				position: relative;
				flex-direction: column;

				.tabs {
					position: relative;
					z-index: 5;
					justify-content: center;
					width: 100%;

					&__wrapper {
						width: calc((100vw / 12) * 8);
						min-width: 280px;
						order: 1;
						z-index: 101;
					}

					.tab {
						position: absolute;
						top: 0;
						left: 0;

						&--outer {
							position: absolute;
							top: 0;
							left: 50%;
							max-width: 400px;
							transform: translateX(-50%);
						}
					}
				}

				.display {
					margin-inline: auto;
					margin-top: 85px;
					margin-bottom: 35px;
					width: 75vw;
					min-height: 290px;
					min-width: 290px;
					max-width: none;
					max-height: none;
					order: 2;
					aspect-ratio: 337/288;
					transform: none;
				}

				.slides-number-group {
					display: flex;
					position: absolute;
					justify-content: space-between;
					z-index: 100;
					top: 20px;
					left: 50%;
					transform: translate(-50%, 0);
					max-width: 520px;

					&--item {
						font-size: 20px;
						border-radius: 50%;
						width: 42px;
						height: 42px;
					}
				}

				.cta-group {
					order: 3;
					margin-top: -15px;
					transform: translateX(0);
					margin-left: 0;
					align-items: center;
				}
			}
		}
	}

	@media (max-width: 575px) {
		.section {
			&--heading {
				grid-column: 2/12;
			}
			&--body {
				.tabs {
					&__wrapper {
						width: 95%;
						order: 2;
						margin-bottom: 110px;
						margin-top: -20px;
					}
					.tab {
						padding: 12px 15px 12px 10px;
						gap: 2px;
						&--outer {
							display: flex;
							align-items: center;
							justify-content: stretch;
							gap: 20px;
							width: 100%;
						}

						&--text {
							h6 {
								font-weight: 800;
							}
						}
					}

					&--mobile {
						display: block;
						position: fixed;
						z-index: 1000;
						width: 95vw;
						bottom: 2.5vw;
						left: 50%;
						background: transparent;
						display: flex;
						justify-content: space-between;
						align-items: stretch;
						column-gap: 8px;
						transition: 0.125s ease-in-out all;

						&--btn {
							background-color: ${$primarywhite};
							display: flex;
							flex-direction: row;
							align-items: center;
							justify-content: center;
							gap: 0px;
							padding: 14px;
							border: none;
							border-radius: 4px;
							box-shadow: 0 -5px 14px rgba(0, 0, 0, 0.19);
							cursor: pointer;
							border: 2px solid ${$secondaryblack};
							background-color: ${$secondaryblack};
							svg {
								width: 30px;
								height: 30px;
								fill: ${$secondarywhite};
							}

							.tab--num {
								font-weight: 600;
								font-size: 13px;
								color: ${$secondarywhite};
								pointer-events: none;
								width: 50px;
								text-align: center;
								position: relative;
								z-index: 10;

								&::before {
									content: "";
									z-index: -1;
									position: absolute;
									top: 50%;
									left: 50%;
									transform: translate(-50%, -50%);
									background-color: transparent;
									border: 2px solid ${$secondarywhite};
									border-radius: 50%;
									width: 32px;
									height: 32px;
									pointer-events: none;
								}
							}
						}

						&__left {
							flex-direction: row-reverse;
						}
					}
				}

				.display {
					width: 90vw;
					margin-top: 0;
					order: 1;
				}

				.slides-number-group {
					display: none;
				}

				.cta-group {
					width: 95vw;

					.cta {
						margin: 0 2.5vw;
						width: calc(100% - 5vw);
					}
				}
			}
		}
	}

	@media (max-width: 420px) {
		.section {
			&--body {
				.tabs {
					&__wrapper {
						width: 85vw;
					}

					.tab {
						padding: 10px 12px 10px 2px;
						gap: 0;

						&--num {
							font-size: 15px;

							&::before {
								width: 32px;
								height: 32px;
							}
						}
					}
				}
				.slides-number-group {
					top: 0px;
					max-width: 100px;
					transform: translate(-50%, -110%);
				}
			}
		}
	}

	@media screen and (max-width: 375px) {
		.section {
			&--heading {
				grid-column: 1/13;
			}
			&--body {
				.display {
					margin-bottom: 0;
				}
			}
		}
	}
`;
