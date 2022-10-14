import NavList from "./list";

export default () => {
	return (
		<nav className="footer--nav">
			<NavList
				title="Product"
				links={[
					{
						href: "/features",
						text: "Features",
					},
					{
						href: "/pricing",
						text: "Pricing",
					},
				]}
			/>
			<NavList
				title="Company"
				links={[
					{
						href: "/",
						text: "Home",
					},
					{
						href: "/contact",
						text: "Contact",
					},
					{
						href: "/blog",
						text: "Blog",
					},
				]}
			/>
			<NavList
				title="Legal"
				links={[
					{
						href: "/privacy",
						text: "Privacy",
					},
					{
						href: "/terms",
						text: "Terms",
					},
				]}
			/>
		</nav>
	);
};
