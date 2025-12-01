import { useEffect, useRef, useState } from "react";
import VirtualScroll from "virtual-scroll";
import { useRequestAF } from "@/context/RequestAFProvider";
import { clamp, lerp, trunc3 } from "@/lib/utils/math";

interface UseCustomScrollbarReturn {
	scrollY: number;
	scrollTargetY: number;
	scrollMaxY: number;
	// container and content elements
	containerRef: React.RefObject<HTMLDivElement | null>;
	contentRef: React.RefObject<HTMLDivElement | null>;
	// scrollbar elements
	scrollbar: React.RefObject<HTMLDivElement | null>;
	scrollbarTrack: React.RefObject<HTMLDivElement | null>;
	scrollbarThumb: React.RefObject<HTMLDivElement | null>;
}

const scrollOptions = {
	preventTouch: false,
	touchMultiplier: 3,
	mouseMultiplier: 0.5,
};

const LERP_FACTOR = 0.05; // 慣性の強さ : 0〜1 (1に近いほど慣性が弱くなる)

export default function useCustomScroll(): UseCustomScrollbarReturn {
	// context
	const { subscribe } = useRequestAF();
	// animation frame id
	const animationFrameId = useRef<number | null>(null);
	// scroll state
	const scrollYRef = useRef<number>(0);
	const scrollTargetYRef = useRef<number>(0);
	const scrollMaxYRef = useRef<number>(0);
	const [scrollY, setScrollY] = useState(0);
	const [scrollTargetY, setScrollTargetY] = useState(0);
	const [scrollMaxY, setScrollMaxY] = useState(0);
	// container and content elements
	const containerRef = useRef<HTMLDivElement | null>(null);
	const contentRef = useRef<HTMLDivElement | null>(null);
	// scrollbar elements
	const scrollbar = useRef<HTMLDivElement | null>(null);
	const scrollbarTrack = useRef<HTMLDivElement | null>(null);
	const scrollbarThumb = useRef<HTMLDivElement | null>(null);
	// // Dragging state
	const isDraggingRef = useRef<boolean>(false);
	const dragStartYRef = useRef<number>(0);
	const dragStartScrollYRef = useRef<number>(0);
	// // Touch state
	const isTouchingRef = useRef<boolean>(false);
	const touchStartYRef = useRef<number>(0);
	const touchStartScrollYRef = useRef<number>(0);

	useEffect(() => {
		const container = containerRef.current;
		const content = contentRef.current;

		if (!container || !content) return;

		const virtualScroll = new VirtualScroll(scrollOptions);

		virtualScroll.on((event) => {
			if (isDraggingRef.current) return;
			scrollTargetYRef.current = clamp(
				scrollTargetYRef.current - event.deltaY,
				0,
				scrollMaxYRef.current,
			);
		});

		/* ==============================
		 * onResize Event
		 * ============================== */
		const onResize = () => {
			if (!containerRef.current || !contentRef.current) return;
			scrollMaxYRef.current =
				containerRef.current?.scrollHeight - window.innerHeight;
		};
		window.addEventListener("resize", onResize);
		onResize();
		/* ==============================
		 * touch Event
		 * ============================== */
		/** タッチ操作を開始 */
		const documentTouchStart = (e: TouchEvent) => {
			isTouchingRef.current = true;
			touchStartYRef.current = e.touches[0].clientY;
			touchStartScrollYRef.current = scrollTargetYRef.current;
		};
		/** タッチ操作で動かしたとき */
		const documentTouchMove = (e: TouchEvent) => {
			if (!isTouchingRef.current) return;
			e.preventDefault();
			const currentY = e.touches[0].clientY;
			const deltaY = touchStartYRef.current - currentY;
			scrollTargetYRef.current = clamp(
				touchStartScrollYRef.current + deltaY * 2,
				0,
				scrollMaxYRef.current,
			);
		};
		/** タッチ操作を終了 */
		const documentTouchEnd = () => {
			isTouchingRef.current = false;
		};
		// タッチイベントリスナーの追加
		document.addEventListener("touchstart", documentTouchStart, {
			passive: true,
		});
		document.addEventListener("touchmove", documentTouchMove, {
			passive: false,
		});
		document.addEventListener("touchend", documentTouchEnd, { passive: true });

		/** スクロールバーのつまみをドラッグ開始 */
		const thumbMouseDown = (e: MouseEvent) => {
			if (
				!scrollbar.current ||
				!scrollbarTrack.current ||
				!scrollbarThumb.current
			)
				return;
			e.preventDefault();
			e.stopPropagation();
			isDraggingRef.current = true;
			dragStartYRef.current = e.clientY;
			dragStartScrollYRef.current = scrollYRef.current;
			document.body.style.userSelect = "none";
		};
		/** スクロールバーのトラックをクリック */
		const trackClick = (e: MouseEvent) => {
			if (
				!scrollbar.current ||
				!scrollbarTrack.current ||
				!scrollbarThumb.current
			)
				return;
			if (e.target === scrollbarThumb.current) return;
			const trackRect = scrollbarTrack.current.getBoundingClientRect();
			const clickY = e.clientY - trackRect.top;
			const trackHeight = trackRect.height;
			const thumbHeight = scrollbarThumb.current.offsetHeight;
			// クリック位置にthumbの中心を合わせる
			const clickPercentage = (clickY - thumbHeight / 2) / trackHeight;
			const maxThumbPosition = trackHeight - thumbHeight;
			const thumbPosition = Math.min(
				clickPercentage * trackHeight,
				maxThumbPosition,
			);
			const scrollPercentage = thumbPosition / maxThumbPosition;
			// スクロール位置を更新
			scrollTargetYRef.current = clamp(
				scrollPercentage * scrollMaxYRef.current,
				0,
				scrollMaxYRef.current,
			);
            
		};

		/** スクロールバーのつまみをクリック、且つドキュメント上でマウスが動いたとき */
		const documentMouseMove = (e: MouseEvent) => {
			if (
				!isDraggingRef.current ||
				!scrollbar.current ||
				!scrollbarTrack.current ||
				!scrollbarThumb.current
			)
				return;
			const deltaY = e.clientY - dragStartYRef.current;
			const scrollbarHeight = window.innerHeight;
			const thumbHeight = scrollbarThumb.current.offsetHeight;
			const maxThumbTravel = scrollbarHeight - thumbHeight;
			const scrollRatio = scrollMaxYRef.current / maxThumbTravel;
			// スクロール位置を更新
			scrollTargetYRef.current = clamp(
				dragStartScrollYRef.current + deltaY * scrollRatio,
				0,
				scrollMaxYRef.current,
			);
		};

		/** スクロールバーのつまみをクリック、且つドキュメント上でマウスが離れたとき */
		const documentMouseUp = () => {
			if (
				!scrollbar.current ||
				!scrollbarTrack.current ||
				!scrollbarThumb.current
			)
				return;

			if (isDraggingRef.current) {
				isDraggingRef.current = false;
				document.body.style.userSelect = "";
			}
		};

        // スクロールバーのイベントリスナーの追加
		if (scrollbar.current && scrollbarTrack.current && scrollbarThumb.current) {
			// スクロールバーのつまみをドラッグ
			scrollbarThumb.current.addEventListener("mousedown", thumbMouseDown);
			// スクロールバーのトラックをクリック
			scrollbarTrack.current.addEventListener("click", trackClick);
			// ドキュメント上でマウスが動いたとき
			document.addEventListener("mousemove", documentMouseMove);
			// ドキュメント上でマウスが離れたとき
			document.addEventListener("mouseup", documentMouseUp);
		}

        return () => {
            virtualScroll.destroy();
            window.removeEventListener("resize", onResize);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            // タッチイベントリスナーの削除
            document.removeEventListener('touchstart', documentTouchStart);
            document.removeEventListener('touchmove', documentTouchMove);
            document.removeEventListener('touchend', documentTouchEnd);
            // スクロールバーのイベントリスナーの削除
            if (scrollbar.current && scrollbarTrack.current && scrollbarThumb.current) {
                scrollbarThumb.current.removeEventListener("mousedown", thumbMouseDown);
                scrollbarTrack.current.removeEventListener("click", trackClick);
                document.removeEventListener("mousemove", documentMouseMove);
                document.removeEventListener("mouseup", documentMouseUp);
            }
        };
	}, []);

	useEffect(() => {
		// update scrollbar function
		const updateScrollbar = () => {
			if (
				!containerRef.current ||
				!contentRef.current ||
				!scrollbar.current ||
				!scrollbarTrack.current ||
				!scrollbarThumb.current
			)
				return;
			const scrollPercentage =
				scrollMaxYRef.current > 0
					? scrollYRef.current / scrollMaxYRef.current
					: 0;
			const viewportPercentage =
				window.innerHeight / containerRef.current.scrollHeight;
			const thumbHeight = Math.max(viewportPercentage * 100, 5);
			const thumbPosition = scrollPercentage * (100 - thumbHeight);

			scrollbarThumb.current.style.height = `${thumbHeight}%`;
			scrollbarThumb.current.style.transform = `translateY(${thumbPosition}vh)`;
		};

		const unsubscribe = subscribe(() => {
			if (!containerRef.current || !contentRef.current) return;
			scrollYRef.current = trunc3(
				lerp(scrollYRef.current, scrollTargetYRef.current, LERP_FACTOR),
			);
			contentRef.current.style.transform = `translateY(${-scrollYRef.current}px)`;
			// update scrollbar
			updateScrollbar();
			// set states
            setScrollY(scrollYRef.current);
            setScrollTargetY(scrollTargetYRef.current);
            setScrollMaxY(scrollMaxYRef.current);
		})

		return () => {
			unsubscribe();
		}
	},[subscribe]);

	return {
		scrollY,
		scrollTargetY,
		scrollMaxY,
		// container and content elements
		containerRef,
		contentRef,
		// scrollbar elements
		scrollbar,
		scrollbarTrack,
		scrollbarThumb,
	};
}
