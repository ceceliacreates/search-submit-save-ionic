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
        <ion-item v-for="savedResult in savedResults" :key="savedResult">
          <ion-text>{{ savedResult }}</ion-text>
        </ion-item>
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
    return {
      search,
      starOutline,
      star,
      onChange: ref(false)
    };
  },
  data() {
    return {
      searchInput: "",
      errorMessage: "",
      items: [{ name: "result1" }, { name: "result2" }, { name: "result3" }],
      results: [] as { name: string }[],
      savedResults: [] as string[]
    };
  },
  methods: {
    validate() {
      if (this.searchInput.length) {
        this.errorMessage = "";
        const filteredResults = this.items.filter((item) =>
          item.name.includes(this.searchInput)
        );
        this.results = filteredResults;
      } else {
        this.errorMessage = "Please enter search term";
      }
    },
    save(result: { onChange: boolean; name: string }) {
      result.onChange = !result.onChange;
      if (result.onChange && !this.savedResults.includes(result.name)) {
        this.savedResults.push(result.name);
      }
      if (!result.onChange && this.savedResults.includes(result.name)) {
        this.savedResults = this.savedResults.filter((savedResult) => {
          return savedResult != result.name;
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
