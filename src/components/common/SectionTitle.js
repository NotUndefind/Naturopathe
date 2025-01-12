import React from "react";

export default function SectionTitle(props) {
	return (
		<h3 className="text-center font-title text-4xl text-primary">
			{props.title}
		</h3>
	);
}
