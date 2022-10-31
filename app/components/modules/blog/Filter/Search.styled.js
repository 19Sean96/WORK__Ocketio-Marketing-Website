import { $mint, $primarywhite, $secondaryblack } from "@lib/Colors";
import styled from "styled-components";

export default styled.aside`
	border-radius: 10px;
	background-color: ${$secondaryblack};
	width: 400px;
	max-width: 100%;
	position: relative;
	transition: ease-out all 0.15s;
	border: 3px solid
		${({ isSticky }) => (isSticky ? $primarywhite : "transparent")};

	input {
		max-width: 100%;
		background-color: transparent;
		border: none;
		color: ${$primarywhite};
		padding: 25px 25% 25px 35px;
	}

	svg {
		width: 30px;
		height: 30px;
		fill: ${$mint};
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 35px;
	}

	@media screen and (max-width: 1050px) {
		input {
			padding: 20px 25% 20px 25px;
			font-size: 15px;
		}

		svg {
			right: 25px;
			width: 27.5px;
			height: 27.5px;
		}
	}
	@media screen and (max-width: 750px) {
		width: 100%;

		input {
			width: 100%;
			padding: 27.5px 75px 27.5px 30px;
		}
	}
    @media screen and (max-width: 500px) {
		input {
			padding: 20px 70px 20px 20px;
		}

        svg {
            width: 22px;
			height: 22px;
        }
	}
`;
