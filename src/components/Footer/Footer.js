import React from "react";

//Components
import Logo from "../common/Logo";
import Copyright from "./includes/Copyright";

//Assets
import image from "../../assets/logoNamermb.png";

export default function Footer() {
	return (
		<div className="text-center mx-auto pt-4 mt-10">
			<Logo src={image} className="mx-auto w-20"></Logo>

			<Copyright></Copyright>

			<div className="text-copyright opacity-20">
				Made By
				<a href="https://julesbourin.com"> Jules Bourin</a>
			</div>
		</div>
	);
}
