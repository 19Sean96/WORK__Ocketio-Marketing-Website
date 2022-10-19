import {
	$primaryblack,
	$primarywhite,
	$secondaryblack,
	$secondarywhite,
} from "@lib/Colors";
import styled from "styled-components";

export default styled.section`
	margin-top: 145px;
	margin-bottom: 225px;
	justify-items: stretch;
	.bg {
		position: absolute;
		width: 100vw;
		height: 100%;
		background-color: ${$primaryblack};
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		z-index: 0;
		clip-path: polygon(0% 0vw, 100% 0%, 100% 100%, 0% 80%);
	}
	.section {
		&--heading {
			margin-bottom: 30px;
			position: relative;
			* {
				text-align: center;
				color: ${$primarywhite};
			}

			h3 {
				margin-bottom: 8px;
			}
		}
		&--body {
			position: relative;
			grid-row: 2/3;
			grid-column: 2/12;
			background-color: ${$secondaryblack};
			border-radius: 10px;
			padding: 50px 80px;
			gap: 4.8vw;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			justify-self: center;
			max-width: 90vw;
			border-top: 3px solid ${$primarywhite};
			border-bottom: 3px solid ${$primarywhite};
			svg {
				position: relative;
				transform: scale(1);
				transform-origin: center center;

				path {
					fill: ${$secondarywhite};
				}
			}
		}
	}

	@media (max-width: 1200px) {
		margin-top: 135px;
		margin-bottom: 20px;
		.section {
			&--heading {
				margin-bottom: 30px;
			}
		}
	}

	@media (max-width: 960px) {
		margin-top: 120px;
		margin-bottom: 60px;
		.section--body {
			padding: 35px 60px;

			svg {
				transform: scale(0.8);
			}
		}
	}

	@media (max-width: 750px) {
		.section--body {
			padding: 25px 45px;
			justify-content: center;
			flex-wrap: wrap;
			svg {
				transform: scale(0.95);
				width: 45%;
			}
		}
	}

	@media (max-width: 550px) {
		margin-top: 85px;
		margin-bottom: 50px;
	}

	@media (max-width: 425px) {
		.section--body {
			padding: 25px 15px;
			gap: 15px;
		}
	}
`;
