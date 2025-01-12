import React from "react";

export default function Section() {
	return (
		<div className="flex flex-row flex-wrap place-content-center text-center content-center gap-5 ">
			<div className="section">
				{/* eslint-disable-next-line */}
				<a href="">A propos</a>
			</div>
			<div className="section">
				{/* eslint-disable-next-line */}
				<a href="">La Naturopathie</a>
			</div>
			<div className="section">
				{/* eslint-disable-next-line */}
				<a href="">Mon accompagnement</a>
			</div>
			<div className="section">
				{/* eslint-disable-next-line */}
				<a href="">Prestation/Tarifs</a>
			</div>
		</div>
	);
}
