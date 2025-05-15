import React from "react";

//Components
import SectionTitle from "../common/SectionTitle";
import WhatIsIt from "./WhatIsIt/WhatIsIt";
import Support from "./Support/Support";
import SupportMobile from "./Support/SupportMobile";

export default function SecondSection() {
	return (
		<div className="space-y-2 my-20 scroll-mt-20 h-full" id="whatIsIt">
			<SectionTitle title="La Naturopathie"></SectionTitle>
			<div className="space-y-10">
				<WhatIsIt></WhatIsIt>

				<div className="hidden md:block">
					<Support />
				</div>

				<div className="block md:hidden">
					<SupportMobile />
				</div>
			</div>
		</div>
	);
}
