import React from "react";

export default function SubSectionTitle(props) {
	return (
		<div>
			<h4 className="text-primary font-title text-3xl text-center m-5">
				{props.subTitle}
			</h4>
		</div>
	);
}
