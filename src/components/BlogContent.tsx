import { Link } from "react-router-dom";
import { blogContent } from "../assets/BlogPostDatabase";

export function BlogContent() {
	const content = blogContent.map((blogPost) => {
		return (
			<Link to={`/blog/${blogPost.blogPostId}`}>
				<div
					id="blog-content"
					className="h-[50vh]  bg-slate-200 shadow-md rounded-md p-2 hover:scale-105 hover:shadow-xl"
				>
					<img
						id="blogPostImage"
						className="w-full h-1/3 object-cover"
						src={blogPost.blogPostImageSrc}
						alt={blogPost.blogPostImageAlt}
					/>
					<h2 id="blogPostHeadline" className="font-bold my-2 text-xl ">
						{blogPost.blogPostHeadline}
					</h2>
					<p id="blogPostText" className="w-full h-fit line-clamp-6">
						{blogPost.blogPostText}
					</p>
					{/* <div id="blogPostTags"></div> */}
				</div>
			</Link>
		);
	});

	return (
		<>
			<div className="pb-6 grid grid-cols-3 gap-6 h-fit">{content}</div>
		</>
	);
}
