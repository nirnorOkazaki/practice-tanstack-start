import { Link } from "@tanstack/react-router";
import { useState } from "react";

interface HomeCategoryTitleProps {
	to: string;
	label: string;
}

export function HomeCategoryTitle({ to, label }: HomeCategoryTitleProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="w-fit">
			<h3 className="my-[min(10px,2.667vw)] font-roboto font-extralight text-[min(40px,10.667vw)] leading-[1em] md:my-[min(10px,0.694vw)] md:text-[min(80px,5.556vw)]">
				<Link to={to} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="block py-[min(10px,2.667vw)] md:py-[min(10px,0.694vw)]">
					{label}
				</Link>
				<div className="w-full h-[1px] overflow-hidden">
					<span className={`w-full h-[1px] block bg-[#1a1a1a] opacity-30 duration-300 ${isHovered ? "translate-x-0" : "translate-x-[-100%]"}`}></span>
				</div>
			</h3>
		</div>
	);
}

interface HomeCategoryListProps {
	label: string;
}

export function HomeCategoryList({ label }: HomeCategoryListProps) {
	return (
		<div className="w-fit">
			<h4 className="ml-[min(13px,3.467vw)] font-roboto font-normal text-[min(14px,3.733vw)] leading-[2em] md:ml-[min(13px,0.903vw)] md:text-[min(20px,1.389vw)]">{label}</h4>
		</div>
	);
}
