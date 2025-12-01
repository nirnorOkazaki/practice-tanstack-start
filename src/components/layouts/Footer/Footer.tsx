import { Link } from "@tanstack/react-router";
import FooterList from "./FooterList";
import FooterSnsList from "./FooterSnsList";

export default function Footer() {
	return (
		<footer className="mt-[min(324px,22.5vw)]">
			<div className="w-[min(327px,87.2vw)] md:w-[min(1248px,86.667vw)] mx-auto py-[min(80px,5.556vw)]">
				<div>
					<Link to="/" className="block">
						<div className="flex items-center justify-center w-[min(327px,87.2vw)] h-[min(140px,37.333vw)] bg-[#1a1a1a] md:w-[min(1248px,86.667vw)] md:h-[min(191px,13.264vw)]">
							<div className="flex items-center gap-[min(16px,4.267vw)] md:gap-[min(16px,1.111vw)]">
								<p className="font-roboto font-normal text-[min(26px,6.933vw)] leading-[1em] tracking-[0.02em] text-[#eaeaea] md:text-[min(32px,2.222vw)]">Contact Us</p>
								<img src="/img/footer-contact-arrow.svg" alt="" className="w-[min(20px,5.333vw)] h-[min(16px,4.267vw)] md:w-[min(20px,1.389vw)] md:h-[min(16px,1.111vw)]" />
							</div>
						</div>
					</Link>
				</div>
				<div className="flex flex-col items-start justify-normal w-[min(1248px,86.667vw)] mt-[min(56px,14.933vw)] md:flex-row md:items-end md:justify-between md:mt-[min(64px,4.444vw)]">
					<div>
						<ul>
							<li>
								<FooterList label="WORKS" to="/works" />
							</li>
							<li>
								<FooterList label="ABOUT US" to="/about-us" />
							</li>
							<li>
								<FooterList label="CONTACT" to="/contact" />
							</li>
						</ul>
					</div>
					<div className="mt-[min(56px,14.933vw)] md:mt-0">
						<div>
							<ul className="flex gap-[min(4px,1.067vw)] md:gap-[min(4px,0.278vw)]">
								<li className="flex gap-[min(4px,1.067vw)] font-roboto font-normal text-[min(12px,3.2vw)] leading-[1.833em] text-[#7e7e7e] md:gap-[min(4px,0.278vw)] md:text-[min(12px,0.833vw)] md:leading-[1.5em] [&:not(:last-child)]:after:content-['/']">
									<FooterSnsList label="X" to="https://twitter.com/" />
								</li>
								<li className="flex gap-[min(4px,1.067vw)] font-roboto font-normal text-[min(12px,3.2vw)] leading-[1.833em] text-[#7e7e7e] md:gap-[min(4px,0.278vw)] md:text-[min(12px,0.833vw)] md:leading-[1.5em] [&:not(:last-child)]:after:content-['/']">
									<FooterSnsList label="Instagram" to="https://instagram.com/" />
								</li>
								<li className="flex gap-[min(4px,1.067vw)] font-roboto font-normal text-[min(12px,3.2vw)] leading-[1.833em] text-[#7e7e7e] md:gap-[min(4px,0.278vw)] md:text-[min(12px,0.833vw)] md:leading-[1.5em] [&:not(:last-child)]:after:content-['/']">
									<FooterSnsList label="Facebook" to="https://facebook.com/" />
								</li>
							</ul>
						</div>
						<div>
							<p className="font-roboto font-normal text-[min(12px,3.2vw)] leading-[1.833em] text-[#7e7e7e] md:text-right md:text-[min(12px,0.833vw)]">&copy;nirnor.inc</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
