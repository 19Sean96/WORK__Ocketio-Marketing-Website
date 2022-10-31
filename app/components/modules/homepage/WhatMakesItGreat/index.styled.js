import { $pastelred, $primaryblack } from "@lib/Colors";
import styled from "styled-components";

export default styled.section`
	margin-top: 150px;

	.section {
		&--body {
			grid-column: 1/13;
			grid-row: 2/3;
			display: flex;
			flex-direction: column;
			row-gap: 45px;
			padding: 0;
			align-items: center;
			&--item {
				display: grid;
				grid-template-columns: repeat(12, 1fr);
				grid-template-rows: auto;
				max-width: 100%;

				.text-block {
					grid-column: 2/6;
					grid-row: 1/2;
					align-self: flex-end;

					h3 {
						margin-bottom: 12px;
					}
				}

				.checklist {
					grid-column: 2/6;
					grid-row: 2/3;
					margin-top: 44px;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					gap: 12px;
					&--item {
						display: flex;
						align-items: center;
						gap: 12px;

						.h5 {
							font-weight: 600;
							text-align: left;
						}

						&__icon {
							min-width: 30px;
							width: 30px;
							height: 30px;

							path {
								&:first-child,
								&:nth-child(2) {
									fill: ${$pastelred};
								}
								&:nth-child(3) {
									fill: ${$primaryblack};
								}
							}
						}
					}
				}

				.image__wrapper {
					grid-column: 7/12;
					grid-row: 1/3;
					align-self: center;
					width: 650px;
					max-width: 100%;

					svg g[id*="card"] {
						filter: drop-shadow(0 18px 16px rgba(20, 25, 43, 0.16));
						position: relative;
						transition: transform 3.5s cubic-bezier(0.22, 1, 0.36, 1);
					}
				}
				&.reversed {
					flex-direction: row-reverse;

					.text-block {
						grid-column: 8/12;
					}

					.checklist {
						grid-column: 8/12;
					}

					.image__wrapper {
						grid-column: 2/7;
					}
				}
			}

			.cta-group {
				justify-content: center;
				margin-top: 50px;
				column-gap: 20px;

				.cta {
					min-width: 235px;

					.btn {
						width: 100%;
					}
				}
			}
		}
	}

	@media screen and (max-width: 1525px) {
		margin-top: 100px;
	}

	@media screen and (max-width: 1250px) {
		.section {
			&--body {
				row-gap: 65px;

				&--item {
					.image__wrapper {
						grid-column: 6/13;
						padding: 0 5vw;
					}

					&:not(.reversed) {
						.text-block,
						.checklist {
							grid-column: 1/6;
							padding-left: 5vw;
						}
					}

					&.reversed {
						.image__wrapper {
							grid-column: 1/8;
						}
						.text-block,
						.checklist {
							grid-column: 8/13;
							padding-right: 5vw;
						}
					}
				}
			}

			&--heading {
				margin-bottom: 80px;
			}
		}
	}

	@media screen and (max-width: 1100px) {
		margin-top: 80px;
		.section {
			&--body {
				&--item {
					.checklist {
						margin-top: 33px;
						gap: 8px;
					}
					.text-block {
						.h3 {
							margin-bottom: 8px;
						}
					}

					&:not(.reversed) {
						.image__wrapper {
							padding: 0 5vw 0 10vw;
						}
						.text-block,
						.checklist {
							grid-column: 1/7;
							padding: 0 5vw 0 6vw;
						}
					}

					&.reversed {
						.image__wrapper {
							padding: 0 10vw 0 5vw;
						}
						.text-block,
						.checklist {
							grid-column: 7/13;
							padding: 0 6vw 0 5vw;
						}
					}
				}
			}
		}
	}

	@media screen and (max-width: 925px) {
		.section {
			&--body {
				&--item {
					.image {
						&__wrapper {
							width: 550px;
						}
					}
				}
			}
		}
			
	}

	@media screen and (max-width: 820px) {
		margin-top: 70px;

		.section {
			&--heading {
				grid-column: 3/11;
			}
			&--body {
				row-gap: 80px;
				&--item {
					&:not(.reversed),
					&.reversed {
						.text-block {
							grid-column: 1/11;
							padding: 0 0 0 5vw;
						}

						.checklist {
							grid-column: 7/13;
							padding: 0 5vw 0 0;
							align-self: center;
							margin-top: 0;
							gap: 16px;

							&--item {
								gap: 8px;

								&__icon {
									min-width: 24px;
									width: 24px;
									height: 24px;
								}
							}
						}

						.text-block {
							.p-sm {
								max-width: 75ch;
							}
						}

						.image__wrapper {
							grid-row: 2/3;
							grid-column: 1/7;
							padding: 40px 5vw 0 2.5vw;
							width: 60vw;
						}
					}
				}

				.cta-group {
					width: 80vw;
					min-width: 300px;
					justify-content: stretch;
					margin-top: 25px;

					.cta {
						flex-grow: 1;
					}
				}
			}
		}
	}

	@media screen and (max-width: 650px) {
		.section {
			&--body {
				&--item {
					&:not(.reversed),
					&.reversed {
						.text-block {
							grid-column: 2/12;
							padding: 0;
						}

						.checklist {
							grid-row: 2/3;
							grid-column: 2/11;
							padding: 0;
							margin-top: 2px;
							padding: 15px 0 35px;
						}

						.image__wrapper {
							grid-row: 3/4;
							grid-column: 2/11;
							padding: 0;
							width: 75vw;
						}
					}
				}
			}
		}
	}

	@media screen and (max-width: 575px) {
		.section {
			&--body {
				&--item {
					&.reversed,
					&:not(.reversed) {
						max-width: none;
						margin: 0 3.5vw;
					}
				}

				.cta-group {
					align-items: center;
					margin-top: 0px;
					margin-bottom: 0;
					width: calc(100% - 7vw);

					.cta {
						width: 100%;

						.btn {
							width: 100%;
						}
					}
				}
			}
			&--heading {
				grid-column: 2/12;
			}
		}
	}

	@media screen and (max-width: 420px) {
		.section {
			&--body {
				&--item {
					&.reversed,
					&:not(.reversed) {
						.image__wrapper {
							grid-column: 2/12;
						}
					}
				}
			}
		}
	}
`;
