import type { FamilyCtxState } from "./types";
import { createInitialState } from "./state";

export type Listener = (state: FamilyCtxState) => void;

export type Store = {
  getState: () => FamilyCtxState;
  setState: (next: FamilyCtxState) => void;
  subscribe: (listener: Listener) => () => void;
};

export function createStore(initial?: FamilyCtxState): Store {
  let state = initial ?? createInitialState();
  const listeners = new Set<Listener>();

  return {
    getState() {
      return state;
    },
    setState(next) {
      state = next;
      listeners.forEach((l) => l(state));
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}
