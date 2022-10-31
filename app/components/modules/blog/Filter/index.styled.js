import styled from "styled-components";

export default styled.nav`
	position: sticky;
	top: 75px;
	grid-column: 1/4;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 10px;
	max-width: 100%;

	@media screen and (max-width: 850px) {
		grid-column: 1/2;
	}

	@media screen and (max-width: 750px) {
		z-index: 2;
		top: 50px;
	}
`;
