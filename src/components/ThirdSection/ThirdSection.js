import React from "react";

//Components
import SectionTitle from "../common/SectionTitle";
import Card from "./includes/Card";

export default function ThirdSection() {
	return (
		<div className="space-y-10 mb-10">
			<SectionTitle title="Prestation/Tarifs"></SectionTitle>

			<div className="flex md:flex-row flex-col flex-wrap gap-5 place-content-center">
				<div className="basis-1/3 w-fit md:max-w-[300px]">
					<Card></Card>
				</div>
				<div className="basis-1/3 w-fit md:max-w-[300px]">
					<Card></Card>
				</div>
				<div className="basis-1/3 w-fit md:max-w-[300px]">
					<Card></Card>
				</div>
				<div className="basis-1/3">
					<Card></Card>
				</div>
				<div className="basis-1/3">
					<Card></Card>
				</div>
			</div>
		</div>
	);
}
