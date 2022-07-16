import React from "react";
import { counterStore } from "../store/counterStore";

const IncreaseButton: React.FC = () => {
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

export default IncreaseButton;
