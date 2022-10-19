import styled from "styled-components";

export default styled.main`
	.decor {
		@media (max-width: 940px) {
			&--circle-grid__pricing {
				transform: translate(50%, 75%) rotate(45deg);
			}
			&--single-circle__pricing-1 {
				transform: translate(-25%, -100%);
			}
			&--single-circle__pricing-2 {
				transform: translate(-7vw, -7vw);
			}
		}
	}
`;
