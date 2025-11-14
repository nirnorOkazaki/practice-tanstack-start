import { createFileRoute } from "@tanstack/react-router";
import useCustomScroll from "@/hooks/useCustomScroll";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const {
		containerRef,
		contentRef,
		scrollbar,
		scrollbarTrack,
		scrollbarThumb,
	} = useCustomScroll();

	return (
		<section>
			<div ref={containerRef} className="w-screen h-screen overflow-hidden">
				<div ref={contentRef}>
					<div className="w-[400px] h-[400px] bg-black mx-auto my-[200px]"></div>
					<div className="w-[400px] h-[400px] bg-black mx-auto my-[200px]"></div>
					<div className="w-[400px] h-[400px] bg-black mx-auto my-[200px]"></div>
					<div className="w-[400px] h-[400px] bg-black mx-auto my-[200px]"></div>
					<div className="w-[400px] h-[400px] bg-black mx-auto my-[200px]"></div>
				</div>
			</div>

			<section ref={scrollbar} className="fixed top-0 right-0 w-[14px] h-screen bg-[#fafafa] border-l border-[#e7e7e7] z-9999">
				<div ref={scrollbarTrack} className="w-full h-full bg-[#fafafa] rounded-[6px]">
					<div ref={scrollbarThumb} className="flex w-[80%] min-h-[20px] mx-auto bg-[#c7c7c7] rounded-[6px] hover:bg-[#777777]"></div>
				</div>
			</section>
		
		</section>
	);
}
