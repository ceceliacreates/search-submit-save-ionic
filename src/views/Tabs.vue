<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="search" href="/tabs/search">
          <ion-icon :icon="search" />
          <ion-label>Search</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="submit" href="/tabs/submit">
          <ion-icon :icon="cloudUpload" />
          <ion-label>Submit</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="save" href="/tabs/save">
          <ion-icon :icon="bookmark" />
          <ion-label>Save</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet
} from "@ionic/vue";
import { search, cloudUpload, bookmark } from "ionicons/icons";

export default {
  name: "Tabs",
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet
  },
  setup() {
    return {
      search,
      cloudUpload,
      bookmark
    };
  }
};
</script>
