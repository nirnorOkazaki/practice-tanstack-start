import { HomeTopicsNewsList } from "@/components/home/HomeTopicsComponents";

// const NEWS_DATA = [
// 	{
// 		id: 1,
// 		date: "2025.10.01",
// 		title: "サイトをリニューアル致しました。",
// 		description: "弊社WEBサイトをリニューアルいたしました。",
// 		links: [
// 			{ href: "/", label: "外部リンク外部リンク" },
// 			{ href: "/", label: "外部リンク" },
// 		],
// 	},
// 	{
// 		id: 2,
// 		date: "2025.09.15",
// 		title: "新サービスを開始しました。",
// 		description: "新しいサービスを開始しましたので、ぜひご利用ください。",
// 	},
// ];

const NEWS_DATA = [
	{
		id: 1,
		date: "2025.10.01",
		title: "サイトをリニューアル致しました。",
		description: "弊社WEBサイトをリニューアルいたしました。",
        links:[]
	}
];

export default function HomeTopics() {
    
	return (
		<section className="mt-[min(156px,41.6vw)] md:mt-[min(320px,22.222vw)]">
			<div className="w-[min(327px,87.2vw)] mx-auto md:w-[min(1248px,86.667vw)]">
				<div className="w-fit ml-0 md:ml-auto">
					<h2 className="font-roboto font-normal text-[min(28px,7.467vw)] leading-[1em] md:text-[min(34px,2.361vw)] md:leading-[1.75em]">Topics</h2>
					<div className="mt-[min(40px,10.667vw)] md:mt-[min(56px,3.889vw)]">
						<h4 className="font-roboto font-normal text-[min(12px,3.2vw)] leading-[1.75em] text-[#7e7e7e] uppercase md:text-[min(12px,0.833vw)]">[ news ]</h4>
					</div>
					<div className="mt-[min(40px,10.667vw)] md:mt-[min(32px,2.222vw)]">
						<ul>
							{NEWS_DATA.map((news) => (
								<li key={news.id} className="border-t border-[#d9d9d9] [&:last-child]:border-b">
									<HomeTopicsNewsList
                                        date={news.date}
                                        title={news.title}
                                        body={news.description}
                                        links={news.links}
                                    />
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
