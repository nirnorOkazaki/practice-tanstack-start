import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import HomeAbout from "@/components/home/HomeAbout";
import HomeCategory from "@/components/home/HomeCategory";
import HomeCompany from "@/components/home/HomeCompany";
import HomeKeyVisual from "@/components/home/HomeKeyVisual";
import HomeMember from "@/components/home/HomeMember";
import HomeTopics from "@/components/home/HomeTopics";
import HomeWorks from "@/components/home/HomeWorks";
import ViewAllWorks from "@/components/home/ViewAllWorks";
import Footer from "@/components/layouts/Footer/Footer";
import { useRequestAF } from "@/context/RequestAFProvider";
import useCustomScroll from "@/hooks/useCustomScroll";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const { subscribe } = useRequestAF();
	const { containerRef, contentRef, scrollbar, scrollbarTrack, scrollbarThumb } = useCustomScroll();

	/* HomeCategoryコンポーネントのボタンをカスタムスクロールの外から管理する必要があるため、このような記述になってしまう */
	const homeCategoryRef = useRef<HTMLDivElement | null>(null);
	const [isViewAllWorksVisible, setIsViewAllWorksVisible] = useState(false);
	useEffect(() => {
		const unsubscribe = subscribe(() => {
			const rect = homeCategoryRef.current?.getBoundingClientRect();
			if (rect && rect.top < 0 && rect.top > -(rect.height - window.innerHeight)) {
				setIsViewAllWorksVisible(true);
			} else {
				setIsViewAllWorksVisible(false);
			}
		});
		return () => {
			unsubscribe();
		};
	}, [subscribe]);

	return (
		<section>
			<div ref={containerRef} className="w-screen h-screen overflow-hidden">
				<div ref={contentRef}>
					<HomeKeyVisual />
					<HomeWorks />
					{/* divで囲んでいるのはSP版のViewAllWorksボタンの表示を管理するため */}
					<div ref={homeCategoryRef}>
						<HomeCategory />
					</div>
					<HomeAbout />
					<HomeMember />
					<HomeCompany />
					<HomeTopics />
					<Footer />
				</div>
			</div>

			{/* Mobile Home Category ViewAllWorks Button */}
			<div className="block md:hidden">
				<div className={`${isViewAllWorksVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} duration-300`}>
					<div className="fixed bottom-[min(18px,4.8vw)] left-0 flex items-center justify-center w-full">
						<ViewAllWorks totalWorksCount={30} />
					</div>
				</div>
			</div>

			{/* Custom Scrollbar */}
			<section ref={scrollbar} className="hidden md:block fixed top-0 right-0 w-[14px] h-screen bg-[#fafafa] border-l border-[#e7e7e7] z-9999">
				<div ref={scrollbarTrack} className="w-full h-full bg-[#fafafa] rounded-[6px]">
					<div ref={scrollbarThumb} className="flex w-[80%] min-h-[20px] mx-auto bg-[#c7c7c7] rounded-[6px] hover:bg-[#777777]"></div>
				</div>
			</section>
		</section>
	);
}
