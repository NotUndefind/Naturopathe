import React from "react";

export default function HeroHeader() {
	return (
		<div className="text-center mx-auto rounded-primary bg-cover bg-no-repeat bg-[url('./assets/heroheader.jpeg')] h-[500px] content-center shadow-2xl">
			<div className="h-full flex flex-col place-content-evenly">
				<h1 className="text-primary font-title text-7xl">
					Bénédicte Manin
				</h1>

				<h2 className="text-white font-title text-4xl">
					Ipsum mollit id velit eu dolore culpa ullamco.
				</h2>
			</div>
		</div>
	);
}
