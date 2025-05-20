<template>
  <div class="gallery-container">
    <h1 class="gallery-title">Моя Галерея</h1>
    <p class="gallery-count">Всего изображений: {{ imageCount }}</p>

    <FileUpload @uploaded="uploadImage" />

    <ul class="elements__list">
      <li class="card" v-for="(image, index) in images" :key="image.id">
        <button
          type="button"
          class="card__delete"
          @click.stop="confirmDelete(image.id)"
        ></button>
        <img
          :src="image.src"
          :alt="image.alt"
          class="card__image"
          @click="openModal(index)"
        />
        <div class="card__place">
          <h3 class="card__name">{{ image.alt }}</h3>
          <div class="card__container"></div>
        </div>
      </li>
    </ul>

    <div v-if="selectedImage !== null" class="popup popup_image">
      <div class="popup__container">
        <button type="button" class="popup__close" @click="closeModal"></button>
        <figure class="popup__figure">
          <img
            class="popup__image"
            :src="images[selectedImage].src"
            :alt="images[selectedImage].alt"
          />
          <figcaption class="popup__description">
            {{ images[selectedImage].alt }}
          </figcaption>
        </figure>
        <div class="popup__navigation">
          <button @click="prevImage" :disabled="selectedImage === 0">←</button>
          <button
            @click="nextImage"
            :disabled="selectedImage === images.length - 1"
          >
            →
          </button>
        </div>
      </div>
    </div>

    <div v-if="showDeleteModal" class="popup popup_delete">
      <div class="popup__container">
        <p class="popup__description">Удалить изображение?</p>
        <div class="popup__navigation">
          <button @click="deleteImage">Да</button>
          <button @click="closeDeleteModal">Нет</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import FileUpload from "./FileUpload.vue";

export default {
  name: "GalleryComp",
  components: { FileUpload },
  data() {
    return {
      selectedImage: null,
      showDeleteModal: false,
      imageToDeleteId: null,
    };
  },
  computed: {
    ...mapState({
      images: (state) => state.images,
    }),
    ...mapGetters(["imageCount"]),
  },
  methods: {
    ...mapActions(["fetchImages", "removeImage"]),
    openModal(index) {
      this.selectedImage = index;
    },
    closeModal() {
      this.selectedImage = null;
    },
    nextImage() {
      if (this.selectedImage < this.images.length - 1) {
        this.selectedImage += 1;
      }
    },
    prevImage() {
      if (this.selectedImage > 0) {
        this.selectedImage -= 1;
      }
    },
    confirmDelete(id) {
      this.imageToDeleteId = id;
      this.showDeleteModal = true;
    },
    closeDeleteModal() {
      this.showDeleteModal = false;
      this.imageToDeleteId = null;
    },
    deleteImage() {
      this.removeImage(this.imageToDeleteId);
      this.closeDeleteModal();
    },
    uploadImage(imageData) {
      const image = {
        ...imageData,
        id: String(Date.now()),
      };
      this.$store.commit("addImage", image);
    },
  },
  created() {
    this.fetchImages();
  },
};
</script>

<style scoped>
.gallery-container {
  margin: 0 auto;
  text-align: center;
}
.gallery-title {
  margin-bottom: 10px;
}

.gallery-count {
  margin-bottom: 20px;
}

.elements__list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 0;
  list-style: none;
  justify-content: center;
}

.card {
  background-color: white;
  border-radius: 10px;
  width: 35%;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.card__image {
  width: 100%;
  height: 282px;
  object-fit: cover;
  cursor: pointer;
}

.card__delete {
  position: absolute;
  top: 10px;
  right: 10px;
  background: url("../assets/images/trash.svg") no-repeat center;
  background-size: 16px;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  z-index: 1;
}

.card__place {
  padding: 10px;
}

.card__name {
  font-size: 16px;
  margin: 0;
  font-weight: bold;
}

.card__container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup__container {
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90%;
  position: relative;
  text-align: center;
}

.popup__close {
  position: absolute;
  top: 10px;
  right: 15px;
  background: url("../assets/images/close.svg") no-repeat center;
  background-size: 20px;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
}

.popup__figure {
  margin: 0;
}

.popup__image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
}

.popup__description {
  margin-top: 10px;
  font-size: 16px;
}

.popup__navigation {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
}

.popup__navigation button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.popup__navigation button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
