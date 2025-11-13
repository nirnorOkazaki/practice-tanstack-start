import { createFileRoute } from "@tanstack/react-router";
import JokesList from "@/components/JokesList";
import { getJokes } from "@/serverActions/jokesActions";

export const Route = createFileRoute("/")({
	loader: async () => {
		return getJokes();
	},
	component: App,
});

function App() {
  const jokes = Route.useLoaderData() || [];

	return (
		<div>
			<h1>Hello World</h1>
      <JokesList jokes={jokes} />
		</div>
	);
}
