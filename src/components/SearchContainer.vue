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
      <p>Saved Results</p>
      <ion-list>
        <ion-card v-for="savedResult in savedResults" :key="savedResult">
          <ion-card-header>{{ savedResult }}</ion-card-header>
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
import { useStore, Item } from "../store";

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
      items: [{ name: "result1" }, { name: "result2" }, { name: "result3" }],
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
      const matchingResults = this.savedResults.filter((savedResult) => {
        return savedResult.id === result.id;
      });

      if (result.onChange && matchingResults.length === 0) {
        this.savedResults.push(result);
      }

      if (!result.onChange && matchingResults.length > 0) {
        this.savedResults = this.savedResults.filter((savedResult) => {
          return savedResult.id != result.id;
        });
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
