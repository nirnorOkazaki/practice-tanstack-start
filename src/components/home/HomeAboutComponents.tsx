"use client";

import { useEffect, useRef, useState } from "react";

export function HomeAboutPhilosophyTextJP() {
	return (
		<div>
			<p className="w-[min(327px,87.2vw)] font-roboto font-normal text-[min(14px,3.733vw)] leading-[1.8em] whitespace-pre-wrap md:w-[min(521px,36.181vw)] md:text-[min(16px,1.111vw)] md:leading-[1.75em]">
				いつもクライアントのそばで、
				<br />
				些細なことも安心して相談できる
				<br />
				そんな「隣人」のような存在となるため
				<br />
				2013年に創業。
				<br />
				<br />
				私たちは、企業・ブランド・アーティスト等、
				<br />
				全てのクライアントの中にある
				<br className="block md:hidden" />
				世界観・課題を丁寧にヒアリングし、
				<br />
				一貫したコンセプトの元で
				<br />
				撮影、映像制作、グラフィックデザイン、
				<br className="block md:hidden" />
				WEBデザイン等様々な
				<br className="hidden md:block" />
				表現を用い創造する
				<br className="block md:hidden" />
				クリエイティブチームです。
			</p>
		</div>
	);
}

export function HomeAboutPhilosophyTextEN() {
	return (
		<div>
			<p className="w-[min(327px,87.2vw)] font-roboto font-normal text-[min(14px,3.733vw)] leading-[1.8em] whitespace-pre-wrap md:w-[min(521px,36.181vw)] md:text-[min(16px,1.111vw)] md:leading-[1.75em]">
				We began in 2013, hoping to be like a close
				<br className="block md:hidden" /> neighbor —
				<br className="hidden md:block" />
				Someone our clients can always
				<br className="block md:hidden" /> rely on and talk to comfortably about
				<br />
				anything, big or small.
				<br />
				<br />
				We are a creative collective that carefully
				<br className="block md:hidden" /> listens to the visions and inner stories of
				<br className="block md:hidden" /> every client — from corporations and brands
				<br className="block md:hidden" /> to individual
				<br className="hidden md:block" />
				artists — and transform them
				<br className="block md:hidden" /> into visual experiences through
				<br className="hidden md:block" />
				photography,
				<br className="block md:hidden" /> film, graphic, and web design, all woven
				<br className="block md:hidden" /> together under a single, coherent concept.
			</p>
		</div>
	);
}

const HOME_ABOUT_OURSERVICE_CAROUSEL_IMAGE = [
	{
		id: 1,
		src: "/video/home_about_artdirection.mp4",
	},
	{
		id: 2,
		src: "/video/home_about_webdesign.mp4",
	},
	{
		id: 3,
		src: "/video/home_about_webdevelopment.mp4",
	},
	{
		id: 4,
		src: "/video/home_about_graphicdesign.mp4",
	},
	{
		id: 5,
		src: "/video/home_about_movie.mp4",
	},
];

const HOME_ABOUT_OURSERVICE_CAROUSEL_LIST = [
	{
		id: 1,
		number: "01.",
		title: "ART DIRECTION",
		subtitle: "撮影 / 撮影・アートワーク作成",
		descriptionPC: "撮影、CG、イラストレーション、タイポグラフィ、\nインタラクティブを組み合わせたアウトプットにまとめあげ、\n価値を伝えます。",
		descriptionSP: "撮影、CG、イラストレーション、タイポグラフィ、インタラクティブを組み合わせたアウトプットにまとめあげ、価値を伝えます。",
	},
	{
		id: 2,
		number: "02.",
		title: "WEB DESIGN",
		subtitle: "UI/UX インタラクティブデザイン",
		descriptionPC: "機能性・利便性を追求したデザインから、表現力豊かなデザイン。\nまた双方を組み合わせたデザインまで、ご要望にお応えします。",
		descriptionSP: "機能性・利便性を追求したデザインから、表現力豊かなデザイン。また双方を組み合わせたデザインまで、ご要望にお応えします。",
	},
	{
		id: 3,
		number: "03.",
		title: "WEB DEVELOPMENT",
		subtitle: "フロント＆バックエンドエンジニアリング",
		descriptionPC: "数式と物理演算を用いた多彩なインタラクティブ表現から、\nクラウドサーバーの扱いまで手がけ、\nパーソナルなコンテンツから大規模開発まで対応いたします。",
		descriptionSP: "数式と物理演算を用いた多彩なインタラクティブ表現から、クラウドサーバーの扱いまで手がけ、パーソナルなコンテンツから大規模開発まで対応いたします。",
	},
	{
		id: 4,
		number: "04.",
		title: "GRAPHIC DESIGN",
		subtitle: "ロゴ・ポスター・ブック・グッズデザイン",
		descriptionPC: "撮影・CG・イラストレーションを組み合わせた\n表現力豊かな画づくり、特色を持ちながら整然とした文字組、\n象徴的なロゴデザイン、書籍の装丁まで、\n幅広くご提案させていただきます。",
		descriptionSP: "撮影・CG・イラストレーションを組み合わせた表現力豊かな画づくり、特色を持ちながら整然とした文字組、象徴的なロゴデザイン、書籍の装丁まで、幅広くご提案させていただきます。",
	},
	{
		id: 5,
		number: "05.",
		title: "MOVIE DIRECTION",
		subtitle: "PV・MV映像ディレクション・映像編集",
		descriptionPC: "感情に触れる、情緒的な画作りやカット割、\nやわらかな表情づくりから、刺激的な展開まで、\n実写映像ならではの空気感をつくりあげます。",
		descriptionSP: "感情に触れる、情緒的な画作りやカット割、やわらかな表情づくりから、刺激的な展開まで、実写映像ならではの空気感をつくりあげます。",
	},
];

