<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Save</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Save</ion-title>
        </ion-toolbar>
      </ion-header>

      <SaveContainer name="Save page" />
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
import SaveContainer from "@/components/SaveContainer.vue";

export default {
  name: "Save",
  components: {
    SaveContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage
  }
};
</script>
