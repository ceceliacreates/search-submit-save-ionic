<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Submit</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Submit</ion-title>
        </ion-toolbar>
      </ion-header>

      <SaveContainer name="Submit page" />
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
  name: "Submit",
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
