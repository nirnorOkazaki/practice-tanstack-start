import { Link } from "@tanstack/react-router";
import { useState } from "react";

interface HomeWorksListProps {
    label: string;
    to: string;
}

export function HomeWorksList({ label, to }: HomeWorksListProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="font-normal text-[min(14px,3.733vw)] leading-[1.75em] md:text-[min(16px,1.111vw)]">
            <Link
                to={to}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex"
            >
                {label}
            </Link>
            <div className="w-full h-[1px] overflow-hidden">
                <span
                    className={`w-full h-[1px] block bg-[#1a1a1a] duration-300 opacity-50 ${isHovered ? "translate-x-0" : "translate-x-[-100%]"}`}
                ></span>
            </div>
        </div>
    );
}