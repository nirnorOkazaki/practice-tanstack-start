export default function HomeKeyVisual() {
	return (
		<section className="flex items-end w-screen h-screen ">
			<div className="flex flex-col md:flex-row items-end justify-between w-[min(327px,87.2vw)] md:w-[min(1248px,86.667vw)] mx-auto pb-[min(60px,16vw)] md:pb-[min(36px,2.5vw)]">
				{/* Logo and Copy */}
				<div className="mr-auto md:mr-0">
					<div className="w-[min(164px,43.733vw)] h-[min(41px,10.933vw)] md:w-[min(262px,18.194vw)] md:h-[min(66px,4.583vw)]">
						<img
							src="/img/nirnor-logo.svg"
							alt="nirnor logo"
							className="w-full h-full object-contain"
						/>
					</div>
					<h2 className="mt-[min(40px,10.667vw)] font-normal text-[min(18px,4.8vw)] leading-[1.555em] tracking-[0.2em] md:mt-[min(42px,2.917vw)] md:text-[min(24px,1.667vw)] md:leading-[1.666em]">
						より、整った世界を
						<br />
						より、心に触れるデザインを
					</h2>
					<h2 className="mt-[min(20px,5.333vw)] font-normal text-[min(12px,3.2vw)] leading-[1.833em] md:mt-[min(42px,2.917vw)] md:text-[min(12px,0.833vw)]">
						A more organised world.
						<br />
						More design that touches your heart.
					</h2>
				</div>
				{/* Addrenss : PCのみ表示 */}
				<div className="hidden md:block">
					<p className="font-normal text-[min(12px,0.833vw)] leading-[min(20px,1.389vw)]">
						3ChaWORK 3F 2-17-5
						<br />
						Taishido, Setagaya-ku
						<br />
						Tokyo, Japan
					</p>
				</div>
				{/* Scroll */}
				<div className="flex items-center gap-[min(8px,2.133vw)] mt-[min(48px,12.8vw)] md:gap-[min(8px,0.556vw)] md:mt-0">
					<p className="font-normal text-[min(14px,3.733vw)] leading-none md:text-[min(14px,0.972vw)]">
						SCROLL
					</p>
					<img src="/img/arrow-bottom.svg" alt="arrow-bottom" className="animate-slide-flash w-[min(9px,2.4vw)] h-[min(4px,1.066vw)] md:w-[min(9px,0.625vw)] md:h-[min(4px,0.278vw)]" />
				</div>
			</div>
		</section>
	);
}
