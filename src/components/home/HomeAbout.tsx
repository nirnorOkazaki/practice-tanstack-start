import {
	HomeAboutOurServiceCarousel,
	HomeAboutPhilosophyTextEN,
	HomeAboutPhilosophyTextJP,
} from "./HomeAboutComponents";

export default function HomeAbout() {
	return (
		<section className="mt-[min(240px,64vw)] md:mt-[min(360px,25vw)]">
			<div className="w-[min(327px,87.2vw)] mx-auto md:w-[min(1248px,86.667vw)]">
				<h2 className="font-roboto font-normal text-[min(40px,10.667vw)] leading-[1em] tracking-[-0.02em] md:text-[min(60px,4.167vw)]">
					ABOUT US
				</h2>
				{/* Philosophy Copy */}
				<div className="mt-[min(56px,14.933vw)] md:mt-[min(60px,4.167vw)]">
					<h3 className="font-roboto font-normal text-[28px,7.467vw] leading-[1em] md:text-[min(34px,2.361vw)] md:leading-[1.75em]">
						Philosophy
					</h3>
					<div className="mt-[min(40px,10.667vw)] md:mt-[min(36px,2.5vw)]">
						<h4 className="font-roboto font-normal text-[min(12px,3.2vw)] leading-[1.75em] text-[#7e7e7e] uppercase md:text-[min(12px,0.833vw)]">
							[ princible ]
						</h4>
					</div>
					<div className="mt-[min(16px,4.267vw)] md:mt-0">
						<h2 className="font-ibarra font-normal italic text-[min(48px,12.8vw)] leading-[1.066em] md:text-[min(150px,10.417vw)]">
							eloquently
							<br />
							expressed
							<br className="block md:hidden" />
							silence
						</h2>
					</div>
				</div>
				{/* Since & Members */}
				<div className="w-fit h-fit mt-[min(127px,33.867vw)] ml-auto mr-[min(146px,38.933vw)] md:mt-[min(186px,12.917vw)] md:mr-[min(232px,16.111vw)]">
					<p className="font-roboto font-normal text-[min(10px,2.667vw)] leading-[1.75em] md:text-[min(16px,1.111vw)]">
						since 2013
					</p>
					<div className="mt-[min(8px,2.133vw)] md:mt-[min(10px,0.694vw)]">
						<img
							src="/img/nirnor-logo.svg"
							alt=""
							className="w-[min(92px,24.533vw)] h-[min(24px,6.4vw)] object-contain md:w-[min(184px,12.778vw)] md:h-[min(47px,3.264vw)]"
						/>
					</div>
					<div className="mt-[min(17px,4.533vw)] md:mt-[min(48px,3.333vw)]">
						<p className="font-roboto font-normal text-[min(10px,2.667vw)] leading-[1.75em] md:text-[min(16px,1.111vw)]">
							05 members
							<br />+ Partner
						</p>
					</div>
				</div>
				{/* What We Do */}
				<div className="mt-[min(119px,31.733vw)] md:mt-[min(214px,14.861vw)]">
					<h4 className="font-roboto font-normal text-[min(12px,3.2vw)] leading-[1.75em] text-[#7e7e7e] uppercase md:text-[min(12px,0.833vw)]">
						[ what we are ]
					</h4>
					<div className="flex flex-col items-start gap-[min(104px,7.222vw)] mt-[min(16px,4.267vw)] md:mt-[min(22px,1.528vw)] md:flex-row">
						<HomeAboutPhilosophyTextJP />
						<HomeAboutPhilosophyTextEN />
					</div>
				</div>

				{/* Our Service */}
				<div className="mt-[min(106px,28.267vw)] md:mt-[min(230px,15.972vw)]">
					<div className="flex flex-col items-start justify-between w-[min(1145px,79.514vw)] md:flex-row">
						<h2 className="font-roboto font-normal text-[min(28px,7.467vw)] leading-[1em] md:text-[min(34px,2.361vw)] md:leading-[1.75em]">
							Our Service
						</h2>
						{/* What We Do */}
						<div className="mt-[min(40px,10.667vw)] md:mt-[min(16px,1.111vw)]">
							<h4 className="font-roboto font-normal text-[min(12px,3.2vw)] leading-[1.75em] text-[#7e7e7e] uppercase md:text-[min(12px,0.833vw)]">
								[ what we are ]
							</h4>
							<div className="mt-[min(16px,4.267vw)] md:mt-[min(28px,1.944vw)]">
								<p className="w-[min(327px,87.2vw)] font-zen font-normal text-[min(14px,3.733vw)] leading-[1.8em] whitespace-pre-wrap md:w-[min(521px,36.181vw)] md:text-[min(16px,1.111vw)] md:leading-[1.75em]">
									私たちはこれまで、数多く企業やブランド、
									<br />
									アーティストのクリエイティブ活動を
									<br className="block md:hidden" />
									サポートしてきました。
									<br />
									<br />
									写真撮影、映像制作等、
									<br className="block md:hidden" />
									グラフィックデザイン(印刷物)、WEBデザイン等、
									<br className="block md:hidden" />
									様々な制作物を一括でお受けすることで、
									<br className="block md:hidden" />
									全体を通して一貫したコンセプト・メッセージを
									<br className="block md:hidden" />
									伝えることが可能です。
								</p>
							</div>
						</div>
					</div>
					{/* sulution */}
					<HomeAboutOurServiceCarousel />
				</div>
			</div>
		</section>
	);
}
