import React from "react";

//Assets
import image from "../../../assets/personView.jpeg";

export default function PersonView() {
	return (
		<div className="">
			<img
				src={image}
				alt=""
				className="max-h-fit object-cover rounded-primary mx-auto h-[552px] shadow-2xl bg-shadow"
			/>
		</div>
	);
}
