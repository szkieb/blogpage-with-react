import { useEffect, useState } from "react";
import { BlogContent } from "./components/BlogContent";
import { BlogPost } from "./components/BlogPost";
import { blogContent } from "./assets/BlogPostDatabase";
import { ButtonLeft, ButtonRight } from "./components/button";
import { Sidebar } from "./components/Sidebar";
import {
	Transition,
	CSSTransition,
	SwitchTransition,
	TransitionGroup,
} from "react-transition-group";
import { removeAllListeners } from "process";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";

export function MainFrame() {
	return (
		<>
			<Header />
			<div className="flex justify-between p-6 h-5/6 duration-700">
				<Sidebar />
				<div className="h-fit px-14 w-4/5 flex justify-evenly p-2">
					<Outlet />
				</div>
				{/* 
    It would be nice to have a footer as well 
      <Footer /> 
      */}
			</div>
		</>
	);
}
