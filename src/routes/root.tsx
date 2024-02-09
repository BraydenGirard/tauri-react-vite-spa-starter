import { Link, Outlet, useLoaderData, Form } from "react-router-dom";

export async function loader(): Promise<{id: number, name: string}[]>{
	console.log('Fetch data here')
	return [{id: 1, name: "Brayden"}];
}

export async function action() {
	alert('Action run')
	return null;
}

export default function Root() {
	const data = useLoaderData() as {id: number, name: string}[];
	return (
		<div className="container mx-auto px-4">
			<nav>
				<ul>
					<li>
						<Link to={`/`}>Home</Link>
					</li>
					<li>
						<Link to={`page`}>A Page</Link>
					</li>
				</ul>
			</nav>
			<h1 className="text-3xl text-blue-600">Root Data Example: {data[0].name}</h1>
			<Form method="post">
            	<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Test Submit</button>
          	</Form>
			<Outlet />
		</div>
	);
  }