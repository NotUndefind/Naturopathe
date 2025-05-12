import React from "react";
import { useState } from "react";
import "./support.css";

//Components
import SectionTitle from "../../common/SectionTitle";

//Assets
import image1 from "../../../assets/plant.jpeg";
import image2 from "../../../assets/Feuilles de plante.jpg";
import image3 from "../../../assets/naturo.webp";
import image4 from "../../../assets/Zen Sand Stones.jpg";

//Tableau des textes
const tabsData = [
	{
		title: "La réflexologie plantaire",
		content: (
			<div className="space-y-2">
				<p className="m-2 text-lg">
					<em>
						<strong>
							« Là où se trouvent les pieds, commence le voyage »
							– Lao Tseu
						</strong>
					</em>
				</p>

				<p>
					La réflexologie plantaire est une technique de massage
					millénaire qui procure un moment de profonde relaxation et
					de mieux-être de la personne. C’est une méthode douce et
					naturelle adaptée à tous.
				</p>

				<p>
					Des pressions sur des zones réflexes du pied agissent sur le
					corps dans le but de dénouer des tensions, relancer la force
					vitale, soutenir les capacités d’auto-restauration,
					améliorer la qualité du sommeil, renforcer la circulation
					d’énergie.
				</p>

				<p>
					La séance commence par un échange verbal afin d’établir
					votre état de santé et d’écarter d’éventuelles
					contre-indications.
				</p>

				<p>
					Selon vos besoins d’entretien et de prévention et selon
					votre organisme il est préconisé d’effectuer une séance par
					mois ou à chaque changement de saison.
				</p>

				<p>
					Pour des troubles fonctionnels anciens ou bien installés, il
					est préconisé de réaliser 3 à 5 séances espacées de 10 jours
					à 3 semaines.
				</p>

				<p className="text-sm opacity-75">
					<strong>Mentions légales :</strong> le réflexologue ne pose
					aucun diagnostic médical, n’intervient dans aucune décision
					thérapeutique, et ne se substitue en aucun cas à une
					consultation ou traitement médical.
				</p>
			</div>
		),
		image: image1,
	},
	{
		title: "Les fleurs de Bach",
		content: (
			<div className="space-y-2">
				<p className="m-2 text-lg">
					<strong>
						<em>Un voyage au cœur de soi</em>
					</strong>
				</p>

				<p>
					Les fleurs de Bach sont des élixirs floraux naturels. Le Dr
					Edouard Bach, médecin anglais, convaincu de l’impact des
					émotions sur la santé, élabore 38 élixirs floraux qui nous
					invitent à reprendre contact avec nos états émotionnels
					gênants, figés, difficiles, pour les accueillir, les
					apprivoiser, et cheminer vers une harmonie intérieure.
				</p>

				<p>
					<strong>Pour qui ?</strong>
				</p>
				<p>
					Pour tous ceux à la recherche d’un équilibre émotionnel,
					c’est une méthode douce et naturelle adaptée à tous.
				</p>

				<p>
					<strong>Pourquoi ?</strong>
				</p>
				<p>
					Pour nous aider à harmoniser nos états émotionnels tels que
					la peur, les chocs émotionnels, les incertitudes, les
					doutes, le découragement, la tristesse, la colère, le manque
					de confiance, l’impatience…
				</p>
			</div>
		),
		image: image2,
	},
	{
		title: "Le massage relaxant californien",
		content: (
			<div className="space-y-2">
				<p>
					Le massage relaxant allie des gestes doux et fluides à des
					mouvements amples et fermes sur l’ensemble du corps. Les
					bienfaits sont immédiats.
				</p>

				<p>
					Ce soin vous propose de vous abandonner à une relaxation
					totale pour faire place à une détente du corps et de
					l’esprit, une sensation de bien-être, un apaisement et un
					soulagement des tensions physiques et émotionnelles du
					quotidien.
				</p>

				<p>
					Il vous invite à rester attentif à votre corps en même temps
					que de s’installer dans un profond abandon pour vivre une
					parenthèse de douceur et plonger dans une bulle de sérénité.
				</p>

				<p>
					En naturopathie, il agit en prévention et en hygiénisme pour
					une meilleure vitalité, un ressourcement, une reconnexion à
					soi.
				</p>

				<p className="text-sm opacity-75">
					<strong>Mentions légales :</strong> le massage relaxant ne
					pose aucun diagnostic médical, n’intervient dans aucune
					décision thérapeutique, et ne se substitue en aucun cas à
					une consultation ou traitement médical.
				</p>
			</div>
		),
		image: image3,
	},
	{
		title: "Le drainage lymphatique manuel",
		content: (
			<div className="space-y-2">
				<p>
					Le drainage lymphatique manuel est une technique de massage
					doux visant à stimuler la circulation de la lymphe et
					évacuer les toxines de l’organisme.
				</p>

				<p>
					La lymphe, chargée de combattre les infections et nettoyer
					notre organisme, circule par un réseau de vaisseaux et
					ganglions dans tout notre corps.
				</p>

				<p>
					<strong>Comment se pratique le drainage ?</strong>
				</p>
				<p>
					Une combinaison de mouvements lents et rythmés effectués
					avec les doigts et la paume de la main se font sur
					l’ensemble du corps. C’est un réel moment de détente et
					relaxation.
				</p>

				<p>
					<strong>Les bienfaits </strong>
				</p>
				<p>
					Stimulation de la circulation lymphatique, amélioration du
					système digestif, renforcement du système immunitaire,
					soulagement des jambes lourdes, diminution des douleurs
					chroniques.
				</p>

				<p>
					Il peut être réalisé sous forme de cure ou à chaque
					changement de saison.
				</p>

				<p className="text-sm opacity-75">
					<strong>Mentions légales :</strong> le drainage lymphatique
					ne pose aucun diagnostic médical, n’intervient dans aucune
					décision thérapeutique, et ne se substitue en aucun cas à
					une consultation ou traitement médical.
				</p>
			</div>
		),
		image: image4,
	},
];

export default function Support() {
	const [activeIndex, setActiveIndex] = useState(0);
	const activeTab = tabsData[activeIndex];
	return (
		<div id="MonAccompagnement" className="accompagnement scroll-mt-20">
			<SectionTitle title="Mon accompagnement"></SectionTitle>

			<div className="my-10"></div>
			<div className=" shadow-2xl  border border-primary rounded-t-primary flex flex-row place-content-evenly tabsContainer shadow-2xl bg-shadow">
				{tabsData.map((tab, index) => (
					<button
						key={index}
						className={`tab-button ${
							index === activeIndex ? "active" : ""
						} font-title text-2xl p-3 rounded-t-primary`}
						onClick={() => setActiveIndex(index)}
					>
						{tab.title}
					</button>
				))}
			</div>

			<div className="tab-content bg-primary rounded-b-primary flex flex-row place-content-between place-items-center text-left">
				<p className="p-5 text-white">{activeTab.content}</p>
				{activeTab.image && (
					<img
						src={activeTab.image}
						alt={activeTab.title}
						className="tab-image object-cover rounded-primary xl:m-10 m-5 max-w-[300px] min-h-[250px] sm:block hidden"
					/>
				)}
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
