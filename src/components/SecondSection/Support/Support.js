import React from "react";

//Components
import SectionTitle from "../../common/SectionTitle";
import SwitchMode from "./includes/SwitchMode";

//Assets
import image1 from "../../../assets/plant.jpeg";
import image2 from "../../../assets/Feuilles de plante.jpg";
import image3 from "../../../assets/naturo.webp";
import image4 from "../../../assets/Zen Sand Stones.jpg";

//Tableau des textes
const tabsData = [
	{
		title: "La réflexologie plantaire",
		content: <>lol</>,
		image: image1,
	},
	{
		title: "Les fleurs de Bach",
		content: <>lol</>,
		image: image2,
	},
	{
		title: "Le massage relaxant californien",
		content: <>lol</>,
		image: image3,
	},
	{
		title: "Le drainage lymphatique manuel",
		content: <>lol</>,
		image: image4,
	},
];

export default function Support() {
	return (
		<div id="MonAccompagnement" className="accompagnement">
			<SectionTitle title="Mon accompagnement"></SectionTitle>

			<div className="my-10"></div>
			<div className=" shadow-2xl bg-shadow rounded-primary">
				<SwitchMode
					title={[
						"La réflexologie plantaire",
						"Les fleurs de Bach",
						"Le massage relaxant californien",
						"Le drainage lymphatique manuel",
					]}
				></SwitchMode>
				<div className="bg-primary rounded-b-primary flex flex-row place-content-between place-items-center descAccompagnement">
					<p
						id="supportText"
						className="col-span-3 text-center place-content-center p-10 text-white"
					>
						{tabsData[0].content}
					</p>
					<img
						id="supportImg"
						src={image1}
						alt=""
						className="w-[250px] h-[240px] object-cover rounded-primary xl:m-10 m-5 min-w-[250px] min-h-[240px] sm:block hidden"
					/>
				</div>
			</div>
		</div>
	);
}

//Fonctions de gestion des texte et images de la section "Mon accompagnement"
export function refreshTarget(button) {
	//On verifie que le bouton clique ne soit pas le meme
	return (button) => {
		const title = document.querySelectorAll("h5");

		//Sinon on enleve les classes CSS de tout les boutons
		title.forEach((h5) =>
			h5.parentNode.classList.remove("supportSwitchOn")
		);
		//On ajoute les classes CSS aux boutons cliqué
		button.target.parentNode.classList.add("supportSwitchOn");

		//On modifie les angles de la mainCard
		//On modifie l'image de la mainCard
		//On modifie le texte de la mainCard
		switch (button.target.id) {
			case "title1":
				document.querySelector("#supportImg").src = image1;
				document.querySelector("#supportText").textContent =
					tabsData[0].content;

				break;
			case "title2":
				document.querySelector("#supportImg").src = image2;
				document.querySelector("#supportText").textContent =
					tabsData[1].content;
				break;
			case "title3":
				document.querySelector("#supportImg").src = image3;
				document.querySelector("#supportText").textContent =
					tabsData[2].content;
				break;
			case "title4":
				document.querySelector("#supportImg").src = image4;
				document.querySelector("#supportText").textContent =
					tabsData[3].content;
				break;
			default:
				break;
		}
	};
}
