import React from "react";

//Components
import Logo from "../common/Logo";
import Section from "../common/Section";
import Button from "../common/Button";

//Functions
import { toggleMenu } from "./includes/function";

//Assets
import image from "../../assets/logormb.png";
import burgerClose from "../../assets/burgerClose.svg";

export default function Header() {
	return (
		<div className="flex flex-row flex-wrap place-content-around rounded-primary shadow-2xl bg-shadow px-4 py-2 fixed  left-1/2 -translate-x-1/2  2xl:w-[1536px] xl:w-[1280px] text-nowrap w-full">
			<div className="content-center order-1">
				<Logo src={image} className="w-16"></Logo>
			</div>
			<div
				className="content-center order-2 hidden md:block"
				id="section"
			>
				<Section></Section>
			</div>
			<div
				className="content-center order-3 hidden md:block"
				id="contact"
			>
				<Button mess="Contactez moi"></Button>
			</div>
			<div className="md:hidden flex order-4">
				<button onClick={toggleMenu}>
					<img src={burgerClose} alt="" className="off" id="burger" />
				</button>
			</div>
		</div>
	);
}
