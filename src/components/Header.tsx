import { Link } from "@tanstack/react-router";

export default function Header() {
	return (
		<header className="fixed w-full">
			<div className="w-[90%] mx-auto">
				<h2>
					<Link to="/">Practice Tanstack</Link>
				</h2>
			</div>
		</header>
	);
}
