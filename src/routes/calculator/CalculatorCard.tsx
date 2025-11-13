import { createFileRoute } from "@tanstack/react-router";
import { useId, useState } from "react";

export const Route = createFileRoute("/calculator/CalculatorCard")({
	component: CalculatorCard,
});

export default function CalculatorCard() {
	const frame = 1440;
	const [number, setNumber] = useState<number | "">(0);
	const inputId = useId();

	return (
		<div className="w-[min(1248px,86.666vw)] mx-auto bg-white rounded-lg shadow-lg p-8">
			<div className="grid grid-cols-3 gap-6">
				{/* 入力欄 */}
				<div className="flex flex-col">
					<label
						htmlFor={inputId}
						className="text-lg font-semibold mb-3 text-gray-700"
					>
						入力欄
					</label>
					<input
						id={inputId}
						type="number"
						value={number}
						onChange={(e) =>
							setNumber(e.target.value === "" ? "" : Number(e.target.value))
						}
						placeholder="数値を入力してください"
						className="w-full px-4 py-3 text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
					/>
				</div>
				{/* 入力値 */}
				<div className="flex flex-col p-4 bg-gray-50 rounded-lg border border-gray-200">
					<h2 className="text-lg font-semibold mb-3 text-gray-700">入力値</h2>
					<p className="text-2xl font-mono text-gray-900 mt-auto">
						{number === "" ? "未入力" : number}
					</p>
				</div>
				{/* 計算結果 */}
				<div className="flex flex-col p-4 bg-blue-50 rounded-lg border border-blue-200">
					<h2 className="text-lg font-semibold mb-3 text-blue-800">
						計算結果
					</h2>
					<p className="text-2xl font-mono text-blue-900 mt-auto">
						{number === "" || number === 0
							? "—"
							: `${((number / frame) * 100).toFixed(3)}%`}
					</p>
				</div>
			</div>
		</div>
	);
}
