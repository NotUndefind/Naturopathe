import React, { useState } from "react";
import "./support.css";

// Composant pour la version mobile des onglets
export default function SupportMobile() {
	const [activeIndex, setActiveIndex] = useState(0);

	const tabsData = [
		{
			title: "La réflexologie plantaire",
			content: (
				<div className="space-y-2">
					<p className="m-2 text-lg">
						<em>
							<strong>
								« Là où se trouvent les pieds, commence le
								voyage » – Lao Tseu
							</strong>
						</em>
					</p>
					<p>
						La réflexologie plantaire est une technique de massage
						millénaire qui procure un moment de profonde relaxation
						et de mieux-être de la personne. C’est une méthode douce
						et naturelle adaptée à tous.
					</p>
					<p>
						Des pressions sur des zones réflexes du pied agissent
						sur le corps dans le but de dénouer des tensions,
						relancer la force vitale, soutenir les capacités
						d’auto-restauration, améliorer la qualité du sommeil,
						renforcer la circulation d’énergie.
					</p>
					<p>
						La séance commence par un échange verbal afin d’établir
						votre état de santé et d’écarter d’éventuelles
						contre-indications.
					</p>
					<p>
						Selon vos besoins d’entretien et de prévention et selon
						votre organisme il est préconisé d’effectuer une séance
						par mois ou à chaque changement de saison.
					</p>
					<p>
						Pour des troubles fonctionnels anciens ou bien
						installés, il est préconisé de réaliser 3 à 5 séances
						espacées de 10 jours à 3 semaines.
					</p>
					<p className="text-sm text-primary opacity-75">
						<strong>Mentions légales :</strong> le réflexologue ne
						pose aucun diagnostic médical, n’intervient dans aucune
						décision thérapeutique, et ne se substitue en aucun cas
						à une consultation ou traitement médical.
					</p>
				</div>
			),
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
						Les fleurs de Bach sont des élixirs floraux naturels. Le
						Dr Edouard Bach, médecin anglais, convaincu de l’impact
						des émotions sur la santé, élabore 38 élixirs floraux
						qui nous invitent à reprendre contact avec nos états
						émotionnels gênants, figés, difficiles, pour les
						accueillir, les apprivoiser, et cheminer vers une
						harmonie intérieure.
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
						Pour nous aider à harmoniser nos états émotionnels tels
						que la peur, les chocs émotionnels, les incertitudes,
						les doutes, le découragement, la tristesse, la colère,
						le manque de confiance, l’impatience…
					</p>
				</div>
			),
		},
		{
			title: "Le massage relaxant californien",
			content: (
				<div className="space-y-2">
					<p>
						Le massage relaxant allie des gestes doux et fluides à
						des mouvements amples et fermes sur l’ensemble du corps.
						Les bienfaits sont immédiats.
					</p>
					<p>
						Ce soin vous propose de vous abandonner à une relaxation
						totale pour faire place à une détente du corps et de
						l’esprit, une sensation de bien-être, un apaisement et
						un soulagement des tensions physiques et émotionnelles
						du quotidien.
					</p>
					<p>
						Il vous invite à rester attentif à votre corps en même
						temps que de s’installer dans un profond abandon pour
						vivre une parenthèse de douceur et plonger dans une
						bulle de sérénité.
					</p>
					<p>
						En naturopathie, il agit en prévention et en hygiénisme
						pour une meilleure vitalité, un ressourcement, une
						reconnexion à soi.
					</p>
					<p className="text-sm text-primary opacity-75">
						<strong>Mentions légales :</strong> le massage relaxant
						ne pose aucun diagnostic médical, n’intervient dans
						aucune décision thérapeutique, et ne se substitue en
						aucun cas à une consultation ou traitement médical.
					</p>
				</div>
			),
		},
		{
			title: "Le drainage lymphatique manuel",
			content: (
				<div className="space-y-2">
					<p>
						Le drainage lymphatique manuel est une technique de
						massage doux visant à stimuler la circulation de la
						lymphe et évacuer les toxines de l’organisme.
					</p>
					<p>
						La lymphe, chargée de combattre les infections et
						nettoyer notre organisme, circule par un réseau de
						vaisseaux et ganglions dans tout notre corps.
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
						<strong>Les bienfaits :</strong>
					</p>
					<p>
						Stimulation de la circulation lymphatique, amélioration
						du système digestif, renforcement du système
						immunitaire, soulagement des jambes lourdes, diminution
						des douleurs chroniques.
					</p>
					<p>
						Il peut être réalisé sous forme de cure ou à chaque
						changement de saison.
					</p>
					<p className="text-sm text-primary opacity-75">
						<strong>Mentions légales :</strong> le drainage
						lymphatique ne pose aucun diagnostic médical,
						n’intervient dans aucune décision thérapeutique, et ne
						se substitue en aucun cas à une consultation ou
						traitement médical.
					</p>
				</div>
			),
		},
	];

	const toggleTab = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	};

	return (
		<div className="block md:hidden">
			<div className="flex space-x-4 pb-4 flex-col">
				{tabsData.map((tab, index) => (
					<button
						key={index}
						className={`flex-shrink-0 px-4 py-2 rounded-full ${
							activeIndex === index
								? "bg-primary text-white"
								: "bg-gray-200 text-gray-800"
						}`}
						onClick={() => toggleTab(index)}
					>
						{tab.title}
					</button>
				))}
			</div>
			<div>
				{tabsData.map((tab, index) => (
					<div
						key={index}
						className={`transition-all duration-300 ease-in-out flex flex-col ${
							activeIndex === index
								? " opacity-100 h-full"
								: "max-h-0 opacity-0 overflow-hidden"
						}`}
					>
						<div className="p-4 bg-white rounded-primary shadow-xl">
							{tab.content}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
