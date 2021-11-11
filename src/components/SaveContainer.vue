<template>
  <div id="container" class="ion-padding">
    <ion-list>
      <ion-list-header>Saved Results</ion-list-header>
      <ion-item-sliding
        v-for="savedResult in this.store.state.savedResults"
        :key="savedResult.id"
      >
        <ion-item>
          <ion-label>
            <h2>{{ savedResult.name }}</h2>
            <p v-if="savedResult.description">
              {{ savedResult.description }}
            </p>
          </ion-label>
        </ion-item>
        <ion-item-options>
          <ion-item-option color="danger">
            <ion-icon slot="end" :icon="closeCircleOutline"></ion-icon>
            Delete
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    </ion-list>
  </div>
</template>

<script lang="ts">
import {
  IonItem,
  IonLabel,
  IonList,
  IonItemSliding,
  IonItemOption
} from "@ionic/vue";

import { defineComponent } from "vue";
import { useStore } from "../store";
import { closeCircleOutline } from "ionicons/icons";

export default defineComponent({
  name: "SaveContainer",
  components: {
    IonItem,
    IonList,
    IonLabel,
    IonItemOption,
    IonItemSliding
  },
  setup() {
    const store = useStore();
    return {
      store,
      closeCircleOutline
    };
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
