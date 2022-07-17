import React from "react";
import useExternStore from "../hooks/useExternStore";
import { counterStore } from "../store/counterStore";

const Counter: React.FC = () => {
	console.log("render Counter");
	const state = useExternStore(counterStore);
	return <span>count: {state}</span>;
};

export default Counter;
