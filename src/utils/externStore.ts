type Listener = () => void;

export interface ExternStore<T> {
	getState: () => T;
	setState: (fn: (state: T) => T) => void;
	subscribe: (listener: Listener) => () => void;
}

export function createStore<T>(initialState: T): ExternStore<T> {
	let state = initialState;
	const getState = () => state;
	const listeners = new Set<Listener>();
	const setState = (fn: (state: T) => T) => {
		state = fn(state);
		listeners.forEach((l) => l());
	};
	const subscribe = (listener: Listener) => {
		listeners.add(listener);
		return () => {
			listeners.delete(listener);
		};
	};
	return { getState, setState, subscribe };
}
