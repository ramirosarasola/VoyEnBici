import React from "react";
import { Outlet } from "react-router-dom";
import { BlackLine } from "../components/atoms/black-line/BlackLine";
import { Footer } from "./footer/Footer";
import { Navbar } from "./navbar/Navbar";
import "./Layout.css";

export const Layout = () => {
	return (
		<div className="layout">
			<Navbar></Navbar>
			<Outlet />
			<BlackLine />
			<Footer />
		</div>
	);
};
