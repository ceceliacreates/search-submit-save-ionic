<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Search</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Search</ion-title>
        </ion-toolbar>
      </ion-header>

      <SearchContainer />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from "@ionic/vue";
import SearchContainer from "@/components/SearchContainer.vue";

export default {
  name: "Search",
  components: {
    SearchContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage
  }
};
</script>
