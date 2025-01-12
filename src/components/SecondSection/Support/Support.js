import React from "react";

//Components
import SubSectionTitle from "../../common/SubSectionTitle";
import SwitchMode from "./includes/SwitchMode";

//Assets
import image1 from "../../../assets/image1.jpg";
import image2 from "../../../assets/image2.jpg";
import image3 from "../../../assets/image3.jpg";

//Tableau des textes
const paragraphs = [
	"Magna et ipsum Lorem deserunt ex sit labore et ex ullamco. Cillum tempor commodo eiusmod. Deserunt Lorem cupidatat sunt duis pariatur incididunt cillum ut consectetur proident occaecat culpa. Tempor labore fugiat aute nulla proident duis duis nisi qui sint officia. Tempor cupidatat excepteur laborum do esse elit consectetur commodo excepteur velit ad magna anim irure. Ea veniam proident fugiat laborum aliquip elit minim nulla fugiat nostrud ullamco et ut qui.Consectetur enim Lorem cupidatat laboris ex ex commodo incididunt. Esse aute laboris labore aute culpa tempor proident ea veniam sint ea. Adipisicing in enim enim adipisicing. Culpa adipisicing laborum fugiat velit veniam. Occaecat culpa pariatur labore. Cillum aliqua laboris consequat incididunt duis",

	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

	"idriss",
];

export default function Support() {
	return (
		<div className="accompagnement">
			<SubSectionTitle subTitle="Mon accompagnement"></SubSectionTitle>

			<div className=" shadow-2xl bg-shadow rounded-primary">
				<SwitchMode
					title={[
						"Fleurs de bach",
						"Réflexologie plantaire",
						"Massage",
					]}
				></SwitchMode>
				<div className="bg-primary rounded-b-primary flex flex-row place-content-between place-items-center descAccompagnement">
					<p
						id="supportText"
						className="col-span-3 text-center place-content-center p-10"
					>
						{paragraphs[0]}
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
					paragraphs[0];

				break;
			case "title2":
				document.querySelector("#supportImg").src = image2;
				document.querySelector("#supportText").textContent =
					paragraphs[1];
				break;
			case "title3":
				document.querySelector("#supportImg").src = image3;
				document.querySelector("#supportText").textContent =
					paragraphs[2];
				break;
			default:
				break;
		}
	};
}
