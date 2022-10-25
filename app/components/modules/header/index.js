import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppContext } from "@context/app";
import Menu from "./MobileMenuToggle";
import Nav from "./Nav";
import Logo from "@elements/logo/Logo.styled";
import StyledHeader from "./Header.styled";
import Compass from "@modules/blog/Compass";
import { $primaryblack, $primarywhite } from "@lib/Colors";

const Header = () => {
	const [menuOpen, toggleMenuOpen] = useState(false);
	const { isMobile, headerDarkMode } = useAppContext();
	const router = useRouter();

	useEffect(() => {
		if (menuOpen) {
			toggleMenuOpen(false);
		}
	}, [router.asPath]);

	return (
		<>
			{isMobile && (
				<button
					id="menuIcon"
					onClick={(e) => toggleMenuOpen(!menuOpen)}
					aria-label={
						menuOpen ? "close mobile navigation" : "open mobile navigation"
					}>
					<Menu menuOpen={menuOpen} />
				</button>
			)}
			<div
				className="header__placeholder"
				style={{
					height: isMobile && menuOpen ? "52px" : "0px",
					margin: isMobile && menuOpen ? "25px auto" : "0",
				}}></div>
			<StyledHeader
				headerDarkMode={headerDarkMode}
				mobileAndMenuOpen={isMobile && menuOpen}
				pagePath={router.pathname}
				className="header__wrapper">
				{router.pathname == "/blog" && (
					<div className="decor--angle__blog decor"></div>
				)}
				{router.pathname == "/features" && (
					<div className="decor--angle__features decor"></div>
				)}
				{router.pathname == "/" && (
					<div className="decor--angle__homepage decor"></div>
				)}
				<header className="header">
					{router.pathname.includes("blog") && <Compass />}
					<div className="header--logo">
						<Link href="/">
							<a>
								<Logo
									$fill={
										headerDarkMode || (menuOpen && isMobile)
											? $primarywhite
											: $primaryblack
									}
								/>
							</a>
						</Link>
					</div>
					{!isMobile && <Nav menuOpen={menuOpen} />}
					{!isMobile && (
						<div className="header--cta__wrapper">
							<a
								href="#"
								id="login"
								aria-label="Log in to your account here"
								style={{
									color: headerDarkMode ? "#f5f5f5" : "#121212",
								}}>
								Login
							</a>
							<button
								className={`btn btn--filled ${
									headerDarkMode ? "btn--filled__darkmode" : ""
								}`}
								aria-label="Get started with the beta program">
								Try the Beta
							</button>
						</div>
					)}
				</header>
			</StyledHeader>
			{isMobile && (
				<Nav
					isMobile={isMobile}
					menuOpen={menuOpen}
					toggleMenuOpen={toggleMenuOpen}
					headerDarkMode={
						router.pathname === "/features" || router.pathname.includes("/blog")
					}
				/>
			)}
		</>
	);
};

export default Header;
