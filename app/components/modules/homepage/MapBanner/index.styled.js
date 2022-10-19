import { 
    $mint, 
    $pastelred, 
    $primaryblack, 
    $primarywhite 
} from "@lib/Colors";
import styled from "styled-components";

export default styled.section`
	margin-top: 0;
	column-gap: 15px;
	row-gap: 0;
	position: relative;
	grid-template-rows: minmax(150px, auto) auto;
	padding: 200px 0vw;
	.bg {
		content: "";
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 100vw;
		transform: translateX(-50%);
		height: 100%;
		z-index: 2;
		background-color: ${$primaryblack};
		clip-path: polygon(0% 6.2vw, 100% 0%, 100% 100%, 0% 90%);
	}

	.decor {
		&__circle {
			&-1 {
				position: absolute;
				right: 0;
				top: 0;
				z-index: 1;
				height: 24vw;
				width: 24vw;
				max-width: 455px;
				max-height: 455px;
				background-color: ${$mint};
				transform: translate(40%, -51%);
				border-radius: 50%;
			}
			&-2 {
				position: absolute;
				left: -100px;
				bottom: 0;
				z-index: 1;
				height: 24vw;
				width: 24vw;
				max-width: 455px;
				max-height: 455px;
				background-color: ${$pastelred};
				transform: translate(-25%, 62%);
				border-radius: 50%;
			}
		}
	}

	.banner {
		&--title {
			position: relative;
			z-index: 3;
			grid-column: 8/13;
			grid-row: 1/2;
			align-self: flex-end;
			color: ${$primarywhite};
			padding-left: 3vw;

			.h2 {
				font-weight: 600;
				padding-bottom: 13px;
			}
		}
		&--paragraph {
			position: relative;
			z-index: 3;
			grid-column: 8/13;
			grid-row: 2/3;
			align-self: flex-start;
			padding-left: 3vw;

			.btn {
				margin-top: 80px;
				background: ${$primarywhite};
				color: ${$primaryblack};
				border-color: ${$primarywhite};
				width: 275px;
			}

			.p-lg {
				color: ${$primarywhite};
			}
		}
		&--image {
			position: relative;
			z-index: 3;
			min-width: 500px;
			grid-column: 1/8;
			grid-row: 1/3;
			padding-right: calc(100vw / 18);
		}
	}

	@keyframes pulseInOut {
		0% {
			transform: scale(1);
		}

		100% {
			transform: scale(1.1);
		}
	}

	@media (max-width: 1600px) {
		padding: 200px 2.5vw;

		.banner {
			&--title,
			&--paragraph {
				padding-left: 0vw;
			}

			&--image {
				padding-right: 3vw;
			}
		}
	}

	@media (max-width: 1250px) {
		.banner {
			&--title {
				.h2 {
					padding-bottom: 8px;
				}
			}
			&--paragraph {
				.btn {
					margin-top: 50px;
				}
			}
		}
	}

	@media (max-width: 1080px) {
		padding: 225px 2.5vw 150px;
		grid-template-rows: min-content min-content min-content;
		row-gap: 30px;

		.banner {
			&--title {
				grid-row: 1/2;
				grid-column: 3/11;
				text-align: center;
			}
			&--paragraph {
				grid-row: 3/4;
				grid-column: 2/12;
				text-align: center;

				.btn {
					width: 50vw;
					min-width: 300px;
				}
			}
			&--image {
				grid-row: 2/3;
				grid-column: 2/12;
				padding: 0 5vw;
			}
		}
	}

	@media (max-width: 900px) {
		padding: 150px 2.5vw 150px;

		.bg {
			clip-path: polygon(0% 6.2vw, 100% 0%, 100% 100%, 0% 95%);
		}
	}

	@media (max-width: 675px) {
		padding: 130px 2.5vw 150px;

		.banner {
			&--title {
				grid-column: 2/12;
			}
			&--image {
				grid-column: 1/13;
				min-width: 0;
			}
		}
	}
	@media (max-width: 475px) {
		padding: 125px 2.5vw;

		.banner {
			&--title {
				grid-column: 1/13;

				.h2 {
					padding: 0 1vw;
				}
			}
			&--paragraph {
				grid-column: 1/13;

				.p-lg {
					padding: 0 1vw;
				}

				.btn {
					width: 90vw;
					min-width: 0;
				}
			}
		}
	}
`;
