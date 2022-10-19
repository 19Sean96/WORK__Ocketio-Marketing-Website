import { $bluemid } from "@lib/Colors";
import styled from "styled-components";

export default styled.section`
	.section {
		&--body {
			grid-row: 2/3;
			grid-column: 1/13;
			display: flex;
			column-gap: 68px;
			row-gap: 60px;
			max-width: 95vw;
			justify-self: center;

			.text-blocks {
				flex-grow: 2;
				margin-top: 25px;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				gap: 60px;
			}

			.text-block {
				display: grid;
				grid-template-rows: min-content 1fr;
				grid-template-columns: min-content 1fr;
				align-items: center;
				column-gap: 9px;
				row-gap: 0px;

				.h5 {
					grid-row: 1/2;
					grid-column: 2/3;
					width: 100%;
					align-items: center;
					color: ${$bluemid};
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
					align-self: flex-start;
				}
			}

			.image__wrapper {
				width: 85%;
				min-width: 500px;
				max-width: 650px;
			}

			@media (max-width: 1200px) {
				justify-content: center;
				align-items: center;
				display: grid;
				grid-template-columns: 1fr 1fr min-content;
				grid-template-rows: 1fr;
				column-gap: 30px;
				.image__wrapper {
					grid-column: 3/4;
					align-self: center;
					margin-left: 20px;
					min-width: 420px;
				}
				.text-blocks {
					order: 1;
					height: 100%;
					display: grid;
					grid-template-columns: 1fr;
					grid-template-rows: 1fr 1fr;

					&_1 {
						grid-column: 1/2;
						grid-row: 1/2;
					}

					&_2 {
						grid-column: 2/3;
						grid-row: 1/2;
					}
				}

				.text-block {
					grid-template-columns: 1fr;
					grid-template-rows: min-content min-content 1fr;
					svg {
						grid-column: 1/2;
						grid-row: 1/2;
						transform: unset;
						margin-bottom: 9px;
					}

					h6 {
						grid-column: 1/2;
						grid-row: 2/3;
					}
					p {
						grid-column: 1/2;
						grid-row: 3/4;
					}
				}
			}

			@media (max-width: 975px) {
				column-gap: 3vw;
				row-gap: 20px;
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-template-rows: auto;

				.text-blocks {
					gap: 20px;
					margin-top: 0;
					padding: 0 25px;
					&_1 {
						grid-column: 1/2;
						grid-row: 1/2;
					}

					&_2 {
						grid-column: 1/2;
						grid-row: 2/3;
					}

					.h6 {
						margin-bottom: -7px;
					}
				}

				.text-block {
					column-gap: 14px;
					row-gap: 7px;
					grid-column: 1/2;

					svg {
						width: 33.3px;
						align-self: flex-end;
						margin-bottom: 0;
					}
				}

				.image__wrapper {
					grid-row: 1/5;
					grid-column: 2/3;
					align-self: center;
				}
			}

			@media (max-width: 790px) {
				grid-template-columns: 1fr 1fr;
				grid-template-rows: min-content 1fr;
				justify-content: center;
				justify-items: center;
				column-gap: 20px;
				.text-blocks {
					width: calc(100% - 60px);
					padding: 0;
					grid-row: 2/3;

					&_1 {
						padding-left: 25px;
						grid-column: 1/2;
						justify-self: flex-end;
					}

					&_2 {
						padding-right: 25px;
						grid-column: 2/3;
						justify-self: flex-start;
					}
				}

				.image__wrapper {
					grid-row: 1/2;
					grid-column: 1/3;
					margin: 0;
				}
			}

			@media (max-width: 575px) {
				row-gap: 20px;
				grid-template-rows: min-content min-content min-content;

				.text-blocks {
					width: 100%;
					grid-column: 1/3;
					padding: 0 0 0 25px;
					justify-content: center;
					justify-self: center;
					max-width: 95vw;
					grid-template-rows: min-content min-content;

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
					grid-template-columns: min-content 1fr;
					grid-template-rows: min-content 1fr;
					margin-left: -1.75vw;

					svg {
						grid-column: 1/2;
						grid-row: 1/3;
						align-self: center;
					}
					h6 {
						grid-column: 2/3;
						grid-row: 1/2;
					}
					p {
						grid-column: 2/3;
						grid-row: 2/3;
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
`;
