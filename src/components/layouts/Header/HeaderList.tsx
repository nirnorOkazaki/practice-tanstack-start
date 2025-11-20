"use client";

import { Link } from "@tanstack/react-router";
import { useState } from "react";

interface HeaderListProps {
	label: string;
	to: string;
}

export default function HeaderList({ label, to }: HeaderListProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="text-[min(16px,1.111vw)] leading-[1.5em]">
			<Link
				to={to}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				className="flex items-center justify-end"
			>
				{label}
			</Link>
			<div className="w-full h-[1px] overflow-hidden">
				<span
					className={`w-full h-[1px] block bg-[#1a1a1a] duration-300 opacity-50 ${isHovered ? "translate-x-0" : "translate-x-[100%]"}`}
				></span>
			</div>
		</div>
	);
}
