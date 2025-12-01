export default function HomeMember() {
	return (
		<section className="mt-[min(160px,42.667vw)] md:mt-[min(320px,22.222vw)]">
			<div className="flex flex-col items-start justify-between w-[min(327px,87.2vw)] mx-auto md:flex-row md:w-[min(1248px,86.667vw)]">
				<h2 className="font-roboto font-normal text-[min(28px,7.467vw)] leading-[1em] md:text-[min(34px,2.361vw)] md:leading-[1.75em]">Member</h2>
				<div className="mt-[min(40px,10.667vw)] md:mt-0">
					<ul>
						{HOME_MEMBER_DATA.map((item) => (
							<li key={item.id} className="border-t border-[#d9d9d9] [&:last-child]:border-b">
								<div className="flex flex-col items-start gap-[min(8px,2.133vw)] w-[min(327px,87.2vw)] py-[min(16px,4.267vw)] md:flex-row md:items-center md:gap-[min(40px,2.778vw)] md:w-[min(832px,57.778vw)] md:py-[min(32px,2.222vw)]">
									{/* Role */}
									<div className="flex flex-row items-center gap-[min(4px,1.067vw)] w-full md:gap-[min(6px,0.417vw)] md:w-[min(363px,25.208vw)]">
										{item.role.map((role) => (
											<p key={role} className="font-roboto font-normal text-[min(14px,3.733vw)] leading-[1.75em] md:text-[min(16px,1.111vw)] [&:not(:last-child)]:after:content-[',']">
												{role}
											</p>
										))}
									</div>
									{/* Name */}
									<div className="w-full md:w-[min(181px,12.569vw)]">
										<p className="font-roboto font-normal text-[min(14px,3.733vw)] leading-[1em] text-[#7e7e7e] md:text-[min(16px,1.111vw)] md:leading-[1.75em]">{item.name}</p>
									</div>
									{/* SNS */}
									<div className="flex flex-row items-center gap-[min(6px,1.6vw)] md:gap-[min(16px,1.111vw)]">
										{item.sns.map((_item) => (
											<a key={_item.label} href={_item.url} className="font-roboto font-normal text-[min(14px,3.733vw)] leading-[1.75em] underline md:text-[min(16px,1.111vw)]">
												{_item.label}
											</a>
										))}
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

const HOME_MEMBER_DATA = [
	{
		id: 1,
		name: "NISHIDA Koji",
		role: ["CEO", "Art Director", "Designer", "Photographer"],
		sns: [
			{ label: "X", url: "https://x.com/nishida_nirnor" },
			{ label: "instagram", url: "https://www.instagram.com/nishida_nirnor/" },
		],
	},
	{
		id: 2,
		name: "NAITO Koji",
		role: ["Technical Director"],
		sns: [],
	},
	{
		id: 3,
		name: "OKAZAKI Shohei",
		role: ["Front-end Engineer"],
		sns: [],
	},
	{
		id: 4,
		name: "HASEGAWA Octo",
		role: ["Art Director", "Designer"],
		sns: [{ label: "X", url: "https://x.com/octo_y" }],
	},
	{
		id: 5,
		name: "MANO Azusa",
		role: ["Designer"],
		sns: [],
	},
	{
		id: 6,
		name: "KANEKO Haru",
		role: ["Photographer", "Designer"],
		sns: [
			{ label: "X", url: "https://x.com/photographaru" },
			{ label: "instagram", url: "https://www.instagram.com/photographaru/" },
		],
	},
	{
		id: 7,
		name: "YOKOYAMA Yukari",
		role: ["Project Manager"],
		sns: [],
	},
];
