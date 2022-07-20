import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export function About() {
	return (
		<>
			<Header />
			<div className="flex justify-center ">
				<Sidebar />
			</div>
			;
		</>
	);
}
