import { Link } from "@tanstack/react-router";
import { useState } from "react";

export default function HeaderSP() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleClick = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<section className="block md:hidden">
			{/* Fixed Menu */}
			<div className="fixed top-0 left-0 w-full z-[9999] pointer-events-none">
				<div className="flex items-center justify-between w-[min(327px,87.2vw)] mx-auto py-[min(32px,8.533vw)]">
					{/* Logo */}
					<div>
						<Link to="/" className="block w-[min(80px,21.333vw)] h-[min(19px,5.067vw)]">
							{isOpen ? (
								<img src="/img/nirnor-logo-white.svg" alt="nirnor logo white" className="w-full h-full object-contain" />
							) : (
								<img src="/img/nirnor-logo.svg" alt="nirnor logo" className="w-full h-full object-contain" />
							)}
						</Link>
					</div>
					{/* Button */}
					<div>
						<button type="button" onClick={handleClick} className="relative w-[min(24px,6.4vw)] h-[min(6px,1.6vw)] my-[min(6.5px,1.733vw)] cursor-pointer pointer-events-auto">
							<span
								className={`flex absolute w-full h-px duration-300 ${isOpen ? "bg-[#eaeaea] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rotate-[45deg]" : "bg-[#3c3c3c] top-0 left-0"}`}
							></span>
							<span
								className={`absolute w-full h-px duration-300 ${isOpen ? "bg-[#eaeaea] bottom-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rotate-[-45deg]" : "bg-[#3c3c3c] bottom-0 left-0"}`}
							></span>
						</button>
					</div>
				</div>
			</div>
			{/* Modal */}
			<div className={`${isOpen ? "block" : "hidden"} fixed top-0 left-0 w-screen h-screen z-[8888] bg-[#3c3c3c] pointer-events-auto`}>
				<div className="w-[min(327px,87.2vw)] mx-auto">
					{/* Menu */}
					<div className="mt-[min(200px,53.333vw)]">
						<ul>
							{PAGE_MENU.map((menu) => (
								<li key={menu.label}>
									<Link to={menu.path} onClick={() => setIsOpen(false)} className="font-roboto font-normal text-[min(28px,7.467vw)] leading-[1.8em] text-[#eaeaea]">
										{menu.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
					{/* Address */}
					<div className="mt-[min(120px,32vw)]">
						<p className="font-roboto font-normal text-[min(12px,3.2vw)] leading-[1.666em] text-[#ffffff]">
							Attic 5-13-18
							<br />
							Nishi-Ikebukuro, Toshima-ku,
							<br />
							Tokyo, Japan
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

const PAGE_MENU = [
	{ label: "HOME", path: "/" },
	{ label: "WORKS", path: "/works" },
	{ label: "ABOUT US", path: "/about" },
	{ label: "CONTACT", path: "/contact" },
];
