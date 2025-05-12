import React from "react";

//Components
import Description from "./includes/Description";
import PersonView from "./includes/PersonView";

//Assets
import SectionTitle from "../common/SectionTitle";

export default function FirstSection() {
	return (
		<div id="firstSection" className="space-y-10 scroll-mt-20">
			<SectionTitle title="A propos de moi"></SectionTitle>

			<div className="grid sm:grid-cols-2 text-center sm:text-start">
				<Description></Description>

				<div className="sm:block hidden">
					<PersonView></PersonView>
				</div>
			</div>
		</div>
	);
}
