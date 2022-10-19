import { $mint, $primaryblack, $primarywhite } from "@lib/Colors";
import styled from "styled-components";

export default styled.section`
	position: relative;
	margin-top: 75px;
	padding-top: 275px;

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
		}
		&--heading {
			color: ${$primarywhite};
			position: relative;
		}
	}

	.bg {
		position: absolute;
		width: 100vw;
		height: 100%;
		background-color: ${$primaryblack};
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		z-index: 0;
		clip-path: polygon(0% 10vw, 100% 0%, 100% 100%, 0% 100%);
	}

	.img-block {
		width: 82vw;
		max-width: 490px;
		min-width: 300px;
	}

	.text-blocks {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 60px;
		margin-left: 17px;

		.text-block {
			width: calc((100% / 2) - 60px);

			.h5 {
				color: ${$mint};
				margin-bottom: 8px;
			}

			.p-sm {
				color: ${$primarywhite};
			}

			svg {
				width: 40px;
				height: auto;
				margin-bottom: 5px;
				fill: ${$primarywhite};
			}
		}
	}
	@media (max-width: 975px) {
		.img-block {
			min-width: 400px;
			max-width: unset;
			width: 400px;
		}

		.text-blocks {
			padding-left: 25px;
			padding-right: 25px;
			grid-column: 6/13;
			gap: 20px;

			.text-block {
				width: 100%;

				svg {
					width: 33.3px;
					margin-bottom: 4px;
				}
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

		.text-blocks {
			margin-left: 0;
			margin-top: 22px;

			.text-block {
				width: calc((100% / 2) - 60px);
			}
		}
	}

	@media (max-width: 575px) {
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
				width: calc(100% - 60px);
			}

			svg {
				position: absolute;
				top: 50%;
				transform: translate(-50%, -50%);
			}

			.h6,
			.p-small {
				margin-left: 30px;
			}
		}
	}
`;
