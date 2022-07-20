import { useParams } from "react-router-dom";
import { blogContent } from "../assets/BlogPostDatabase";
import { BlogPost } from "../components/BlogPost";

export function BlogPostPage() {
	const { blogPostId } = useParams();
	const postIndex = Number(blogPostId) - 1;
	console.log(blogPostId);

	return (
		<>
			<BlogPost blogPost={blogContent[postIndex]} />
		</>
	);
}
