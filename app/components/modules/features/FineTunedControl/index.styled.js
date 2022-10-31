import { $mint, $palemint, $primaryblack, $primarywhite } from "@lib/Colors";
import styled from "styled-components";

export default styled.section`
	position: relative;
	margin-top: -10px;
	padding-top: 255px;
	z-index: 0;
	.section {
		&--body {
			grid-row: 2/3;
			grid-column: 1/13;
			display: flex;
			position: relative;
			justify-content: space-between;
			align-items: center;
			max-width: 95vw;
			justify-self: center;
			gap: 8vw;
		}
		&--heading {
			position: relative;
			margin-bottom: 75px;
			* {
				color: ${$primarywhite};
			}
		}
	}

	.divider {
		position: absolute;
		width: 100vw;
		height: 500px;
		background-color: ${$palemint};
		top: 0;
		left: 50%;
		transform: translate(-50%, -30%);
		clip-path: polygon(0% 0%, 100% 50%, 100% 100%, 0% 100%);
	}

	.bg {
		position: absolute;
		width: 101vw;
		height: 105%;
		background-color: ${$primaryblack};
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		z-index: 0;
		clip-path: polygon(0% 10vw, 100% 0%, 100% 100%, 0% 100%);
	}

	.decor-circle {
		&::after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 50%;
			width: 115px;
			height: 115px;
			background-color: ${$palemint};
			transform: translate(-1.5vw, 200%);
			border-radius: 50%;
		}
	}

	.img-block {
		width: 90vw;
		max-width: 490px;
		min-width: 400px;
	}

	.text-blocks {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		gap: 60px;

		.text-block {
			width: calc(50% - 30px);

			.h5 {
				color: ${$mint};
				margin-bottom: 8px;
			}

			.p-sm {
				color: ${$primarywhite};
			}

			svg {
				width: 35px;
				height: auto;
				margin-bottom: 7px;
				fill: ${$primarywhite};
			}
		}
	}

	@media screen and (max-width: 1650px) {
		.decor-circle {
			width: 400px;
			height: 400px;
			transform: translate(-25vw, -9vw) rotate(-55deg);
		}
	}

	@media screen and (max-width: 1200px) {
		padding-top: 200px;
	}

	@media screen and (max-width: 1100px) {
		.section {
			&--body {
				gap: 4vw;
			}
		}

		.text-blocks {
			gap: 40px;

			.text-block {
				width: calc(50% - 20px);
			}
		}
	}

	@media (max-width: 975px) {
		padding-top: 150px;

		.section {
			&--heading {
				grid-column: 3/11;
			}
		}
		.img-block {
			min-width: 400px;
			width: 400px;
		}

		.text-blocks {
			gap: 35px;

			.text-block {
				width: 100%;

				svg {
					width: 30px;
					margin-bottom: 1px;
				}
				.h5 {
					margin-bottom: 3px;
				}
			}
		}

		.decor-circle {
			max-width: 20vw;
			max-height: 20vw;
			width: 300px;
			height: 300px;
			transform: translate(-5vw, 35vw) rotate(180deg);

			&::after {
				width: 75px;
				height: 75px;
			}
		}
	}

	@media (max-width: 790px) {
		.section {
			&--body {
				flex-direction: column;
			}

			&--heading {
				margin-bottom: 22px;
			}
		}

		.img-block {
			width: 80vw;
			min-width: 350px;
		}

		.text-blocks {
			margin-left: 0;
			margin-top: 22px;
			justify-content: center;

			.text-block {
				width: calc(50% - 20px);
			}
		}
		.decor-circle {
			transform: translate(-5vw, 55vw) rotate(175deg);
		}
	}

	@media (max-width: 575px) {
		padding-top: 105px;
		.section {
			&--heading {
				grid-column: 2/12;
			}
		}
		.img-block {
			grid-column: 2/12;
			min-width: 0;
			max-width: 90vw;
		}

		.text-blocks {
			grid-column: 2/12;
			grid-row: 3/4;
			margin-top: 44px;
			padding: 0;

			.text-block {
				position: relative;
				width: 90%;

				.h5,
				.p-sm {
					padding-left: 35px;
				}

				svg {
					position: absolute;
					top: 50%;
					transform: translate(-50%, -50%);
				}
			}
		}

		.decor-circle {

			&::after {
				transform: translate(-80vw, 300%);
			}
		}
	}
`;
