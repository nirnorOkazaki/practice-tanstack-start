import { Link } from "@tanstack/react-router";
import { useState } from "react";

interface Props {
	totalWorksCount: number;
}

export default function ViewAllWorks({ totalWorksCount }: Props) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div>
			<Link
				to="/"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				className="flex items-start gap-[min(4px,1.067vw)] w-fit md:gap-[min(8px,0.556vw)]"
			>
				<span className="font-roboto font-semibold text-[min(35px,9.333vw)] leading-[1.5em] tracking-[0.02em] md:text-[min(70px,4.861vw)]">
					VIEW ALL WORKS
				</span>
				<span className="mt-[min(5px,1.333vw)] font-light text-[min(7px,1.867vw)] leading-[1.785em] md:mt-[min(10px,0.694vw)] md:text-[min(14px,0.972vw)]">
					{totalWorksCount}
				</span>
				<img
					src="/img/view-all-works-icon.svg"
					alt="View All Works Icon"
					className="w-[min(15px,4vw)] h-[min(15px,4vw)] my-auto md:w-[min(30px,2.083vw)] md:h-[min(30px,2.083vw)]"
				/>
			</Link>
			<div className="relative w-full h-[1px] overflow-hidden">
				<span className={`absolute w-full h-[1px] block bg-[#1a1a1a] duration-300 ${isHovered ? "translate-x-[100%]" : "translate-x-[0]"}`}></span>
				<span className={`absolute w-full h-[1px] block bg-[#d9d9d9] duration-300 ${isHovered ? "translate-x-[0]" : "translate-x-[-100%]"}`}></span>
			</div>
		</div>
	);
}
