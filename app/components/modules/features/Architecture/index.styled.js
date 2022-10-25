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

	.section--heading {
		grid-row: 3/4;
		margin-bottom: 27px;

		.p-large {
			color: ${$primaryblack};
			opacity: 0.75;
			max-width: 668px;
		}
	}

	.image_wrapper {
		grid-row: 4/5;
		grid-column: 1/13;
		margin-bottom: 40px;
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
		h6 {
			font-weight: 700;
			margin-bottom: 17px;
		}

		p {
			color: ${$gray1};
			opacity: 1;
		}
	}

	@media (min-width: 2160px) {
		margin-top: 10vw;
	}

	@media (max-width: 925px) {
		.text-blocks {
			column-gap: 30px;
		}
	}

	@media (max-width: 850px) {
		.text-blocks {
			flex-direction: column;
			row-gap: 25px;
		}

		.text-block {
			h6 {
				margin-bottom: 0;
			}
		}
	}

	@media (max-width: 525px) {
		.text-blocks {
			padding: 20px 20px 0;
		}
	}
`;
