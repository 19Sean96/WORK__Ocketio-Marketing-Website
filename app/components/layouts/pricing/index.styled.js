import styled from "styled-components";

export default styled.main`
	.decor {
		@media screen and (max-width: 1100px) {
			&--circle-grid__pricing {
				transform: translate(50%, 75%) rotate(45deg);
			}
			&--single-circle__pricing-1 {
				transform: translate(-25%, 50%);
			}
			&--single-circle__pricing-2 {
				transform: translate(2vw, -70vw);
			}
		}
		@media screen and (max-width: 875px) {
			&--circle-grid__pricing {
				transform: translate(30%, 125%) rotate(45deg);
			}
			&--single-circle__pricing-1 {
				transform: translate(125%, -110%);
				width: 400px;
				height: 400px;
				max-width: 45vw;
				max-height: 45vw;
			}
			&--single-circle__pricing-2 {
				transform: translate(2vw, -70vw);
				width: 400px;
				height: 400px;
				max-width: 45vw;
				max-height: 45vw;
			}
		}
		@media screen and (max-width: 750px) {
			&--circle-grid__pricing {
				transform: translate(30%, 85%) rotate(65deg);
			}
			&--single-circle__pricing-1 {
				transform: translate(145%, -110%);
			}
			&--single-circle__pricing-2 {
				transform: translate(-4vw, -70vw);
				width: 400px;
				height: 400px;
				max-width: 45vw;
				max-height: 45vw;
			}
		}
	}
`;
