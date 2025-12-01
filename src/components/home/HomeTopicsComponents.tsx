import { useState } from "react";

interface Link {
	href: string;
	label: string;
}

interface HomeTopicsNewsListProps {
	date: string;
	title: string;
	body: string;
	links: Link[] | undefined | null;
}

export function HomeTopicsNewsList(props: HomeTopicsNewsListProps) {
	const { date, title, body, links } = props;
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<div className="w-[min(327px,87.2vw)] py-[min(24px,6.4vw)] md:w-[min(832px,57.778vw)] md:py-[min(24px,1.667vw)]">
			<button type="button" onClick={handleClick} className="cursor-pointer">
				<div className="flex items-center md:flex-row">
					<div className="flex flex-col w-[min(319px,85.067vw)] md:flex-row md:w-full">
						{/* Date */}
						<div className="w-full md:w-[min(150px,10.417vw)]">
							<p className="text-left font-roboto font-normal text-[min(14px,3.733vw)] leading-[1.75em] md:text-[min(16px,1.111vw)]">{date}</p>
						</div>
						{/* Title */}
						<div className="w-full md:w-[min(671px,46.597vw)]">
							<h3 className="text-left font-zen font-normal text-[min(14px,3.733vw)] leading-[1.8em] md:text-[min(16px,1.111vw)] md:leading-[1.75em]">{title}</h3>
						</div>
					</div>
					{/* Arrow */}
					<div className="w-[8px]">
						{isOpen ? (
                            <img src="/img/home-topics-arrow-top.svg" alt="" className="w-[min(8px,2.133vw)] h-[min(12px,3.2vw)] object-contain md:w-[min(8px,0.556vw)] md:h-[min(12px,0.833vw)]" />
						) : (
							<img src="/img/home-topics-arrow-bottom.svg" alt="" className="w-[min(8px,2.133vw)] h-[min(12px,3.2vw)] object-contain md:w-[min(8px,0.556vw)] md:h-[min(12px,0.833vw)]" />
						)}
					</div>
				</div>
			</button>
			<div className={`${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} grid duration-300`}>
				<div className="overflow-hidden">
					<div className="w-full mt-[min(16px,4.267vw)] mb-0 md:w-[min(728px,50.556vw)] md:my-[min(16px,1.111vw)]">
						<div className="ml-0 md:ml-[min(150px,10.417vw)]">
							<p className="font-zen font-normal text-[min(14px,3.733vw)] leading-[1.8em] md:text-[min(16px,1.111vw)] md:leading-[1.75em]">{body}</p>
						</div>
						{/* Links */}
						{links && (
							<div className="mt-[min(8px,2.133vw)] ml-0 md:mt-0 md:ml-[min(150px,10.417vw)]">
								<ul className="grid gap-[8px,2.133vw] md:gap-[8px,0.556vw]">
									{links.map((link) => (
										<li key={link.label}>
											<a href={link.href} className="font-zen font-normal text-[min(14px,3.733vw)] leading-[1.8em] md:text-[min(16px,1.111vw)] md:leading-[1.75em]">
												{link.label}
											</a>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
