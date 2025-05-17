import React from "react";
//Components

export default function ContactForm() {
	return (
		<div className="border-solid border-2 border-primary rounded-primary p-1 shadow-2xl bg-[url('./assets/cab.jpeg')] bg-cover bg-no-repeat h-full content-start text-white min-h-[600px] text-center bg-center flex flex-col gap-2 flex-wrap items-center py-5">
			<p className="md:text-xl w-full text-lg">
				Email : benedicte.manin.naturo@gmail.com
			</p>
			<p className="md:text-xl w-full text-lg">Tel : 06 09 89 45 10</p>
		</div>
	);
}
