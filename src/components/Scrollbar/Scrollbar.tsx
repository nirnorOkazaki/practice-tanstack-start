import { useEffect, useId, useRef, useState } from "react";

interface ScrollbarProps {
    containerRef: React.RefObject<HTMLDivElement | null>;
	scrollY: number;
	scrollTargetY: number;
	scrollMaxY: number;
}

export default function Scrollbar({
    containerRef,
	scrollY = 0,
	scrollTargetY = 0,
	scrollMaxY = 0,
}: ScrollbarProps) {
	

	const [isDragging, setIsDragging] = useState(false);
	const [dragStartY, setDragStartY] = useState(0);
	const [dragStartScrollY, setDragStartScrollY] = useState(0);

	const areaRef = useRef<HTMLElement | null>(null);
	const trackRef = useRef<HTMLDivElement | null>(null);
	const thumbRef = useRef<HTMLDivElement | null>(null);

    // スクロールバーの位置とサイズを更新する関数
	const updateScrollbar = () => {
        if(!containerRef.current || !trackRef.current || !thumbRef.current) return;
        const scrollPercentage = scrollMaxY > 0 ? scrollY / scrollMaxY : 0
        const viewportPercentage = window.innerHeight / containerRef.current.scrollHeight;
        const thumbHeight = Math.max(viewportPercentage * 100, 5);
        const thumbPosition = scrollPercentage * (100 - thumbHeight);

        thumbRef.current.style.height = `${thumbHeight}%`;
        thumbRef.current.style.transform = `translateY(${thumbPosition}%)`;
    };

    // スクロールバーのドラッグ機能
    const thumbMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
        setDragStartY(e.clientY);
        setDragStartScrollY(scrollY);
        document.body.style.userSelect = "none";
    }

    const trackClick = (e: React.MouseEvent) => {
        if(!trackRef.current || !thumbRef.current) return;
        // thumbがクリックされた場合は無視する
        if(e.target === thumbRef.current) return;
        const trackRect = trackRef.current.getBoundingClientRect();
        const clickY = e.clientY - trackRect.top;
        const trackHeight = trackRect.height;
        const thumbHeight = thumbRef.current.offsetHeight;
        // クリック位置にthumbの中心を合わせる
        const clickPercentage = (clickY - thumbHeight / 2) / (trackHeight - thumbHeight);
        const maxThumbPosition = trackHeight - thumbHeight;
        const thumbPosition = Math.min(clickPercentage * trackHeight, maxThumbPosition);
        const scrollPercentage = thumbPosition / maxThumbPosition;
        

    }

	return (
		<section ref={areaRef} className="hidden md:block fixed top-0 right-[50%] h-full w-4 z-50">
			<div ref={trackRef}>
				<div ref={thumbRef}>{containerRef.current?.scrollHeight}</div>
			</div>
		</section>
	);
}
