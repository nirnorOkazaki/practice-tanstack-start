"use client";

import { Link } from "@tanstack/react-router";
import { useState } from "react";

interface FooterSnsListProps {
	label: string;
	to: string;
}

export default function FooterSnsList({label, to}: FooterSnsListProps) {
    const [isHovered, setIsHovered] = useState(false);
    
        return (
            <div className="w-fit h-fit font-roboto font-normal text-[min(12px,3.2vw)] leading-[1.833em] text-[#7e7e7e] md:gap-[min(4px,0.278vw)] md:text-[min(12px,0.833vw)] md:leading-[1.5em]">
                <Link to={to} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="flex items-center justify-start pointer-events-auto">
                    {label}
                </Link>
                <div className="w-full h-[1px] overflow-hidden">
                    <span className={`w-full h-[1px] block bg-[#7e7e7e] duration-300 opacity-50 ${isHovered ? "translate-x-0" : "translate-x-[100%]"}`}></span>
                </div>
            </div>
        );
}