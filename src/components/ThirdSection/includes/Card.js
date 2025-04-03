export default function Card(props) {
	return (
		<div className="shadow-2xl bg-primary rounded-primary p-10 text-center font-text content-center flex gap-3 flex-col">
			{props.children}
		</div>
	);
}
