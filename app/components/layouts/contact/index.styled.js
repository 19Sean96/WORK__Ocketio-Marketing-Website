import styled from "styled-components";

const StyledMain = styled.main`
	.decor-circle {
		&-1 {
			min-width: 420px;
			min-height: 420px;
		}
		&-2 {
			min-width: 400px;
			min-height: 400px;
		}
	}
	@media screen and (max-width: 1550px) {
		.decor-circle {
			&-1 {
				transform: translate(-10vw, 11%);
			}
			&-2 {
				transform: translate(15vw, 0);
			}
			&-3 {
				transform: translate(-3vw, 0);
			}
		}
	}
    @media screen and (max-width: 975px) {
		.decor-circle {
			&-1 {
				transform: translate(-10vw, -33%);
			}
			&-2 {
				transform: translate(15vw, -65%);
			}
		}
	}

    @media screen and (max-width: 700px) {
        .decor-circle {
            &-3 {
                transform: translate(-8vw, -7.5vw);
            }
        }
    }
    @media screen and (max-width: 525px) {
		.decor-circle {
			&-1 {
				transform: translate(-20vw, -100%);
                min-width: 320px;
			    min-height: 320px;
			}
			&-2 {
				transform: translate(25vw, -75%);
                min-width: 280px;
			    min-height: 280px;
			}
            &-3 {
                transform: translate(-15vw, 1vw);
                min-width: 210px;
			    min-height: 210px;
            }
		}
	}
`;

export default StyledMain;