export function HomeAboutOurServiceCarousel() {
	const image = useRef<HTMLDivElement>(null);
	const space = useRef<HTMLDivElement>(null);
	const [transformY, setTransformY] = useState(0);
	const [marginTop, setMarginTop] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(1);

	useEffect(() => {
		const exec = () => {
			if (!image.current || !space.current) return;
			const imageHeight = image.current.getBoundingClientRect().height;
			const spaceHeight = space.current.getBoundingClientRect().height;
			setTransformY((currentIndex - 1) * (imageHeight + spaceHeight) * -1);
			// marginTop
			if (window.innerWidth > 768) {
				const marginBase = (96 / 1440) * window.innerWidth < 96 ? (96 / 1440) * window.innerWidth : 96;
				const marginValue = (46 / 1440) * window.innerWidth < 46 ? (46 / 1440) * window.innerWidth : 46;
				const marginResult = currentIndex === 1 ? 0 : marginBase + (currentIndex - 1) * marginValue;
				setMarginTop(marginResult);
			} else {
				setMarginTop(0);
			}
		};
		exec();

		window.addEventListener("resize", exec);
		return () => {
			window.removeEventListener("resize", exec);
		};
	}, [currentIndex]);

	return (
		<div>
			<div className="flex flex-col items-start gap-[0] mt-[min(134px,9.306vw)] md:flex-row md:gap-[min(55px,3.819vw)]">
				{/* SP [ SOLUTION ] */}
				<div className="block md:hidden">
					<h4 className="font-roboto font-normal text-[min(12px,3.2vw)] leading-[1.75em] text-[#7e7e7e] uppercase">[ solution ]</h4>
				</div>
				{/* Image */}
				<div className="mt-[min(16px,4.267vw)] md:mt-0">
					<div style={{ marginTop: `${marginTop}px` }} className="duration-400">
						<div ref={image} className="w-[min(327px,87.2vw)] aspect-[16/9] md:w-[min(521px,36.181vw)] overflow-hidden">
							<div style={{ transform: `translateY(${transformY}px)` }} className="flex flex-col gap-[min(16px,1.111vw)] duration-400">
								{HOME_ABOUT_OURSERVICE_CAROUSEL_IMAGE.map((item) => (
									<div key={item.id}>
										<video autoPlay loop muted playsInline className="w-[min(327px,87.2vw)] aspect-[16/9] md:w-[min(521px,36.181vw)] object-cover">
											<source src={item.src} type="video/mp4" />
										</video>
									</div>
								))}
								<div ref={space} className="h-[min(16px,1.111vw)]"></div>
							</div>
						</div>
					</div>
				</div>
				{/* Description */}
				<div className="mt-[min(16px,4.267vw)] md:mt-[min(16px,1.111vw)]">
					{/* PC [ SOLUTION ] */}
					<div className="hidden md:block">
						<div className="ml-[min(49px,3.403vw)]">
							<h4 className="font-roboto font-normal text-[min(12px,0.833vw)] leading-[1.75em] text-[#7e7e7e] uppercase">[ solution ]</h4>
						</div>
					</div>
					{/* Carousel List */}
					<div>
						<ul className="grid gap-[min(16px,4.267vw)] mt-0 md:block md:gap-0 md:mt-[min(59px,4.097vw)]">
							{HOME_ABOUT_OURSERVICE_CAROUSEL_LIST.map((item) => (
								<li key={item.id}>
									<div className={`${currentIndex === item.id ? "" : "my-[min(16px,1.111vw)]"}`}>
										{/* 最初の要素以外に、モーダルが開いている時、上部スペーサー */}
										{item.id !== 1 && (
											<div className={`${currentIndex === item.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} grid transition-all duration-500`}>
												<div className="overflow-hidden">
													<div className="h-0 md:h-[min(90px,6.25vw)]"></div>
												</div>
											</div>
										)}
										{/* Button & Title */}
										<button type="button" onClick={() => setCurrentIndex(item.id)} className="cursor-pointer hover:opacity-30">
											<h3 className="flex items-center gap-[min(8px,2.133vw)] md:gap-[min(21px,1.458vw)]">
												<span className="font-roboto font-normal text-[min(16px,4.267vw)] leading-[1] md:text-[min(20px,1.389vw)]">{item.number}</span>
												<span className="font-roboto font-normal text-[min(24px,6.4vw)] leading-[1] md:text-[min(30px,2.083vw)]">{item.title}</span>
											</h3>
										</button>
										{/* description */}
										<div className={`${currentIndex === item.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} grid transition-all duration-500`}>
											<div className="overflow-hidden">
												<div className="mt-[min(8px,2.133vw)] ml-[min(32px,8.533vw)] md:mt-[min(5px,0.764vw)] md:ml-[min(49px,3.403vw)]">
													<h4 className="font-zen font-normal text-[min(12px,3.2vw)] leading-[1.75em] uppercase md:text-[min(12px,0.833vw)]">{item.subtitle}</h4>
												</div>
												<div className="mt-[min(12px,3.2vw)] ml-[min(32px,8.533vw)] md:mt-[min(18px,1.25vw)] md:ml-[min(49px,3.403vw)]">
													<div className="hidden md:block">
														<p className="font-zen font-normal text-[min(16px,1.111vw)] leading-[1.75em] whitespace-pre-wrap">
															<span>{item.descriptionPC}</span>
														</p>
													</div>
													<div className="block md:hidden">
														<p className="font-zen font-normal text-[min(14px,3.733vw)] leading-[1.8em] whitespace-pre-wrap">
															<span>{item.descriptionSP}</span>
														</p>
													</div>
												</div>
											</div>
										</div>
										{/* モーダルが開いている時、下部スペーサー */}
										<div className={`${currentIndex === item.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} grid transition-all duration-500`}>
											<div className="overflow-hidden">
												<div className="h-0 md:h-[min(140px,9.722vw)]"></div>
											</div>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

// export function _HomeAboutPhilosophyTextJP() {
// 	const TextPC = useMemo(() => Array.from(ABOUT_JP_PC), []);
// 	const TextSP = useMemo(() => Array.from(ABOUT_JP_SP), []);
// 	const idsPC = useMemo(
// 		() =>
// 			TextPC.map(() =>
// 				typeof crypto !== "undefined" && "randomUUID" in crypto
// 					? crypto.randomUUID()
// 					: Math.random().toString(36).slice(2),
// 			),
// 		[TextPC],
// 	);
// 	const idsSP = useMemo(
// 		() =>
// 			TextSP.map(() =>
// 				typeof crypto !== "undefined" && "randomUUID" in crypto
// 					? crypto.randomUUID()
// 					: Math.random().toString(36).slice(2),
// 			),
// 		[TextSP],
// 	);

// 	return (
// 		<div>
// 			<div className="hidden md:block">
// 				<p className="w-[min(521px,36.181vw)] font-roboto font-normal text-[min(16px,1.111vw)] leading-[1.75em] whitespace-pre-wrap">
// 					{/* {TextPC.map((char, index) => (
// 						<motion.span key={idsPC[index]}>{char}</motion.span>
// 					))} */}
// 					{TextPC}
// 				</p>
// 			</div>
// 			<div className="block md:hidden">
// 				<p className="w-[min(327px,87.2vw)] font-roboto font-normal text-[min(14px,3.733vw)] leading-[1.8em] whitespace-pre-wrap">
// 					{/* {TextSP.map((char, index) => (
// 						<motion.span key={idsSP[index]}>{char}</motion.span>
// 					))} */}
// 					{TextSP}
// 				</p>
// 			</div>
// 		</div>
// 	);
// }

// const ABOUT_JP_PC =
// 	"いつもクライアントのそばで、\n些細なことも安心して相談できる\nそんな「隣人」のような存在となるため2013年に創業。\n\n私たちは、企業・ブランド・アーティスト等、\n全てのクライアントの中にある世界観・課題を丁寧にヒアリングし、\n一貫したコンセプトの元で\n撮影、映像制作、グラフィックデザイン、WEBデザイン等様々な\n表現を用い創造するクリエイティブチームです。";
// const ABOUT_JP_SP =
// 	"いつもクライアントのそばで、\n些細なことも安心して相談できる\nそんな「隣人」のような存在となるため\n2013年に創業。\n\n私たちは、企業・ブランド・アーティスト等、\n全てのクライアントの中にある\n世界観・課題を丁寧にヒアリングし、\n一貫したコンセプトの元で\n撮影、映像制作、グラフィックデザイン、\nWEBデザイン等様々な表現を用い創造する\nクリエイティブチームです。";
