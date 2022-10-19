import styled from "styled-components";

export default styled.div`

	#landing-hero {
		margin-top: 46px;
		grid-column: 1/13;
		position: relative;
		align-items: flex-start;
		&-message {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			justify-self: center;
			grid-column: 1/6;
			grid-row: 1/2;
			margin-top: 8%;
			position: relative;
			z-index: 30;

			h1 {
				text-align: left;
				margin-bottom: 4px;
			}
			p {
				text-align: left;
				margin-right: 12.5%;
			}

			.cta-group {
				margin-top: 60px;
			}

			@media (max-width: 1250px) {
				margin-top: 6.5%;

				p {
					margin-right: 2.5%;
				}

				.cta-group {
					margin-top: 45px;
				}
			}

			@media (max-width: 1100px) {
				grid-column: 3/11;
				align-items: center;
				margin-top: 0;
				h1,
				p {
					text-align: center;
				}
			}

			@media (max-width: 820px) {
				grid-column: 2/12;

				h1 {
					margin-bottom: 11px;
				}

				.cta-group {
					flex-direction: column;
					gap: 15px;

					.btn {
						width: 50vw;
					}
				}
			}

			@media (max-width: 575px) {
				margin: 0 3.5vw;

				.cta-group {
					margin: 20px 2.5vw 0;

					.btn {
						width: 75vw;
					}
				}
			}
		}

		.image-group {
			grid-column: 6/13;
			grid-row: 1/2;
			height: 550px;
			margin-top: 0;
			position: relative;
			margin-left: 50px;
			max-width: 100%;
			overflow: visible;
			pointer-events: none;

			#heroImageSub {
				position: absolute;
				z-index: 10;
				transition: transform 3.5s cubic-bezier(0.22, 1, 0.36, 1);
				filter: drop-shadow(0 28px 60px rgba(0, 0, 0, 0.17));
			}
			#heroImageMain {
				overflow: visible !important;
				z-index: 5;
				position: absolute;
				top: 0;
				left: 0;
				transition: transform 3.5s cubic-bezier(0.22, 1, 0.36, 1);
				filter: drop-shadow(0 8px 4px rgba(0, 0, 0, 0.11))
					drop-shadow(0 16px 16px rgba(0, 0, 0, 0.17))
					drop-shadow(-4px 32px 32px rgba(0, 0, 0, 0.16));
			}

			@media (max-width: 1450px) {
				height: 38vw;
			}

			@media (max-width: 1200px) {
				height: 31vw;

				#heroImageMain {
					&.atTop {
						@include fadeMainImage(
							0,
							1,
							scale(1) translate3d(0, -20%, 0),
							scale(1) translate3d(0, 31px, 0)
						);
					}
				}
				#heroImageSub {
					&.atTop {
						@include fadeSubImage(
							0,
							1,
							scale(1) translate3d(0, -20%, 0),
							scale(0.95) translate3d(0, 22px, 0)
						);
					}
				}
			}

			@media (max-width: 1100px) {
				grid-row: 2/3;
				grid-column: 2/12;
				margin-left: 0;
				margin-top: 35px;
				padding: 0;

				#heroImageMain {
					&.atTop {
						@include fadeMainImage(
							0,
							1,
							scale(1.1) translate3d(0, -20%, 0),
							scale(1) translate3d(0, 31px, 0)
						);
					}
				}
				#heroImageSub {
					&.atTop {
						@include fadeSubImage(
							0,
							1,
							scale(1.35) translate3d(0, 50px, 0),
							scale(1.45) translate3d(0, 22px, 0)
						);
					}
				}
			}

			@media (max-width: 850px) {
				height: 37vw;

				#heroImageMain {
					&.atTop {
						@include fadeMainImage(
							0,
							1,
							scale(1.25) translate3d(-10%, -20%, 0),
							scale(1.2) translate3d(-10%, 85px, 0)
						);
					}
				}
				#heroImageSub {
					&.atTop {
						@include fadeSubImage(
							0,
							1,
							scale(1.5) translate3d(0, 75px, 0),
							scale(1.65) translate3d(0, calc(-12% + 46px), 0)
						);
					}
				}
			}

			@media (max-width: 575px) {
				height: 40vw;
				margin-top: 5px;
				#heroImageMain {
					&.atTop {
						@include fadeMainImage(
							0,
							1,
							scale(1.15) translate3d(-7%, -20%, 0),
							scale(1.1) translate3d(-7%, 85px, 0)
						);
					}
				}
				#heroImageSub {
					&.atTop {
						@include fadeSubImage(
							0,
							1,
							scale(1.6) translate3d(0, 75px, 0),
							scale(1.75) translate3d(0, calc(-12% + 46px), 0)
						);
					}
				}
			}
		}

		@media (max-width: 1200px) {
			padding-bottom: 78px;
		}

		@media (max-width: 575px) {
			margin-top: 95px;
		}
	}
`;
