<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Map</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Map</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="map-container">
        <capacitor-google-map id="map"></capacitor-google-map>
      </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {onMounted } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';

const apiKey = 'AIzaSyCgc7W1OtJO-Fbzed0O2Rn3Q5BHwmEwbHc';
let map: GoogleMap;

const createMap = async () => {
  const mapRef = document.getElementById('map');

  map = await GoogleMap.create({
    id: 'my-map',
    element: mapRef,
    apiKey,
    config: {
      center: { lat: 33.6, lng: -117.9 },
      zoom: 8,
    },
  });

  void addMarkers();
};

const addMarkers = async() => {
  const markers: Marker[] = [
    {
      title: 'localhost',
      snippet: 'Best place on Earth',
      coordinate: { lat: 33.7, lng: -117.8 },
    },
    {
      title: 'random place',
      snippet: 'Not sure',
      coordinate: { lat: 33.7, lng: -117.2 },
    }
  ];

  const result = await map.addMarkers(markers);
  console.log(result);
  map.setOnMarkerClickListener(async(marker) => {
    console.log(marker);
  })
}

onMounted(async() => {
  await createMap();
});
</script>

<style>
capacitor-google-map {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.map-container {
  height: 50%;
  width: 100%;
}
</style>
