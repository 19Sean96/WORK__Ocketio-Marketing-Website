import { useAppContext } from "@context/app";
import Link from "next/link";

export default ({ title, links }) => {
	const { footerDarkMode } = useAppContext();
	return (
		<div className="footer--nav--list">
			<h6
				className="h6"
				style={{
					color: footerDarkMode ? "#f5f5f5" : "#101010",
				}}>
				{title}
			</h6>
			<ul>
				{links.map((link, i) => (
					<li className="p-sm" key={i}>
						<Link href={link.href}>
							<a
								style={{
									color: footerDarkMode ? "#c8cccc" : "#333",
								}}>
								{link.text}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
