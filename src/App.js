import React from "react";

//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeroHeader from "./components/HeroHeader/HeroHeader";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";
import Contact from "./components/Contact/Contact";

//Assets
import Button from "./components/common/Button";

export default function App() {
	return (
		<div>
			<div className="vw-100 mx-auto mt-5 relative">
				<Header></Header>
				<div className="lg:max-w-screen-lg md:max-w-screen-md mx-auto pt-24">
					<HeroHeader></HeroHeader>

					<div className="max-w-fit mx-auto my-10">
						<Button mess="Contactez moi"></Button>
					</div>

					<FirstSection></FirstSection>

					<SecondSection></SecondSection>

					<ThirdSection></ThirdSection>

					<Contact></Contact>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}
