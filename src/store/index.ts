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

const state: State = {
  items: [
    {
      id: 0,
      name: "Vue documentation",
      description: "https://v3.vuejs.org/guide/introduction.html"
    },
    {
      id: 1,
      name: "TypeScript documentation",
      description: "https://www.typescriptlang.org"
    },
    {
      id: 2,
      name: "Vuex documentation",
      description: "https://next.vuex.vuejs.org"
    }
  ],
  savedResults: []
};

export const enum MUTATIONS {
  ADD_SAVED_RESULT = "ADD_SAVED_RESULT",
  DEL_SAVED_RESULT = "DEL_SAVED_RESULT"
}
const mutations: MutationTree<State> = {
  [MUTATIONS.ADD_SAVED_RESULT](state, newSavedResult: Item) {
    state.savedResults.push({ ...newSavedResult });
  },
  [MUTATIONS.DEL_SAVED_RESULT](state, savedResult: Item) {
    state.savedResults.splice(state.savedResults.indexOf(savedResult), 1);
  }
};

export const store = createStore<State>({
  state,
  mutations
});

// our own useStore function for types
export function useStore() {
  return baseUseStore(key);
}
