//assets
import burgerClose from "../../../assets/burgerClose.svg";
import burgerOpen from "../../../assets/burgerOpen.svg";

export function toggleMenu() {
	const img = document.querySelector("#burger");
	const section = document.querySelector("#section");
	const contact = document.querySelector("#contact");

	if (img.classList.contains("off")) {
		img.classList.remove("off");
		img.src = burgerOpen;

		contact.classList.remove("hidden", "order-3");
		section.classList.remove("hidden", "order-2");

		contact.classList.add("flex-col", "order-6", "py-5");
		section.classList.add("flex-col", "order-5", "py-5");
	} else {
		img.classList.add("off");
		img.src = burgerClose;

		contact.classList.add("hidden", "order-3");
		section.classList.add("hidden", "order-2");

		contact.classList.remove("flex-col", "order-6", "py-5");
		section.classList.remove("flex-col", "order-5", "py-5");
	}
}
