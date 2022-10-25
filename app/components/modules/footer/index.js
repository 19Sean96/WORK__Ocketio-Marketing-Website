import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "@elements/logo/Logo.styled";
import { BsLinkedin } from "react-icons/bs";
import { useAppContext } from "@context/app";
import StyledFooter from "./Footer.styled";
import { $primaryblack, $primarywhite } from "@lib/Colors";
import Nav from "./nav";

const Footer = () => {
	const router = useRouter();
	const currentYear = new Date().getFullYear();
	const { footerDarkMode } = useAppContext();
	return (
		<StyledFooter
			className="footer"
			id="footer"
			darkMode={footerDarkMode}
			pathname={router.pathname}>
			<div className="footer--top">
				<Link href="/">
					<a className="footer--logo">
						<Logo $fill={footerDarkMode ? $primarywhite : $primaryblack} />
					</a>
				</Link>
				<Nav />
			</div>
			<div
				className="footer--bot"
				style={{
					borderTopColor: footerDarkMode ? "#f5f5f5" : "#101010",
				}}>
				<h6
					className="footer--copyright h6"
					style={{
						color: footerDarkMode ? "#999" : "#666",
					}}>
					© {currentYear} Unwired Revolution
				</h6>
				<div className="footer--social__wrapper">
					<a
						href="https://www.linkedin.com/feed/"
						target="_blank"
						rel="noreferrer">
						<BsLinkedin
							style={{
								height: "25px",
								width: "auto",
								fill: footerDarkMode ? "#999" : "#666",
							}}
						/>
					</a>
				</div>
			</div>
		</StyledFooter>
	);
};

export default Footer;
