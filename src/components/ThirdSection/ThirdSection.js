import React from "react";

//Components
import SectionTitle from "../common/SectionTitle";
import Card from "./includes/Card";

export default function ThirdSection() {
	return (
		<div id="Prestation" className="space-y-10 mb-10">
			<SectionTitle title="Prestations/Tarifs"></SectionTitle>

			<div className="flex md:flex-row flex-col flex-wrap gap-5 place-content-center">
				<Card>
					<h4 className="text-primary font-title text-2xl text-white">
						Naturopathie
					</h4>

					<p className="text-white">
						Bilan de vitalité (première séance) : 1h30 - 75€
					</p>

					<p className="text-white">Séance de suivi : 1h – 60€</p>

					<p className="text-white">
						Forfait 3 séances (bilan de vitalité + 2 séances de
						suivi) - 175 €
					</p>

					<p className="text-white text-sm opacity-75">
						Au cabinet ou en viso
					</p>
				</Card>

				<Card>
					<h4 className="text-primary font-title text-2xl text-white">
						Réflexologie plantaire
					</h4>

					<p className="text-white">Séance 1h - 60 €</p>

					<p className="text-white">Séance 45 mn – 45 €</p>

					<p className="text-white">
						Forfait 3 séances de 1h – 165 €
					</p>
				</Card>

				<Card>
					<h4 className="text-primary font-title text-2xl text-white">
						Massage relaxant californien
					</h4>

					<p className="text-white">Massage 1h – 70 €</p>
				</Card>
				<Card>
					<h4 className="text-primary font-title text-2xl text-white">
						Drainage lymphatique manuel
					</h4>

					<p className="text-white">Drainage 1h10 – 80 €</p>
				</Card>
				<Card>
					<h4 className="text-primary font-title text-2xl text-white">
						Fleurs de Bach
					</h4>

					<p className="text-white">Séance 1h - 55 €</p>

					<p className="text-white text-sm opacity-75">
						Au cabinet ou en viso
					</p>
				</Card>
			</div>
		</div>
	);
}
