import React from "react";
//Components

export default function ContactForm() {
	return (
		<div className="border-solid border-2 border-primary rounded-primary p-1 shadow-2xl bg-[url('./assets/cab.jpeg')] bg-cover bg-no-repeat h-full content-start text-white min-h-[600px] text-center bg-center flex flex-col gap-2 flex-wrap items-center py-5">
			<p className="md:text-xl w-full text-lg">
				<a href="mailto:benedicte.manin.naturo@gmail.com">
					Email : benedicte.manin.naturo@gmail.com
				</a>
			</p>
			<p className="md:text-xl w-full text-lg">
				<a href="tel:0609894510">Tel : 06 09 89 45 10</a>
			</p>
		</div>
	);
}
