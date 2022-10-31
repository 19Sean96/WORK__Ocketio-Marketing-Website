import { $pastelred, $primaryblack, $primarywhite } from "@lib/Colors";
import styled from "styled-components";

export default styled.section`
	margin-top: -80px;
	padding-top: 240px;
	position: relative;
	z-index: 12;

	.bg {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 200vw;
		-webkit-transform: translateX(-50%);
		-moz-transform: translateX(-50%);
		transform: translateX(-50%);
		height: 100%;
		z-index: -1;
		background-color: ${$primaryblack};
		clip-path: polygon(0% 0%, 100% 80px, 100% 100%, 0% 100%);
	}

	.section {
		&--heading {
			margin-bottom: 80px;
			h2,
			p {
				color: ${$primarywhite};
			}
		}
	}

	.card {
		background-color: transparent;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		border-radius: 6px;
		gap: 0px;
		padding: 40px 25px 53px;
		font-size: 20px;
		flex: 1 1 0%;

		&--icon {
			fill: ${$pastelred};
			width: 110px;
			height: 110px;
			position: relative;
			&#rocket {
				transform: rotate(45deg);
			}
		}
		&--text {
			max-width: 100%;
			margin-bottom: 0;
			margin: 25px 0 35px;
			text-align: center;

			* {
				color: ${$primarywhite};
			}
		}
		h3 {
			margin-bottom: 16px;
			font-weight: 600;
		}

		.btn {
			display: inline-block;
			text-decoration: none;
			margin-top: auto;
			text-align: center;
			width: 85%;
			max-width: 90vw;
		}
		&__wrapper {
			gap: 15px;
			justify-content: space-between;
			padding: 0 5vw;

			.divider {
				width: 1px;
				height: 225px;
				background-color: ${$primarywhite};
				align-self: center;
			}
		}

		&__image {
			filter: hue-rotate(145deg) brightness(90%);
		}
	}

	@media (max-width: 1200px) {
		padding-top: 200px;
		padding-bottom: 31px;

		.section {
			&--heading {
				grid-column: 3/11;
			}
		}
	}

	@media (max-width: 960px) {
		padding-top: 180px;

		.section {
			&--heading {
				margin-bottom: 40px;
			}
		}
		.card {
			flex-direction: row;
			width: 100%;
			max-width: 80vw;
			min-width: 300px;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
			padding: 20px 25px 42px;
			.btn {
				width: 100%;
				margin-left: 0;
				max-width: 400px;
				min-width: 300px;
			}

			&:nth-child(odd) {
				flex-direction: row-reverse;
			}

			&--text {
				flex-grow: 1;
				justify-self: flex-start;
				max-width: 75%;

				h3,
				p {
					text-align: left;
				}
			}

			&__wrapper {
				gap: 12px;
				flex-direction: column;
				align-items: center;
				grid-column: 2/12;

				.divider {
					height: 1px;
					width: 225px;
					background-color: ${$primarywhite};
					align-self: center;
				}
			}

			&__image {
				&__wrapper {
					width: 37.5%;
					padding-right: 5.2vw;
					align-self: flex-end;
				}
			}
		}
	}

	@media (max-width: 700px) {
		padding-top: 150px;
		.card {
			&--text {
				max-width: 42vw;
			}
		}
	}

	@media (max-width: 575px) {
		.card {
			width: 100%;
			min-width: 0px;
			padding-left: 0;
			padding-right: 0;
			padding: 0;
			&:nth-child(odd),
			&:nth-child(even) {
				flex-direction: column;

				.card {
					&--text {
						max-width: 100%;
						margin: 12px 0 30px;
						* {
							text-align: center;
						}
						.h3 {
							margin-bottom: 9px;
						}
					}

					&--icon {
						width: 80px;
						height: 80px;
					}
				}
			}

			.btn {
				min-width: 0px;
			}

			h5 {
				margin-bottom: 3px;
			}

			&__wrapper {
				gap: 27px;
			}

			&__image {
				&__wrapper {
					width: 40%;
					padding-right: 0vw;
					align-self: flex-end;
				}
			}

			&:nth-child(even) {
				.card__image__wrapper {
					padding-left: 0vw;
				}
			}
		}

		.section {
			&--heading {
				grid-column: 2/12;
			}
		}
	}
`;
