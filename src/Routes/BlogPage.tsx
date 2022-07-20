import { Outlet } from "react-router-dom";
import { BlogContent } from "../components/BlogContent";

export function BlogPage() {
	return (
		<>
			<BlogContent />
			<Outlet />
		</>
	);
}
