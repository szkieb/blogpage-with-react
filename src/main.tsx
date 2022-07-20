import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import App from "./App";
import { BlogPost } from "./components/BlogPost";
import { Header } from "./components/Header";
import "./index.css";
import { MainFrame } from "./MainFrame";
import { About } from "./Routes/About";
import { BlogPage } from "./Routes/BlogPage";
import { BlogPostPage } from "./Routes/BlogPostPage";
import { Carousel } from "./Routes/Carousel";
import { CatchRoute } from "./Routes/CatchRoute";
import { Home } from "./Routes/Home";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainFrame />}>
					<Route index element={<Home />} />

					<Route path="/blog">
						<Route index element={<BlogPage />} />
						<Route path=":blogPostId" element={<BlogPostPage />} />
					</Route>
					<Route path="/carousel" element={<Carousel />} />
				</Route>
				<Route path="/about" element={<About />} />
				<Route path="*" element={<CatchRoute />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
