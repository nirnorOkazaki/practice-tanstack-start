import { Link } from "@tanstack/react-router";
import HeaderList from "@/components/layouts/Header/HeaderList";

export default function HeaderPC() {
	return (
		<section className="hidden md:block fixed top-0 left-0 w-full z-100">
			<div className="flex items-start justify-between w-[min(1248px,86.667vw)] mx-auto pt-[min(72px,5vw)]">
				<div>
					<Link to="/" className="w-[min(112px,7.778vw)] h-[min(27px,1.875vw)]">
						<img
							src="/img/nirnor-logo.svg"
							alt="nirnor logo"
							className="w-auto h-auto object-contain"
						/>
					</Link>
				</div>
				<div>
					<ul className="flex flex-col items-end gap-[min(4px,0.278vw)] w-fit h-fit">
						<li className="w-full">
							<HeaderList label="WORKS" to="/" />
						</li>
						<li className="w-full">
							<HeaderList label="ABOUT US" to="/" />
						</li>
						<li className="w-full">
							<HeaderList label="CONTACT" to="/" />
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
