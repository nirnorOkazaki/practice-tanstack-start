"use client";

import { Link } from "@tanstack/react-router";
import { useState } from "react";

interface FooterListProps {
	label: string;
	to: string;
}

export default function FooterList({ label, to }: FooterListProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="w-fit h-fit font-roboto font-normal text-[min(16px,4.267vw)] leading-[1.5em] md:text-[min(16px,1.111vw)]">
			<Link to={to} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="flex items-center justify-start pointer-events-auto">
				{label}
			</Link>
			<div className="w-full h-[1px] overflow-hidden">
				<span className={`w-full h-[1px] block bg-[#1a1a1a] duration-300 opacity-50 ${isHovered ? "translate-x-0" : "translate-x-[-100%]"}`}></span>
			</div>
		</div>
	);
}
