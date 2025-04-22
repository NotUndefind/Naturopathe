import React from "react";

export default function ContactLocation() {
	return (
		<div className="bg-primary rounded-primary p-5 font-text text-center shadow-2xl grid row-auto gap-5 flex-1 h-full text-white">
			<div className="grid grid-rows-2 gap-5">
				<p className="text-xl">50 Pass. des Cèdres,</p>
				<p className="text-xl">38121 Chonas-l'Amballan</p>
			</div>

			<iframe
				title="map"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.438588997896!2d4.814534912721595!3d45.46096817095324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f51f7f681d20bb%3A0x665f9302b7668427!2s50%20Pass.%20des%20C%C3%A8dres%2C%2038121%20Chonas-l&#39;Amballan!5e0!3m2!1sfr!2sfr!4v1745311455604!5m2!1sfr!2sfr"
				width="600"
				height="450"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				className="rounded-primary"
			></iframe>
		</div>
	);
}
