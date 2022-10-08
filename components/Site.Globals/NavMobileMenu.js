import { useAppContext } from "../../Context";

const Menu = ({ menuOpen }) => {
	const { headerDarkMode } = useAppContext();
	const subRectColor = headerDarkMode ? "#898C98" : "#646772";
	const mainRectColor = headerDarkMode || menuOpen ? "#fff" : "#252939";
	return (
		<svg
			id="menuIcon--SVG"
			width="500"
			height="500"
			viewBox="0 0 500 500"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g id="menu-v2">
				<rect
					id="rect-1"
					x="217"
					y="117"
					width="200"
					height="54"
					rx="27"
					fill={subRectColor}
					style={{
						transformOrigin: "50% 50%",
						transition: ".31s ease-in-out all",
						opacity: menuOpen ? 0 : 1,
						transform: menuOpen ? "scaleY(0%)" : "scaleY(100%)",
					}}
				/>
				<rect
					id="rect-2"
					x="82"
					y="223"
					width="336"
					height="54"
					rx="27"
					fill={mainRectColor}
					style={{
						transformOrigin: "50% 50%",
						transition: ".34s ease-in-out",
						transform: menuOpen ? "rotate(45deg)" : "rotate(0deg)",
					}}
				/>
				<rect
					id="rect-3"
					x="147"
					y="329"
					width="270"
					height="54"
					rx="27"
					fill={subRectColor}
					style={{
						transformOrigin: "50% 50%",
						transition: ".34s ease-in-out transform, .22s ease-in-out opacity",
						transform: menuOpen
							? "rotate(-45deg) translate(-52px, -102px)"
							: "rotate(0deg) translate(0, 0)",
						opacity: menuOpen ? 0 : 1,
					}}
				/>
				<rect
					id="rect-4"
					x="181"
					y="300"
					width="168"
					height="27"
					rx="13.5"
					fill={subRectColor}
					style={{
						transform: menuOpen
							? "scale(2) rotate(-45deg) translate(-13px, -61px)"
							: "scale(1) rotate(-45deg) translate(-13px, -61px)",
						transformOrigin: "50% 50%",
						transition:
							".475s ease-in-out transform, .23s ease-in-out .12s opacity",
						opacity: menuOpen ? 1 : 0,
					}}
				/>
			</g>
		</svg>
	);
};

export default Menu;
