import styled from "styled-components";

export default styled.div`
	grid-column: 4/11;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	row-gap: 56px;
	column-gap: 30px;

	@media (max-width: 1250px) {
		grid-template-columns: 1fr;
	}

	@media (max-width: 850px) {
		grid-column: 2/3;
		row-gap: 18px;
	}
	@media (max-width: 750px) {
		grid-column: 1/2;
	}
`;
