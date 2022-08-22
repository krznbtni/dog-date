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

      <div id="map"></div>
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import leaflet from 'leaflet' 

const MAPBOX_GEOCODING_API_KEY = 'pk.eyJ1IjoiZG9nZGF0ZSIsImEiOiJjbDcwZ3M4cmswZTg1M29vcXJuY2NydzRzIn0.ZY7n9e6PROvv2e16SEwZAw';
const MAPBOX_MAP_API_KEY = 'pk.eyJ1IjoiZG9nZGF0ZSIsImEiOiJjbDcwaWU4cnYwZWU0M3BzOTc4dWNtdDBxIn0.k2EsJdJ5Rw8SChJMUfMpkw';

// https://youtu.be/vfqjz-JnfXc?t=3971

export default defineComponent({
  name: 'MapPage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    let map;
    onMounted(() => {
      // init map
      map = leaflet.map('map').setView([28.538336, -81.379234], 10);

      leaflet.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${MAPBOX_MAP_API_KEY}`, {
          maxZoom: 10,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'pk.eyJ1IjoiZG9nZGF0ZSIsImEiOiJjbDcwaWU4cnYwZWU0M3BzOTc4dWNtdDBxIn0.k2EsJdJ5Rw8SChJMUfMpkw',
          attribution: '© OpenStreetMap'
      }).addTo(map);

      getGeoLocation();
    });

    const coords = ref(null);
    const fetchCoords = ref(null);
    const geoMarker = ref(null);

    const getGeoLocation = () => {
      // check sessionStorage for coords
      if (sessionStorage.getItem('coords')) {
        coords.value = JSON.parse(sessionStorage.getItem('coords'));
        plotGeolocation(coords.value);
        return;
      }

      fetchCoords.value = true;
      navigator.geolocation.getCurrentPosition(setCoords , getLocError);
    }

    const setCoords = (pos) => {
      fetchCoords.value = true;

      // set coords in session storage
      const setSessionCoords = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      }

      sessionStorage.setItem('coords', JSON.stringify(setSessionCoords));

      // Set ref coords value
      coords.value = setSessionCoords;

      plotGeolocation(setSessionCoords);
    }

    const getLocError = (err: unknown) => {
      console.log(err);
    }

    const plotGeolocation = (coords) => {
      // create custom marker
      const customMarker = leaflet.icon({
        iconUrl: require('../../public/assets/icon/map-marker-red.png'),
        iconSize: [35, 35],
      });

      // geoMarker.value = leaflet.marker([coords.lat, coords.lng], {icon: customMarker}).addTo(map);
      
      // set map to current location
      map.setView([coords.lat, coords.lng], 10)
    }


    

    return {
      query: 'starbucks',
      coords,
      geoMarker
    }
  },
  methods: {
    async fetchCall() {
      try {
        const params = new URLSearchParams({
          access_token: MAPBOX_GEOCODING_API_KEY,
          limit: '2'
        })

        const r = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.query}.json?${params}`);
        const parsed = await r.json();
        
        console.log(parsed);
      } catch (e) {
        // @ts
      }
    }
  },
  mounted(){
    void this.fetchCall();
  }
  
});
</script>

<style>
#map {
  height: 100%;
  width: 100%;
}</style>
