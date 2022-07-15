export type Content = Array<Post>;

export type Post = {
	blogPostTitle: string;
	blogPostImageSrc: string;
	blogPostImageAlt: string;
	blogPostHeadline: string;
	blogPostText: string;
};

export const blogContent: Content = [
	{
		blogPostTitle: "Poser Cat",
		blogPostImageSrc:
			"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
		blogPostImageAlt: "A cat",
		blogPostHeadline: "This kitten is such a poser",
		blogPostText:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, nostrum dolores perferendis quo debitis vero, magnam ipsum, laboriosam nihil ipsam est impedit deleniti magni voluptatum eum cumque rem laudantium dolorem.",
	},
	{
		blogPostTitle: "Potted Plants",
		blogPostImageSrc:
			"https://images.unsplash.com/photo-1601985705806-5b9a71f6004f",
		blogPostImageAlt: "Potted Plants",
		blogPostHeadline: "Some nice-looking plants",
		blogPostText:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, nostrum dolores perferendis quo debitis vero, magnam ipsum, laboriosam nihil ipsam est impedit deleniti magni voluptatum eum cumque rem laudantium dolorem.",
	},
	{
		blogPostTitle: "Coffee Cult",
		blogPostImageSrc:
			"https://images.unsplash.com/photo-1498804103079-a6351b050096",
		blogPostImageAlt: "An assortment of coffees",
		blogPostHeadline: "Coffee is life",
		blogPostText:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, nostrum dolores perferendis quo debitis vero, magnam ipsum, laboriosam nihil ipsam est impedit deleniti magni voluptatum eum cumque rem laudantium dolorem.",
	},
	{
		blogPostTitle: "Chocolate Cake",
		blogPostImageSrc:
			"https://images.unsplash.com/photo-1578985545062-69928b1d9587",
		blogPostImageAlt: "Chocolate Cake",
		blogPostHeadline: "I am getting hungry",
		blogPostText:
			"This cake is looking so damn good! Actually, I should change the image to a proper Black Forest Cherry Cake. That's the real deal!",
	},
	{
		blogPostTitle: "Universe Captured",
		blogPostImageSrc:
			"https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/main_image_deep_field_smacs0723-5mb.jpg",
		blogPostImageAlt: "An Infrared Image of the Universe",
		blogPostHeadline: "Deepest Infrared Image of Universe Yet",
		blogPostText:
			"Published July 11, this image of galaxy cluster SMACS 0723 was taken by NASA’s James Webb Space Telescope. It covers a patch of sky approximately the size of a grain of sand held at arm’s length by someone on the ground. Isn't that crazy!? This magnificent photo represents the deepest and sharpest infrared image of the distant universe so far. And, it makes a helluva desktop background!",
	},
	{
		blogPostTitle: "Cool Pirates",
		blogPostImageSrc:
			"https://www.serieslyawesome.tv/wp-content/uploads/2022/05/Our-Flag-Means-Death-Serie-review-02.jpg",
		blogPostImageAlt: "A Group of Pirates",
		blogPostHeadline: "Pirates are cool",
		blogPostText:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, nostrum dolores perferendis quo debitis vero, magnam ipsum, laboriosam nihil ipsam est impedit deleniti magni voluptatum eum cumque rem laudantium dolorem.",
	},
];
