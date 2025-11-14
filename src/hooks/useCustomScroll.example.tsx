import useCustomScroll from "@/hooks/useCustomScroll";

/** 基本的な使用例 */
export function BasicExample() {
	const {
		containerRef,
		contentRef,
		scrollbar,
		scrollbarTrack,
		scrollbarThumb,
	} = useCustomScroll();

	return (
    <div>
        <div ref={containerRef}>
            <div ref={contentRef}>
                {/* コンテンツ */}
            </div>
        </div>
        {/* スクロールバー */}
        <div ref={scrollbar}>
            <div ref={scrollbarTrack}>
                <div ref={scrollbarThumb}></div>
            </div>
        </div>
    </div>
    )
}
