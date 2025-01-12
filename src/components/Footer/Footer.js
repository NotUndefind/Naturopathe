import React from "react";

//Components
import Section from "../common/Section";
import Logo from "../common/Logo";
import Copyright from "./includes/Copyright";

//Assets
import image from "../../assets/logoNamermb.png";

export default function Footer() {
	return (
		<div className="text-center mx-auto pt-4 mt-10">
			<Logo src={image} className="mx-auto w-20"></Logo>

			<div className="container max-w-screen-md mx-auto py-2">
				<Section></Section>
			</div>

			<Copyright></Copyright>
		</div>
	);
}
