export type Content = Array<Post>;

export type Post = {
	blogPostId: number;
	blogPostImageSrc: string;
	blogPostImageAlt: string;
	blogPostHeadline: string;
	blogPostText: string;
};

export const blogContent: Content = [
	{
		blogPostId: 1,
		blogPostImageSrc:
			"https://www.datocms-assets.com/14946/1638186862-reactjs.png",
		blogPostImageAlt: "The React Logo",
		blogPostHeadline: "React: What is it Good for?",
		blogPostText:
			"React (aka ReactJS) is a free and open-source front-end JavaScript library. It can be used t build interactive user interfaces, including menus and menu tabs, a search bar, buttons, and other features. These features are called components and are built in React and intended for easy reusability. React can be used to build large, interactive server-rendered web applicatons or mobile apps for Android and iOS using the Native library. It can equally be used to build data visualization tools and dashboards or to implement new interactive website features. React is a great tool for creating individual applications that change data without reloading the web page.",
	},
	{
		blogPostId: 2,
		blogPostImageSrc:
			"https://hub.packtpub.com/wp-content/uploads/2019/02/React-web-hooks-2.png",
		blogPostImageAlt: "Code Example of a UseState",
		blogPostHeadline: "React UseState explained",
		blogPostText:
			"The UseState is a feature introduced in React 16.8. It is a so-called Hook, in other words, a function that let's you 'hook into' React features. UseState, therefore, is a Hook that lets you add React state to function components. While normally variables 'disappear' once a function exits, state variables are preserved by React.\n For example, to keep track of how many times the user has clicked a button, we use the useState Hook, to keep track and increment the 'count' state. We start by importing the useState Hook from React. Then, we call UseState and declare an initial state, which can be, e.g. a number, a string, or a boolean. UseState returns a pair of values: the current state, which in our example is called 'count', and a function that updates it. We call the function whenever we want to change the current state and we can use the state variable in our functions which will be automatically updated whenever the state changes.",
	},
	{
		blogPostId: 3,
		blogPostImageSrc:
			"https://res.cloudinary.com/practicaldev/image/fetch/s--0EYntG8D--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://i.ibb.co/bzcHGj2/image.png",
		blogPostImageAlt: "Default Vite + React Counting App",
		blogPostHeadline: "Creating a Counter in React",
		blogPostText:
			"In order to build a counter in React, we need to first import the useState Hook from React and create a way to change the counter, e.g. a button. If you want to see a live example, a counter button will be created automatically every time you set up a React project using Vite (see image above). The next step is to call UseState, set a default value and create your bindings for the state value and the function used to change the state, e.g. 'const [count, setCount] = UseState(0)'.\n We can then set the button onClick attribute to run a function that updates the count using setCount, e.g. '<button onClick = {()=>setCount(count+1)}>Button Label</button>'.\n Finally, we can display the current state by calling it inside a React component, e.g. App,: 'export function App (){return <div>The current count is: {count}</div>}'",
	},
	{
		blogPostId: 4,
		blogPostImageSrc:
			"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
		blogPostImageAlt: "A cat",
		blogPostHeadline: "This kitten is such a poser",
		blogPostText:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, nostrum dolores perferendis quo debitis vero, magnam ipsum, laboriosam nihil ipsam est impedit deleniti magni voluptatum eum cumque rem laudantium dolorem.",
	},
	{
		blogPostId: 5,
		blogPostImageSrc:
			"https://images.unsplash.com/photo-1601985705806-5b9a71f6004f",
		blogPostImageAlt: "Potted Plants",
		blogPostHeadline: "Some nice-looking plants",
		blogPostText:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, nostrum dolores perferendis quo debitis vero, magnam ipsum, laboriosam nihil ipsam est impedit deleniti magni voluptatum eum cumque rem laudantium dolorem.",
	},
	{
		blogPostId: 6,
		blogPostImageSrc:
			"https://images.unsplash.com/photo-1498804103079-a6351b050096",
		blogPostImageAlt: "An assortment of coffees",
		blogPostHeadline: "Coffee is life",
		blogPostText:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, nostrum dolores perferendis quo debitis vero, magnam ipsum, laboriosam nihil ipsam est impedit deleniti magni voluptatum eum cumque rem laudantium dolorem.",
	},
	{
		blogPostId: 7,
		blogPostImageSrc:
			"https://images.unsplash.com/photo-1578985545062-69928b1d9587",
		blogPostImageAlt: "Chocolate Cake",
		blogPostHeadline: "I am getting hungry",
		blogPostText:
			"This cake is looking so damn good! Actually, I should change the image to a proper Black Forest Cherry Cake. That's the real deal!",
	},
	{
		blogPostId: 8,
		blogPostImageSrc:
			"https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/main_image_deep_field_smacs0723-5mb.jpg",
		blogPostImageAlt: "An Infrared Image of the Universe",
		blogPostHeadline: "Deepest Infrared Image of Universe Yet",
		blogPostText:
			"Published July 11, this image of galaxy cluster SMACS 0723 was taken by NASA’s James Webb Space Telescope. It covers a patch of sky approximately the size of a grain of sand held at arm’s length by someone on the ground. Isn't that crazy!? This magnificent photo represents the deepest and sharpest infrared image of the distant universe so far. And, it makes a helluva desktop background!",
	},
	{
		blogPostId: 9,
		blogPostImageSrc:
			"https://www.serieslyawesome.tv/wp-content/uploads/2022/05/Our-Flag-Means-Death-Serie-review-02.jpg",
		blogPostImageAlt: "A Group of Pirates",
		blogPostHeadline: "Pirates are cool",
		blogPostText:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, nostrum dolores perferendis quo debitis vero, magnam ipsum, laboriosam nihil ipsam est impedit deleniti magni voluptatum eum cumque rem laudantium dolorem.",
	},
];
