import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Header } from "./components/Header";
import "./index.css";
import { MainFrame } from "./MainFrame";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Header />
		<MainFrame />
		{/* 
    It would be nice to have a footer as well 
      <Footer /> 
      */}
	</React.StrictMode>
);
