import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function Home() {
	return (
		<>
			<div className="flex flex-col gap-4 pt-4 text-lg">
				<h2 className="text-xl font-bold">Hello, this is Home.</h2>
				<br />
				<p>I know, Home is boring.</p>
				<br /> <p>Better be checking out the cool stuff: </p>
				<ul className="list-disc">
					<li className="mx-4 my-2">The Blog Page</li>
					<li className="mx-4 my-2">The Carousel</li>
					<li className="mx-4 my-2">The (hidden) 404 Page</li>
				</ul>
				<p>
					You can also check out the not so fun, actually super boring, About
					page.
				</p>
			</div>
		</>
	);
}
