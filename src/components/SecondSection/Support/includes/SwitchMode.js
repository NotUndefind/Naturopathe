import React from "react";

//Functions
import { refreshTarget } from "../Support";

export default function SwitchMode(props) {
	return (
		<div className="grid grid-cols-3 shadow-2xl rounded-t-primary ">
			<button
				onMouseEnter={refreshTarget(this)}
				className="supportSwitchOn rounded-t-primary"
			>
				<h5
					id="title1"
					className="text-center font-title mx-auto text-2xl py-2"
				>
					{props.title[0]}
				</h5>
			</button>

			<button
				onMouseEnter={refreshTarget(this)}
				className="rounded-t-primary"
			>
				<h5
					id="title2"
					className="text-center font-title mx-auto text-2xl py-2  rounded-t-primary"
				>
					{props.title[1]}
				</h5>
			</button>

			<button
				onMouseEnter={refreshTarget(this)}
				className="rounded-t-primary"
			>
				<h5
					id="title3"
					className="text-center font-title mx-auto text-2xl py-2"
				>
					{props.title[2]}
				</h5>
			</button>
		</div>
	);
}
