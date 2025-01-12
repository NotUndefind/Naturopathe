import React from "react";

//Components
import Description from "./includes/Description";
import PersonView from "./includes/PersonView";

//Assets
import SectionTitle from "../common/SectionTitle";

export default function FirstSection() {
	return (
		<div className="space-y-10">
			<SectionTitle title="Qui suis-je ?"></SectionTitle>

			<div className="grid sm:grid-cols-2 text-center sm:text-start">
				<Description></Description>

				<div className="sm:block hidden">
					<PersonView></PersonView>
				</div>
			</div>
		</div>
	);
}
