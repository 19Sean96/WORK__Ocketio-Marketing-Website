import styled from "styled-components";
import {
    $primaryblack,
    $gray1
} from '@lib/Colors'
export default styled.section`
	position: relative;
	z-index: 1;
	align-content: flex-start;
	align-items: flex-start;
	margin-top: 80px;
	padding-bottom: 35px;
	.section--heading {
		margin-bottom: 65px;
	}

	.image_wrapper {
		grid-row: 4/5;
		grid-column: 1/13;
		margin-bottom: 70px;
		padding: 0 50px;

		svg {
			max-width: 1244px;
		}
	}

	.text-blocks {
		grid-column: 1/13;
		grid-row: 5/6;
		display: flex;
		justify-content: space-between;
		padding: 25px 51px 0;
		column-gap: 60px;
	}

	.text-block {
		.h4 {
			font-weight: 700;
			margin-bottom: 8px;

			br {
				display: none;
			}
		}
	}

	@media (min-width: 2160px) {
		margin-top: 10vw;
	}

	@media (max-width: 1100px) {
		margin-top: 0;

		.text-blocks {
			column-gap: 35px;
			padding: 0 40px;
		}
	}

	@media (max-width: 1020px) {
		.text-block {
			.h4 {
				br {
					display: block;
				}
			}
		}
	}

	@media (max-width: 850px) {

		.image_wrapper {
			padding: 0 2.5vw;
		}
		.text-blocks {
			flex-direction: column;
			row-gap: 35px;
		}

		.text-block {
			.h4 {
				margin-bottom: 6px;

				br {
					display: none;
				}
			}
		}
	}

	@media (max-width: 525px) {

		.section--heading {
			margin-bottom: 25px;
		}

		.image_wrapper {
			margin-bottom: 35px;
		}
		.text-blocks {
			padding: 20px 20px 0;
		}
	}
`;
