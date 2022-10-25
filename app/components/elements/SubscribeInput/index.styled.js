import { $gray4, $palemint, $pastelred, $primaryblack } from "@lib/Colors";
import styled from "styled-components";

export default styled.section`
	position: relative;
	display: flex;
	z-index: 1;
	flex-direction: column;
	align-items: center;
	row-gap: 43px;
	padding: 120px 52px;
	margin-top: 80px;
	max-width: 1150px;
	width: 80vw;
	grid-column: 1/13;

	.emailIntake-decor {
		&-1,
		&-2 {
		}

		@media (max-width: 775px) {
			&-1 {
				transform: translate(-35vw, -35%);
			}
		}
		@media (max-width: 565px) {
			&-1 {
				transform: translate(-15vw, -45%);
				min-height: 150px;
				min-width: 150px;
			}
		}
		@media (max-width: 420px) {
			&-1 {
				transform: translate(-15vw, -60%);
			}
		}
	}

	.bg {
		content: "";
		position: absolute;
		z-index: -1;
		top: 0;
		left: 50%;
		transform: translate(-50%);
		width: 100vw;
		height: 100%;
		background-color: ${$palemint};
		clip-path: polygon(0% 4.4vw, 100% 0%, 100% 100%, 0% 100%);
	}

	.section {
		&--heading {
			position: relative;
			z-index: 3;
			max-width: 450px;
			margin-bottom: 0;
			display: flex;
			flex-direction: column;
			align-items: stretch;
			gap: 12px;
			* {
				text-align: center;
				margin-left: 0;
				color: ${$primaryblack};
			}
			h3 {
				margin-bottom: 0;
			}
		}

		&--form {
			width: 100%;
			position: relative;
			flex-grow: 1;

			&__wrapper {
				position: relative;
				z-index: 3;
				flex-grow: 1;
				display: flex;
				align-items: center;
				max-width: 740px;
				width: 75vw;
			}
			&--input {
				height: 67px;
				padding: 8px 160px 0px 63px;
				border-radius: 10px;
				border: 3px solid ${$primaryblack};
				box-shadow: 0 2px 8px rgba(20, 25, 43, 0.06);
				width: 100%;
				min-width: 475px;
				&__wrapper {
					position: relative;
				}

				&__icon {
					position: absolute;
					width: 30px;
					height: auto;
					left: 15px;
					top: 50%;
					transform: translateY(-50%);
					fill: ${$pastelred};
				}

				&__label {
					position: absolute;
					top: 50%;
					left: 60px;
					transform: translate(0, -50%);
					transform-origin: left center;
					color: ${$gray4};
					pointer-events: none;
					background-color: rgba(255, 255, 255, 0);
					transition: 0.25s ease-in-out all;
					padding: 0 8px;
					font-size: 18px;
				}

				&:focus ~ label {
					transform: translate(0, calc(-50% - 17px)) scale(0.75);
				}
			}

			.has-value {
				label {
					transform: translate(0, calc(-50% - 17px)) scale(0.75);
				}
			}

			#submit {
				position: absolute;
				right: 0;
				top: 0;
				font-size: 18px;
				padding: 16px 28px;
				height: 100%;
				width: 200px;
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:hover,
				&:active,
				&:focus {
					transform: scale(1) translateY(0);
				}
			}
		}
	}

	@media (max-width: 820px) {
		padding: 85px 0px 90px;
		width: 85vw;
		min-width: 275px;
		row-gap: 30px;
		.section {
			&--heading {
				gap: 6px;
			}

			&--form {
				&__wrapper {
					width: 100%;
				}

				&--input {
					min-width: 0;
					padding: 8px 170px 2px 48px;
					&__icon {
						width: 26px;
						left: 14px;
					}

					&__label {
						left: 43px;
					}
				}

				#submit {
					padding: 16px 20px;
					min-width: 0;
					width: 170px;
				}
			}
		}
	}

	@media (max-width: 575px) {
		padding: 75px 0;
		margin-top: 110px;
		width: 95vw;
		.section {
			&--heading {
				gap: 2px;
			}

			&--form {
				&--input {
					height: 63px;

					&__label {
						top: 31px;
					}
				}
			}
		}
	}
	@media (max-width: 450px) {
		.section {
			&--form {
				&--input {
					font-size: 14px;
					padding: 8px 110px 2px 48px;

					&__label {
						font-size: 15px;
					}
				}
				#submit {
					font-size: 15px;
					padding: 10px 4px;
					width: 110px;
				}
			}
		}
	}
`;
