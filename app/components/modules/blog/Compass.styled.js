import {
	$bluemid,
	$palemint,
	$primaryblack,
	$primarywhite,
	$secondaryblack,
} from "@lib/Colors";
import styled from "styled-components";

export default styled.nav`
	position: absolute;
	left: 0;
	bottom: 0;
	z-index: 1;
	transform: translate(0, calc(100% + 20px));
	color: ${$primaryblack};
	background-color: ${$palemint};
	padding: 20px 200px 20px 20px;
	max-width: 90vw;
	border-radius: 10px;
	display: flex;
	align-items: center;

	#home {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;

		svg {
			min-height: 25px;
			min-width: 25px;
			fill: ${$secondaryblack};
		}
	}
	.divider {
		position: relative;
		transform: scaleY(.65) translateY(10%);
		font-size: 11px;
		margin: 0 4px;
		min-width: 25px;
		min-height: 25px;
		fill: ${$bluemid};
	}
	.link {
		font-family: 'Noto Sans', sans-serif;
		font-size: 15px;
		font-weight: 500;
		cursor: pointer;
		color: inherit;
	}
`;
