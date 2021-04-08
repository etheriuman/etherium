<template>
  <div id="map" class="g-map">
  </div>
</template>

<script>
export default {
  name: 'gMap',
  data() {
    return {
      map: null,
      lat: 25.131887980760645,
      lng: 121.49864110177026
    }
  },
  methods: {
    initMap() {
      const google = window.google
      this.map = new google.maps.Map(document.querySelector('#map'), {
        center: {
          lat: this.lat,
          lng: this.lng
        },
        zoom: 11,
        maxZoom: 20,
        minZoom: 3,
        disableDefaultUI: true,
        styles: [
          { elementType: "geometry", stylers: [{ color: "#e3e3e3" }] },
          { elementType: "labels.text.fill", stylers: [{ color: "#333333" }] },
          {
            featureType: "poi",
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: "road",
            stylers: [{ color: "#a3a3a3" }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: "water",
            stylers: [{ color: "#666666" }],
          }
        ]
      })
    },
    setMarker() {
      const google = window.google
      const marker = new google.maps.Marker({
        position: {
          lat: this.lat,
          lng: this.lng
        },
        map: this.map
      })
      console.log(marker)
    }
  },
  mounted() {
    this.initMap()
    this.setMarker()
  }
}
</script>

<style scoped>
.g-map {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
}
</style>