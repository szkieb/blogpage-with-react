import { ButtonLeft, ButtonRight } from "../components/button";
import { BlogPost } from "../components/BlogPost";
import { blogContent } from "../assets/BlogPostDatabase";
import { useState } from "react";

export function Carousel() {
	const [contentCounter, SetContentCounter] = useState(0);

	// breaking the website after clicking too many arrow keys

	window.addEventListener("keydown", (event) => {
		if (event.key === "ArrowLeft") {
			if (contentCounter > 0) {
				return SetContentCounter(contentCounter - 1);
			}
		} else if (event.key === "ArrowRight") {
			if (contentCounter < blogContent.length - 1) {
				return SetContentCounter(contentCounter + 1);
			}
		} else return contentCounter;
	});

	return (
		<div
			id="carousel"
			className="flex justify-center w-5/6 h-[70vh] whitespace-pre-line"
		>
			<ButtonLeft fufu={SetContentCounter} />
			<BlogPost blogPost={blogContent[contentCounter]} />
			<ButtonRight fufu={SetContentCounter} />
		</div>
	);
}
