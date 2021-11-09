<template>
  <div id="container">
    <div class="ion-padding">
      <p>Filter results by search term.</p>
      <ion-text color="danger" v-if="errorMessage">{{ errorMessage }}</ion-text>
      <ion-item>
        <ion-input v-model="searchInput" type="text"></ion-input>
        <ion-button @click="validate">
          <ion-icon :icon="search" />
        </ion-button>
      </ion-item>
    </div>
    <ion-list>
      <ion-item v-for="result in results" :key="result.name">
        <ion-label>
          {{ result.name }}
        </ion-label>
        <ion-button fill="clear" @click="save(result)">
          <ion-icon :icon="result.onChange ? star : starOutline" />
        </ion-button>
      </ion-item>
    </ion-list>
    <div class="ion-padding">
      <p v-if="this.store.state.savedResults.length > 0">Saved Results</p>
      <ion-list>
        <ion-card
          v-for="savedResult in this.store.state.savedResults"
          :key="savedResult.id"
        >
          <ion-card-header>{{ savedResult.name }}</ion-card-header>
          <ion-card-content v-if="savedResult.description">
            {{ savedResult.description }}</ion-card-content
          >
        </ion-card>
      </ion-list>
    </div>
  </div>
</template>

<script lang="ts">
import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonText,
  IonIcon
} from "@ionic/vue";
import { search, starOutline, star } from "ionicons/icons";
import { defineComponent, ref } from "vue";
import { useStore, Item, MUTATIONS } from "../store";

export interface SavedResult {
  onChange: boolean;
  name: string;
  id: number;
  description?: string;
  url?: URL;
}

export default defineComponent({
  name: "SearchContainer",
  components: {
    IonInput,
    IonItem,
    IonList,
    IonText,
    IonLabel,
    IonButton,
    IonIcon
  },
  setup() {
    const store = useStore();
    return {
      search,
      starOutline,
      star,
      onChange: ref(false),
      store
    };
  },
  data() {
    return {
      searchInput: "",
      errorMessage: "",
      results: [] as Item[],
      savedResults: [] as SavedResult[]
    };
  },
  methods: {
    validate() {
      if (this.searchInput.length) {
        this.errorMessage = "";
        const filteredResults = this.store.state.items.filter((item) =>
          item.name.includes(this.searchInput)
        );
        this.results = filteredResults;
      } else {
        this.errorMessage = "Please enter search term";
      }
    },
    save(result: SavedResult) {
      result.onChange = !result.onChange;

      const statelessResult = {
        id: result.id,
        name: result.name,
        description: result.description ? result.description : null,
        url: result.url ? result.url : null
      };

      const matchingResults = this.store.state.savedResults.filter(
        (savedResult) => {
          return savedResult.id === statelessResult.id;
        }
      );

      if (result.onChange && matchingResults.length === 0) {
        this.store.commit(MUTATIONS.ADD_SAVED_RESULT, statelessResult);
      }

      if (!result.onChange && matchingResults.length > 0) {
        this.store.commit(MUTATIONS.DEL_SAVED_RESULT, statelessResult);
      }
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
