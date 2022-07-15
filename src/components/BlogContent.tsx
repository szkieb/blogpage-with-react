import { blogContent } from "../assets/BlogPostDatabase";

export function BlogContent() {
	const content = blogContent.map((blogPost) => {
		return (
			<div id="blog-content" className="w-2/3 p-2 bg-slate-200 shadow-md">
				<img
					id="blogPostImage"
					className="w-full h-1/3 object-cover"
					src={blogPost.blogPostImageSrc}
					alt={blogPost.blogPostImageAlt}
				/>
				<h2 id="blogPostHeadline" className="font-bold my-2 text-xl ">
					{blogPost.blogPostHeadline}
				</h2>
				<p id="blogPostText" className="">
					{blogPost.blogPostText}
				</p>
				{/* <div id="blogPostTags"></div> */}
			</div>
		);
	});

	return <>{content}</>;
}
