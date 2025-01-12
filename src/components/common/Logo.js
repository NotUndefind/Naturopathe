import React from "react";
export default function Logo(props) {
	//Ajout d'une prop className pour gerer les styles
	//Ajout d'une prop src pour gerer l'image du logo
	return (
		<div className={"content-center p-1 " + props.className}>
			<img className="" src={props.src} alt="Logo de l'entreprise" />
		</div>
	);
}
