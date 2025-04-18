import React from "react";

export default function Button(props) {
	//Ajout d'une prop mess pour gerer le texte du bouton
	return (
		<a href={props.href} className="text-white">
			<div className="content-center cursor-pointer">
				<div className="bg-primary rounded-primary px-2 py-1 text-white">
					{props.mess}
				</div>
			</div>
		</a>
	);
}
