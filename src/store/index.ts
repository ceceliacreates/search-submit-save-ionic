import { InjectionKey } from "vue";
import {
  createStore,
  useStore as baseUseStore,
  Store,
  MutationTree,
  ActionTree
} from "vuex";

export interface Item {
  id: number;
  name: string;
  description?: string;
  url?: URL;
}

export interface State {
  items: Item[];
  savedResults: Item[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    items: [
      {
        name: "Vue documentation",
        description: "https://v3.vuejs.org/guide/introduction.html",
        id: 0
      },
      {
        name: "TypeScript documentation",
        description: "https://www.typescriptlang.org",
        id: 1
      },
      {
        name: "Vuex documentation",
        description: "https://next.vuex.vuejs.org",
        id: 2
      }
    ],
    savedResults: []
  }
});

// our own useStore function for types
export function useStore() {
  return baseUseStore(key);
}
