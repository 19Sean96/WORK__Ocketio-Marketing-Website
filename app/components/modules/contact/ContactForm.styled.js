import { $bluemid, $gray1, $gray2, $primaryblack, $primarywhite, $secondarywhite } from "@lib/Colors";
import styled from "styled-components";

export default styled.section`
	margin-top: 29px;
	align-items: flex-start;
	grid-template-rows: min-content 1fr;
	position: relative;

	.bg {
		content: "";
		position: absolute;
		left: 50%;
		top: 0;
		transform: translate(-50%, 5px);
		z-index: 0;
		width: 101vw;
		height: 100%;
		background-color: ${$primaryblack};
		clip-path: polygon(0% 76%, 100% 30%, 100% 100%, 0% 100%);
	}

	.section {
		&--heading {
			grid-row: 1/2;
			grid-column: 2/12;
			align-items: center;
			padding-bottom: 60px;
			padding-top: 46px;
			margin-bottom: 0;

			* {
				text-align: center;
			}
			.h1 {
				font-weight: 600;
			}
			.p-lg {
				max-width: 500px;
			}
		}

		&--form {
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			column-gap: 30px;
			row-gap: 16px;

			&__wrapper {
				grid-row: 2/3;
				grid-column: 3/11;
				z-index: 11;
				padding: 40px 40px 55px;
				border: 3px solid ${$primaryblack};
				background: ${$primarywhite};
				border-radius: 10px;
				box-shadow: 0 3px 10px 0 rgb(8 15 52 / 4%);
				max-width: 925px;
				justify-self: center;
				box-shadow: 19px 23px 12px rgba(5, 5, 5, 0.03),
					10px 13px 10px rgba(5, 5, 5, 0.1), 5px 6px 7px rgba(5, 5, 5, 0.17),
					1px 1px 4px rgba(5, 5, 5, 0.2), 0px 0px 0px rgba(5, 5, 5, 0.2);
			}

			&--input {
				width: 100%;
				height: 51px;
				padding: 12px 16px 4px 21px;
				border: 1px solid ${$gray1};
				border-bottom-width: 3px;
				border-radius: 6px;
				border-radius: 4px 4px 2px 2px;
				box-shadow: 0 3px 15px 0 rgb(8 15 52 / 10%);
				background-color: ${$secondarywhite};

				&__wrapper {
					position: relative;
					display: flex;
					justify-content: stretch;
					&.half {
						width: calc(50% - 15px);
					}
					&.full {
						width: 100%;
					}

					textarea {
						height: 166px;
						min-height: 166px;
						max-height: 166px;
						min-width: 100%;
						padding-top: 18px;
					}

					select {
						appearance: none;
						option {
							color: ${$gray1};
						}
					}
				}

				&__label {
					font-family: "Noto Sans SemiCondensed";
					font-weight: 400;
					color: ${$gray1};
					position: absolute;
					top: 25px;
					left: 21px;
					transform: translate(0, -50%) scale(1);
					transform-origin: left center;
					opacity: 1;
					pointer-events: none;
					transition: 0.25s ease-in-out all;
					padding: 0 8px;
				}

				&:focus ~ label {
					transform: translate(0, calc(-50% - 15px)) scale(0.8);
				}

				&__caret {
					position: absolute;
					top: 50%;
					right: 30px;
					transform: translate(0, -50%) scaleX(1.225);
					transform-origin: right center;
					fill: ${$gray2};
					height: 18px;
					width: auto;
				}
			}

			&--footer {
				margin-top: 60px;
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				gap: 20px;

				#submit {
					width: 100%;
					border-radius: 3px;
					text-align: left;
					background-color: ${$bluemid};
					font-size: 18px;
					min-width: 200px;
					max-width: 350px;
					margin-left: auto;
				}

				.optInWrapper {
					flex-direction: column;
					align-items: flex-start;

					label[for="newsletterOptIn"] {
						position: relative;
						pointer-events: all;
						cursor: pointer;
						top: unset;
						left: unset;
						margin-left: 0;
						display: grid;
						grid-template-columns: 1em auto;
						gap: 12px;
						padding-left: 0;
						span {
							margin-left: 8px;
							color: ${$primaryblack};
							margin-top: -2px;
							font-weight: 500;
						}
					}

					input[type="checkbox"] {
						-webkit-appearance: none;
						appearance: none;
						background: ${$secondarywhite};
						margin: 0;
						font: inherit;
						color: ${$primaryblack};
						width: 22px;
						height: 22px;
						border: 3px solid ${$bluemid};
						border-radius: 2px;
						transform: translateY(-3px);
						display: grid;
						place-content: center;

						&::before {
							content: "";
							width: 12px;
							height: 12px;
							transform: scale(0);
							transition: 120ms transform ease-in-out;
							box-shadow: inset 18px 18px ${$primaryblack};
							background-color: ${$primaryblack};
							transform-origin: bottom left;
							clip-path: polygon(
								14% 44%,
								0 65%,
								50% 100%,
								100% 16%,
								80% 0%,
								43% 62%
							);
						}

						&:checked {
							&::before {
								transform: scale(1);
							}
						}

						&:focus {
							outline: 2px solid ${$primaryblack};
							outline-offset: 2px;
						}
					}

					.disclaimer {
						margin-left: 0;
						font-family: "Noto Sans SemiCondensed";
						font-weight: 500;
						font-size: 16px;
						color: ${$gray1};

						a {
							font-weight: 500;
							color: ${$bluemid};
						}
					}
				}
			}

			.has-value {
				label {
					transform: translate(0, calc(-50% - 15px)) scale(0.8);
				}
			}
		}

		@media (max-width: 1200px) {
			&--info {
				grid-column: 1/5;
			}
		}

		@media (max-width: 980px) {
			&--heading {
				border-bottom: 0;
				padding-right: 56px;
				padding-bottom: 0;
				align-self: center;

				h2 {
					margin-bottom: 16px;
				}
			}

			&--info {
				grid-column: 8/13;
				grid-row: 1/2;
				margin-top: 0;
				align-self: center;
			}

			&--form {
				&__wrapper {
					grid-column: 2/12;
					grid-row: 2/3;
					margin-top: 56px;
				}
			}
		}

		@media (max-width: 720px) {
			&--heading {
				border-right: 0;
				padding-right: 0;
				align-self: center;

				h2 {
					margin-bottom: 12px;
				}
			}

			&--info {
				grid-column: 1/12;
				grid-row: 2/3;
				margin-top: 42px;
				align-self: center;
				flex-direction: row;
			}

			&--form {
				&__wrapper {
					grid-column: 2/12;
					grid-row: 2/3;
					padding: 35px 27px 30px 27px;
				}

				&--input {
					&__wrapper {
						&.half {
							width: 100%;
						}
					}
				}
				&--footer {
					flex-direction: column;
					align-items: flex-start;

					#submit {
						margin-left: 0;
					}
				}
			}
		}

		@media (max-width: 475px) {
			&--heading {
				padding-top: 0;

				h2 {
					margin-bottom: 3px;
				}
			}

			&--info {
				grid-column: 2/12;
				flex-direction: column;
			}

			&--form {
				&__wrapper {
					grid-column: 1/13;
					margin: 30px 4vw 0;
				}

				&--input {
					&__wrapper {
						&.full,
						&.half {
							width: 100%;
							max-width: none;
						}
					}

					&__label {
						left: 16px;
					}

					&__caret {
						right: 20px;
						height: 15px;
					}
				}

				.has-value.with-caret {
					position: relative;

					&::before {
						pointer-events: none;
						content: "";
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						background: linear-gradient(
							to right,
							rgba(255, 255, 255, 0),
							rgba(255, 255, 255, 1) 80%
						);
					}
				}

				#submit {
					width: 100%;
				}
			}
		}
	}

	@media (min-width: 1920px) {
		padding-bottom: 1.9vw;
	}
`;
