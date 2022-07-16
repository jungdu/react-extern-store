import { createExternStore } from "../utils/externStore";

export const counterStore = createExternStore<number>(0);
