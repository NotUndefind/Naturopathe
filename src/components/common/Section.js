import React from "react";

export default function Section() {
	return (
		<div className="flex flex-row flex-wrap justify-center align-middle gap-5">
			<div className="section rounded-primary p-1 center border hover:bg-primary hover:text-white transition ease-in-out shadow-2xl px-2 py-1">
				{/* eslint-disable-next-line */}
				<a href="#firstSection">A propos</a>
			</div>
			<div className="section rounded-primary p-1 center border hover:bg-primary hover:text-white transition ease-in-out shadow-2xl px-2 py-1">
				{/* eslint-disable-next-line */}
				<a href="#whatIsIt">La Naturopathie</a>
			</div>
			<div className="section rounded-primary p-1 center border hover:bg-primary hover:text-white transition ease-in-out shadow-2xl px-2 py-1">
				{/* eslint-disable-next-line */}
				<a href="#MonAccompagnement">Mon accompagnement</a>
			</div>
			<div className="section rounded-primary p-1 center border hover:bg-primary hover:text-white transition ease-in-out shadow-2xl px-2 py-1 ">
				{/* eslint-disable-next-line */}
				<a href="#Prestation">Prestation/Tarifs</a>
			</div>
		</div>
	);
}
