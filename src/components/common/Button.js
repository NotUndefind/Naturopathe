import React from "react";

export default function Button(props) {
	//Ajout d'une prop mess pour gerer le texte du bouton
	return (
		<div className="content-center">
			<a href="test.com" className="text-white">
				<div className="bg-primary rounded-primary px-2 py-1 text-white">
					{props.mess}
				</div>
			</a>
		</div>
	);
}
