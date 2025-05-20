import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
  },
  mutations: {
    addImage(state, image) {
      state.images.push(image);
    },
    deleteImage(state, imageId) {
      state.images = state.images.filter((image) => image.id !== imageId);
    },
    setImages(state, images) {
      state.images = images;
    },
  },
  actions: {
    fetchImages({ commit }) {
      const mockImages = [
        {
          id: 1,
          src: "https://cdn.alza.cz/Foto/ImgGalery/Image/the-elder-scrolls-iv-oblivion-remaster-keyart.jpg",
          alt: "Oblivion Remaster",
        },
        {
          id: 2,
          src: "https://cdn.dribbble.com/users/5031/screenshots/3713646/attachments/832536/wallpaper_mikael_gustafsson.png",
          alt: "Лесной пейзаж",
        },
      ];
      commit("setImages", mockImages);
    },

    uploadImage({ commit }, imageData) {
      const newImage = {
        id: Date.now() + Math.random(),
        ...imageData,
      };

      commit("addImage", newImage);
    },

    removeImage({ commit }, imageId) {
      commit("deleteImage", imageId);
    },
  },
  getters: {
    allImages(state) {
      return state.images;
    },
    imageCount(state) {
      return state.images.length;
    },
  },
});
