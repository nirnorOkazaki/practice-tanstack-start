import HomeCategoryList from "./HomeCategoryList";
import HomeCategoryTitle from "./HomeCategoryTitle";
import ViewAllWorks from "./ViewAllWorks";

export default function HomeCategory() {
	return (
		<section>
			<div className="w-[min(327px,87.2vw)] md:w-[min(1248px,86.667vw)] mx-auto">
				{/* Art Direction */}
				<div className="flex items-center h-screen md:h-fit">
					<div className="w-fit h-fit md:ml-auto">
						<div className="flex flex-col md:flex-row">
							<div>
								<HomeCategoryTitle to="/" label="art direction" />
								<HomeCategoryList label="Artist Photo" />
								<HomeCategoryList label="Photo" />
							</div>
							<div className="mt-[min(80px,21.333vw)] ml-[min(164px,43.733vw)] md:mt-[min(160px,11.111vw)] md:ml-0">
								<div className="w-[min(120px,32vw)] h-[min(120px,32vw)] md:w-[min(208px,14.444vw)] md:h-[min(208px,14.444vw)] bg-[#1a1a1a]"></div>
							</div>
						</div>
					</div>
				</div>
				{/* Digital Content */}
				<div className="flex items-center h-screen md:h-fit">
					<div className="w-fit h-fit mt-0 ml-0 md:mt-[min(280px,19.444vw)] md:ml-[min(178px,12.361vw)]">
						<div className="flex flex-col-reverse md:flex-col">
							<div>
								<HomeCategoryList label="Web Site" />
								<HomeCategoryList label="EC Site" />
								<HomeCategoryTitle to="/" label="digital content" />
								<HomeCategoryList label="LP" />
								<HomeCategoryList label="Digital Signage" />
								<HomeCategoryList label="Application" />
							</div>
							<div className="mb-[min(60px,16vw)] ml-[min(124px,33.067vw)] md:mb-0 md:ml-[min(214px,14.861vw)]">
								<div className="w-[min(120px,32vw)] h-[min(120px,32vw)] md:w-[min(208px,14.444vw)] md:h-[min(208px,14.444vw)] bg-[#1a1a1a]"></div>
							</div>
						</div>
					</div>
				</div>
				{/* Movie */}
				<div className="flex items-center h-screen md:h-fit">
					<div className="w-fit h-fit mt-0 ml-[min(96px,25.6vw)] mr-0 md:mt-[min(400px,27.778vw)] md:ml-auto md:mr-[min(104px,7.222vw)]">
						<div className="flex flex-col-reverse md:flex-row">
							<div className="mt-[min(30px,8vw)] ml-[min(53px,14.133vw)] md:mt-0 md:ml-0">
								<HomeCategoryList label="Promotion Movie" />
								<HomeCategoryTitle to="/" label="movie" />
								<HomeCategoryList label="Music Video" />
								<HomeCategoryList label="Digest CM" />
							</div>
							<div className="mt-[min(124px,8.611vw)] ml-[min(20px,1.389vw)]">
								<div className="w-[min(120px,32vw)] h-[min(120px,32vw)] md:w-[min(208px,14.444vw)] md:h-[min(208px,14.444vw)] bg-[#1a1a1a]"></div>
							</div>
						</div>
					</div>
				</div>
				{/* Graphic */}
				<div className="flex items-center h-screen md:h-fit">
					<div className="w-fit h-fit mt-0 ml-0 md:mt-[min(-157px,-10.903vw)] md:ml-[min(80px,5.556vw)]">
						<div className="flex flex-row md:flex-col">
							<div className="mt-[min(85px,22.667vw)] md:mt-0">
								<HomeCategoryList label="Goods" />
								<HomeCategoryList label="Photo Zine" />
								<HomeCategoryList label="Label" />
								<HomeCategoryList label="Book" />
								<HomeCategoryTitle to="/" label="graphic" />
								<HomeCategoryList label="CD Jacket" />
								<HomeCategoryList label="Calendar" />
								<HomeCategoryList label="Poster" />
								<HomeCategoryList label="Pamphlet" />
							</div>
							<div className="mt-0 ml-[min(80px,21.333vw)] md:mt-[min(90px,6.25vw)] md:ml-[min(128px,8.889vw)]">
								<div className="w-[min(120px,32vw)] h-[min(120px,32vw)] md:w-[min(208px,14.444vw)] md:h-[min(208px,14.444vw)] bg-[#1a1a1a]"></div>
							</div>
						</div>
					</div>
				</div>
                {/* View All Works */}
				<div className="hidden md:block w-fit md:mt-[min(115px,7.986vw)] md:ml-auto md:mr-[min(-33.5px,-2.326vw)]">
					<ViewAllWorks totalWorksCount={30} />
				</div>
				{/* Logo */}
				<div className="flex items-center h-screen md:h-fit">
					<div className="w-fit h-fit ml-[min(86px,22.933vw)] md:mt-[min(620px,43.056vw)] md:ml-auto md:mr-[min(84px,5.833vw)]">
						<div className="flex">
							<div className="">
                                <div className="w-[min(120px,32vw)] h-[min(120px,32vw)] md:w-[min(208px,14.444vw)] md:h-[min(208px,14.444vw)] bg-[#1a1a1a]"></div>
                            </div>
							<div className="mt-[min(90px,24vw)] ml-[min(22px,5.867vw)] md:mt-[min(144px,10vw)] md:ml-[min(-26px,-1.806vw)]">
								<HomeCategoryTitle to="/" label="logo" />
							</div>
						</div>
					</div>
				</div>
                {/* View All Works SP */}
				<div className="block md:hidden w-fit mx-auto">
					<ViewAllWorks totalWorksCount={30} />
				</div>
			</div>
		</section>
	);
}
