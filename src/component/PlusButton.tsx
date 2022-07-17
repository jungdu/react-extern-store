import React from "react";
import { counterStore } from "../store/counterStore";

const PlusButton: React.FC = () => {
	console.log("render PlusButton");
	return (
		<button
			onClick={() => {
				counterStore.setState((currentCount) => ++currentCount);
			}}
		>
			+
		</button>
	);
};

export default PlusButton;
