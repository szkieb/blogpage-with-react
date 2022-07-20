import { Post } from "../assets/BlogPostDatabase";

type BlogPostProps = { blogPost: Post };

export function BlogPost({ blogPost }: BlogPostProps) {
	return (
		<>
			<div
				id="blog-content"
				className="flex flex-col w-full h-full p-2 bg-slate-200 shadow-md whitespace-pre-line  "
			>
				<img
					id="blogPostImage"
					className="w-full h-2/3 object-cover"
					src={blogPost.blogPostImageSrc}
					alt={blogPost.blogPostImageAlt}
				/>
				<h2 id="blogPostHeadline" className="font-bold my-2 text-xl ">
					{blogPost.blogPostHeadline}
				</h2>
				<p id="blogPostText" className="overflow-scroll  w-full ">
					{blogPost.blogPostText}
				</p>
				{/* <div id="blogPostTags"></div> */}
			</div>
		</>
	);
}
