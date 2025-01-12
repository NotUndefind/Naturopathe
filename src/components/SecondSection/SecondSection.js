import React from "react";

//Components
import SectionTitle from "../common/SectionTitle";
import WhatIsIt from "./WhatIsIt/WhatIsIt";
import Support from "./Support/Support";

export default function SecondSection() {
	return (
		<div className="space-y-10 my-10">
			<SectionTitle title="La Naturopathie"></SectionTitle>
			<div className="space-y-10">
				<WhatIsIt></WhatIsIt>

				<Support></Support>
			</div>
		</div>
	);
}
