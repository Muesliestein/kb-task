<template>
  <div>
    <NavBar />
    <div class="container centered-content">
      <GalleryComp />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/m-navigation.vue";
import GalleryComp from "../components/m-gallery.vue";

export default {
  name: "GalleryPage",
  components: {
    NavBar,
    GalleryComp,
  },
};
</script>
