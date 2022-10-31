import { $mint, $primarywhite, $secondaryblack } from "@lib/Colors";
import styled from "styled-components";

const Item = styled.li`
	button {
		position: relative;
		padding: 10px 0px 10px 10px;
		margin: 0 0 6px 0;
		text-align: left;
		width: 100%;
		font-family: "Poppins", sans-serif;
		font-weight: 600;
		color: ${$primarywhite};
		font: inherit;
		cursor: pointer;
		background: none;
		border: none;
		outline: inherit;

		&::before {
			content: "";
			position: absolute;
			left: -5px;
			top: 50%;
			transform: translateY(-50%);
			width: 2px;
			height: ${({ active }) => (active ? "60%" : "0%")};
			background-color: ${({ active }) => (active ? $mint : $primarywhite)};
			transition: all ease-in-out 0.15s;
		}
		&:hover {
			&::before {
				height: 60%;
			}
		}

		@media screen and (max-width: 1050px) {
			padding: 7px 0 7px 5px;
			margin: 0 0 4px 0;
		}

		@media screen and (max-width: 750px) {
			padding: 7px;
			font-size: 15px;

			&::before {
				left: 0;
				top: 100%;
				width: ${({ active }) => (active ? "100%" : "0%")};
				height: 3px;
			}

			&:hover {
				&::before {
					width: 100%;
					height: 3px;
				}
			}
		}
		@media screen and (max-width: 420px) {
			margin-bottom: 2px;
			padding: 4px;
			font-size: 13px;
		}
		@media screen and (max-width: 350px) {
			margin-bottom: 2px;
			padding: 3px;
			font-size: 12px;
		}
	}
`;

const Nav = styled.ul`
	background-color: ${$secondaryblack};
	padding: 30px 50px 40px 30px;
	list-style: none;
	border-radius: 10px;
	width: 250px;
	max-width: 100%;
	transition: ease-out all 0.15s;
	border: 3px solid
		${({ isSticky }) => (isSticky ? $primarywhite : "transparent")};

	@media screen and (max-width: 1050px) {
		padding: 25px 30px 30px 25px;
	}
	@media screen and (max-width: 750px) {
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding: 27.5px 30px;
	}
	@media screen and (max-width: 500px) {
		justify-content: center;
		gap: 6px;
		padding: 16px 4px;
	}
`;

export { Item, Nav };
