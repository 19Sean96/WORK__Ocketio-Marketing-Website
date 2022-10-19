import { $primaryblack, $primarywhite } from "@lib/Colors";
import styled from "styled-components";

export default styled.main`
	background-color: ${$primaryblack};
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	justify-items: center;
	max-width: 100vw;
	position: relative;

	header {
		padding-top: 130px;
		color: ${$primarywhite};
		grid-column: 4/10;
	}

	.section {
		grid-column: 2/12;
		margin-top: 0;
		width: 1600px;
		max-width: 90vw;
		position: relative;
		z-index: 5;

		&--heading {
			grid-row: 1/2;
			position: relative;
			text-align: center;
		}

		&--body {
			display: grid;
			grid-template-columns: repeat(10, 1fr);
			grid-template-rows: auto;
			align-items: flex-start;
			grid-row: 2/3;
			grid-column: 1/13;
			gap: 20px;
		}

		@media (max-width: 850px) {
			&--body {
				grid-template-columns: 200px 1fr;
			}
		}

		@media (max-width: 750px) {
			&--body {
				grid-template-columns: 1fr;
				grid-template-rows: min-content auto;
				row-gap: 50px;
			}
		}
	}
`;
