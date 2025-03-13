import React from "react";

export default function Section() {
	return (
		<div className="flex flex-row flex-wrap justify-center align-middle gap-5">
			<div className="section rounded-primary p-1 center border">
				{/* eslint-disable-next-line */}
				<a href="">A propos</a>
			</div>
			<div className="section rounded-primary p-1 center border border-transparent">
				{/* eslint-disable-next-line */}
				<a href="">La Naturopathie</a>
			</div>
			<div className="section rounded-primary p-1 center border ">
				{/* eslint-disable-next-line */}
				<a href="">Mon accompagnement</a>
			</div>
			<div className="section rounded-primary p-1 center border ">
				{/* eslint-disable-next-line */}
				<a href="">Prestation/Tarifs</a>
			</div>
		</div>
	);
}
