import React from "react";

//Components
import SubSectionTitle from "../../common/SubSectionTitle";

export default function WhatIsIt() {
	return (
		<div className="flex flex-col gap-3" id="">
			<SubSectionTitle subTitle="Qu'est-ce que c'est ?"></SubSectionTitle>

			<div>
				<p class="text-left">
					<strong>La naturopathie</strong> est reconnue depuis 2001
					par l’OMS comme médecine traditionnelle.
				</p>

				<p class="text-left">
					Elle s’intéresse à la personne dans sa globalité, dans ses
					dimensions physique, psychique, émotionnelle, énergétique.
				</p>
				<p class="text-left">
					Elle vise à préserver et optimiser votre santé globale,
					votre qualité de vie en harmonie avec votre environnement.
				</p>

				<p class="text-left">
					Par santé, il faut entendre « état de complet bien-être
					physique, mental et social » et pas seulement une absence de
					maladie.
				</p>
			</div>

			<p class="text-left">
				<strong>La naturopathie</strong> s’inspire des enseignements
				d’Hippocrate, elle s’attache à remonter à la cause des
				déséquilibres et à comprendre le fonctionnement de notre corps,
				au-delà du symptomatique.
			</p>

			<p class="text-left">
				<strong>La naturopathie</strong> est préventive, elle s’appuie
				sur les capacités d’autoguérison de notre corps. Elle
				s’intéresse aux spécificités qui nous constituent pour proposer
				une démarche personnalisée.
			</p>

			<p class="text-left">
				<strong>La naturopathie</strong> est éducatrice de santé : elle
				vous transmet les clés pour être acteur de votre bien être et
				vous guider vers l’autonomie : vous devenez responsable de votre
				capital santé.
			</p>

			<p class="text-left">
				<strong>La naturopathie</strong> se base sur l’alimentation,
				l’hygiène de vie, l’activité physique, l’émotionnel. Ses
				méthodes de soins sont la phytothérapie, la gemmothérapie, les
				huiles essentielles, les élixirs floraux, … associées à des
				techniques corporelles, la réflexologie, les massages bien-être,
				l’activité physique, les exercices respiratoires, le contact
				avec la nature...
			</p>

			<p class="text-left">
				<strong>La première séance, bilan de vitalité : </strong>
				nous retraçons ensemble les moments clés de votre histoire de
				vie : nous abordons vos antécédents, votre état de santé, vos
				habitudes, votre alimentation, votre état émotionnel, vos
				attentes.
			</p>

			<p class="text-left">
				<strong>Les consultations de suivi :</strong> je vous accompagne
				dans votre programme, votre motivation et la transmission de
				conseils adaptés.
			</p>

			<p class="text-left text-sm text-primary opacity-75">
				La naturopathie est complémentaire de la médecine
				conventionnelle et ne dispense pas des soins médicaux
				conventionnels. Le naturopathe ne pose aucun diagnostic, ne
				délivre pas de prescription. N’arrêtez ou ne modifiez jamais un
				traitement en cours sans l’avis de votre médecin traitant.
			</p>
		</div>
	);
}
