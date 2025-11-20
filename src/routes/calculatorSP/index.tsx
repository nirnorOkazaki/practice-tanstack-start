import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import CalculatorCard from "./CalculatorCard";

export const Route = createFileRoute("/calculatorSP/")({
	component: RouteComponent,
});

function RouteComponent() {
	const [cards, setCards] = useState<number[]>([1]);

	const addCard = () => {
		setCards([...cards, cards.length + 1]);
	}

	return (
		<section className="w-full min-h-screen bg-gray-50 py-8">
			<div className="w-[90%] mx-auto">
				<h1 className="text-4xl font-bold mb-8">Calculator</h1>

				{/* カード */}
				<div className="space-y-6">
					{cards.map((id) => (
						<CalculatorCard key={id} />
					))}
				</div>
				
				<button 
					type="button"
					onClick={addCard}
					className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
				>
					追加
				</button>
			</div>
		</section>
	)
}
