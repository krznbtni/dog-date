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

      <input
      id="pac-input"
      class="controls"
      type="text"
      placeholder="Search Box"
    />

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

  const input = document.getElementById("pac-input") as HTMLInputElement;
  // @ts-expecterror
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-undef
  const searchBox = new google.maps.places.SearchBox(input);

  let markers: Marker[] = [];

  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach((marker) => {
      // map.removeMarker()
      // marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-undef
    const bounds = new google.maps.LatLngBounds();

    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }

      const icon = {
        url: place.icon as string,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-undef
        size: new google.maps.Size(71, 71),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-undef
        origin: new google.maps.Point(0, 0),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-undef
        anchor: new google.maps.Point(17, 34),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-undef
        scaledSize: new google.maps.Size(25, 25),
      };

      // Create a marker for each place.
      markers.push(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-undef
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
        })
      );

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    // map.fitBounds(bounds);
  });
};

const addCurrentPosMarker = async () => {
  return Geolocation.requestPermissions().then(async permission => {
    console.log({permission})
    const coordinates = await Geolocation.getCurrentPosition();
    const marker: Marker = {
      title: 'Current Pos',
      coordinate: {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude,
      }
    };

    const addMarkerRes = await map.addMarker(marker);
    console.log({addMarkerRes});
    map.setOnMarkerClickListener(async(marker) => {
    console.log(marker);
  })
  });
}

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

#pac-input {
  background-color: #fff;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  margin-left: 12px;
  padding: 0 11px 0 13px;
  text-overflow: ellipsis;
  width: 400px;
}

#pac-input:focus {
  border-color: #4d90fe;
}
</style>
