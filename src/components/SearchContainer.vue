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
        <ion-icon :icon="star" slot="end" />
      </ion-item>
    </ion-list>
  </div>
</template>

<script lang="ts">
import { IonInput, IonItem, IonList, IonText } from "@ionic/vue";
import { search, star } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchContainer",
  components: {
    IonInput,
    IonItem,
    IonList,
    IonText
  },
  setup() {
    return {
      search,
      star
    };
  },
  data() {
    return {
      searchInput: "",
      errorMessage: "",
      items: [{ name: "result1" }, { name: "result2" }, { name: "result3" }],
      results: [{ name: "result1" }, { name: "result2" }, { name: "result3" }]
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
