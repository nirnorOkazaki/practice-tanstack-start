import HomeWorksList from "@/components/home/HomeWorksList";
import ViewAllWorks from "@/components/home/ViewAllWorks";

export default function HomeWorks() {

	return (
		<section className="mt-[min(160px,42.667vw)] md:mt-[min(248px,17.222vw)]">
			<div className="w-[min(327px,87.2vw)] mx-auto pt-0 pb-[min(240px,64vw)] md:w-[min(1248px,86.667vw)] md:pt-[min(64px,4.444vw)] md:pb-[min(360px,25vw)]">
				<h2 className="w-fit h-fit font-normal text-[min(40px,10.667vw)] leading-[1em] tracking-[-0.02em] md:text-[min(60px,4.167vw)]">
					WORKS
				</h2>
				<div className="w-fit h-fit mt-[min(56px,14.933vw)] md:mt-[min(54px,3.75vw)]">
					<ul>
						{WORKS_MENU.map((work) => (
							<li key={work.label}>
								<HomeWorksList label={work.label} to={work.to} />
							</li>
						))}
					</ul>
				</div>
                <div className="w-fit mt-[min(126px,33.6vw)] mx-auto md:mt-[min(180px,12.5vw)]">
                    <ViewAllWorks totalWorksCount={30}/>
                </div>
			</div>
		</section>
	);
}

const WORKS_MENU = [
	{
		to: "/works/#artDirection",
		label: "Art Direction",
	},
	{
		to: "/works/#graphicDesign",
		label: "Graphic Design",
	},
	{
		to: "/works/#logoDesign",
		label: "Logo Design",
	},
	{
		to: "/works/#digitalContent",
		label: "Digital Content",
	},
	{
		to: "/works/#movie",
		label: "Movie",
	},
];
