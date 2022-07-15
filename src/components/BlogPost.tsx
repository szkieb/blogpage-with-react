import { Post } from "../assets/BlogPostDatabase";

type example1 = Array<string>;
type example2 = [string, string];
type example3 = Record<string, string>;
type example4 = { prop1: string; prop2: string };

type BlogPostProps = { blogPost: Post };

export function BlogPost(props: BlogPostProps) {
	// const blogPost = props.blogPost
	const { blogPost } = props;
	return (
		<>
			<div
				id="blog-content"
				className="flex flex-col w-2/3 h-full p-2 bg-slate-200 shadow-md "
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
				<p id="blogPostText" className="overflow-scroll  h-full w-full ">
					{blogPost.blogPostText}
				</p>
				{/* <div id="blogPostTags"></div> */}
			</div>
		</>
	);
}
