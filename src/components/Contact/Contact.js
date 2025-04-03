import React from "react";

//Components
import SectionTitle from "../common/SectionTitle";
import ContactLocation from "./includes/ContactLocation";
import ContactForm from "./includes/ContactForm";
import SubSectionTitle from "../common/SubSectionTitle";

export default function Contact() {
	return (
		<div id="Contact" className="">
			<SectionTitle title="Contact"></SectionTitle>

			<div className="flex flex-col md:flex-row md:space-x-5">
				<div className="flex-1 flex flex-col">
					<SubSectionTitle subTitle="Coordonnées"></SubSectionTitle>
					<ContactForm />
				</div>

				<div className="flex-1 flex flex-col">
					<SubSectionTitle subTitle="Localisation"></SubSectionTitle>
					<div className="flex-1">
						<ContactLocation />
					</div>
				</div>
			</div>
		</div>
	);
}
