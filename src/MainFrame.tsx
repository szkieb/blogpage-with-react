import { useState } from "react";
import { BlogContent } from "./components/BlogContent";
import { BlogPost } from "./components/BlogPost";
import { blogContent } from "./assets/BlogPostDatabase";
import { ButtonLeft, ButtonRight } from "./components/button";
import { Sidebar } from "./components/Sidebar";

export function MainFrame() {
	const [contentCounter, SetContentCounter] = useState(0);
	console.log("contentcounter" + contentCounter);

	return (
		<>
			<div className="flex justify-between p-6 h-5/6 transition duration-700">
				<Sidebar />
				<ButtonLeft fufu={SetContentCounter} />
				<BlogPost blogPost={blogContent[contentCounter]} />
				<ButtonRight fufu={SetContentCounter} />
			</div>
		</>
	);
}
