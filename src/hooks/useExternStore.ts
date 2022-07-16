import { useEffect, useState } from "react";
import { ExternStore } from "../utils/externStore";

export default function useExternStore<T>(store: ExternStore<T>) {
	const [state, setState] = useState<T>();

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return unsubscribe;
	}, [store]);

	return state;
}
