import { $bluemid } from "@lib/Colors";
import styled from "styled-components";

export default styled.section`
	.section {
		&--heading {
			margin-bottom: 75px;
		}
		&--body {
			grid-row: 2/3;
			grid-column: 1/13;
			display: flex;
			gap: 60px;
			max-width: 95vw;
			justify-self: center;

			.text-blocks {
				flex-grow: 2;
				margin-top: 25px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				gap: 60px;
			}

			.text-block {
				display: grid;
				grid-template-rows: min-content 1fr;
				grid-template-columns: min-content 1fr;
				align-items: flex-end;
				gap: 8px;

				.h5 {
					grid-row: 1/2;
					grid-column: 2/3;
					width: 100%;
					align-items: center;
					color: ${$bluemid};
					br {
						display: none;
					}
				}
				p {
					grid-row: 2/3;
					grid-column: 2/3;
					align-self: flex-start;
				}

				svg {
					grid-row: 1/2;
					grid-column: 1/2;
					width: 40px;
					height: auto;
					transform-origin: 50% 100%;
					transform: translate(-6px, 6px);
				}
			}

			.image__wrapper {
				width: 85%;
				min-width: 500px;
				max-width: 650px;
			}
		}
	}

	@media (max-width: 1200px) {
		.section {
			&--heading {
				margin-bottom: 60px;
			}
			&--body {
				gap: 30px;
				align-items: stretch;

				.text-blocks {
					margin-top: 0;
					gap: 45px;
				}
				.text-block {
					.h5 {
						br {
							display: block;
						}
					}
					svg {
						transform: translate(-6px, 0);
					}
				}
				.image__wrapper {
					min-width: 420px;
				}
			}
		}
	}

	@media screen and (max-width: 1100px) {
		.section {
			&--heading {
				grid-column: 3/11;
			}
			&--body {
				display: grid;
				grid-column: 1fr 1fr;
				grid-row: 1fr 1fr;
				justify-items: center;
				.text-blocks {
					grid-row: 2/3;

					&_1 {
						grid-column: 1/2;
						margin-left: 5vw;
					}
					&_2 {
						grid-column: 2/3;
						margin-right: 5vw;
					}
				}
				.text-block {
					.h5 {
						br {
							display: none;
						}
					}
					svg {
						transform: translate(-6px, 6px);
					}
				}
				.image__wrapper {
					grid-column: 1/3;
					grid-row: 1/2;
				}
			}
		}
	}

	@media (max-width: 975px) {
		.section {
			&--heading {
				margin-bottom: 45px;
			}
			&--body {
				row-gap: 15px;

				.text-blocks {
					gap: 28px;
				}

				.text-block {
					.p-sm {
						margin-top: -6px;
					}
					svg {
						width: 30px;
					}
				}
			}
		}
	}

	@media (max-width: 790px) {
		.section {
			&--heading {
				margin-bottom: 10px;
			}
			&--body {
				.text-blocks {
					&_1 {
						margin-left: 0;
					}

					&_2 {
						margin-right: 0;
					}
				}

				.image__wrapper {
					width: 80vw;
					min-width: 350px;
				}
			}
		}
	}

	@media screen and (max-width: 630px) {
		.section {

			&--body {

				.text-block {
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					align-items: flex-start;
					gap: 4px;
					svg {
						transform: unset;
					}

					.p-sm {
						margin-top: -1px;
					}
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
				gap: 25px;
				.text-blocks {
					width: 100%;
					padding: 0 0 0 25px;
					justify-content: center;
					justify-self: center;
					max-width: 95vw;
					grid-template-rows: min-content min-content;
					grid-column: 1/3;
					gap: 25px;

					&_1 {
						grid-row: 2/3;
					}

					&_2 {
						grid-row: 3/4;
					}
				}

				.text-block {
					width: calc(100% - 40px);
					max-width: 95vw;

					.p-sm {
						max-width: 60ch;
					}
				}

				.image__wrapper {
					min-width: 0;
					width: 500px;
					max-width: 90vw;
				}
			}
		}
	}

	@media screen and (max-width: 400px) {
		.section {
			&--heading {
				grid-column: 1/13;
			}
		}
	}
`;
