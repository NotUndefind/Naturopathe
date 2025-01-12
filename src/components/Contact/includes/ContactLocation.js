import React from "react";

//Assets
import image from "../../../assets/map.png";

export default function ContactLocation() {
	return (
		<div className="bg-primary rounded-primary p-5 font-text text-center shadow-2xl grid row-auto gap-5 flex-1 h-full">
			<div className="grid grid-rows-2 gap-5">
				<div className="grid grid-cols-2">
					<p>14 rue des moulin</p>
					<p>14 rue des moulin</p>
				</div>
				<div className="grid grid-cols-2">
					<p>Reims</p>
					<p>Reims</p>
				</div>
			</div>

			<img src={image} alt="" className="rounded-primary" />

			<p>
				Cupidatat excepteur mollit sit non veniam sit Lorem officia
				velit. Magna culpa ipsum ea exercitation mollit.
			</p>
		</div>
	);
}
