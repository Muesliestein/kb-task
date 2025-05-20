<template>
  <div>
    <button @click="openUploadModal">Загрузить изображение</button>

    <!-- Модальное окно -->
    <div v-if="showModal" class="upload-modal">
      <div class="upload-content">
        <h3>Загрузка изображения</h3>
        <input type="file" @change="handleFile" accept="image/*" />
        <input type="text" v-model="alt" placeholder="Название" />
        <button v-if="file" @click="submitFile">Загрузить</button>
        <button @click="closeUploadModal">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      file: null,
      alt: "",
    };
  },
  methods: {
    openUploadModal() {
      this.showModal = true;
    },
    closeUploadModal() {
      this.showModal = false;
      this.file = null;
      this.alt = "";
    },
    handleFile(event) {
      // eslint-disable-next-line prefer-destructuring
      this.file = event.target.files[0];
    },
    submitFile() {
      const reader = new FileReader();
      reader.onload = () => {
        const imageData = {
          id: Date.now(),
          src: reader.result,
          alt: this.alt || this.file.name,
        };
        this.$emit("uploaded", imageData);
        this.closeUploadModal();
      };
      reader.readAsDataURL(this.file);
    },
  },
};
</script>

<style scoped>
.upload-modal {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.upload-content {
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 20px;
  border-radius: 18px;
  gap: 10px;
  text-align: center;
}
</style>
