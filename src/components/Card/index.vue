<template>
  <q-card>
    <div class="albums">
      <div class="row-img row gutter-xs">
        <div v-if="albumsLength == 1" v-for="(item, index) in item.albums" class="col-12">
          <img :style="{backgroundImage:`url(${item.url})`}" @click="fullScreen(index)">
        </div>
        <div
          v-if="albumsLength == 2 || albumsLength == 4"
          v-for="(item, index) in item.albums"
          class="col-6"
        >
          <img :style="{backgroundImage:`url(${item.url})`}" @click="fullScreen(index)">
        </div>
        <div
          v-if="albumsLength == 3 || albumsLength > 4"
          v-for="(item, index) in item.albums"
          class="col-4"
        >
          <img :style="{backgroundImage:`url(${item.url})`}" @click="fullScreen(index)">
        </div>
      </div>
      <q-modal v-model="modal" maximized  class="modal-card">
        <q-carousel
          arrows
          color="white"
          class="text-white full-height"
          ref="carousel"
          style="width: 1000px; max-width: 100vw; margin:auto"
        >
          <q-carousel-slide
            v-for="(item, index) in item.albums"
            :key="`full-${index}`"
            class="flex flex-center bg-black"
          >
            <div class="flex flex-center" @click="closeSilde">
              <img :src="item.url">
            </div>
            <!-- <div class="q-display-3">Step {{ n }}</div> -->
          </q-carousel-slide>

          <q-carousel-control
            slot="control-full"
            slot-scope="carousel"
            position="top-right"
            :offset="[30, 10]"
          >
            <q-btn rounded push color="amber" icon="close" @click="modal = false"/>
          </q-carousel-control>
        </q-carousel>
      </q-modal>
    </div>
    <!-- <Albums :albums="item.albums"></Albums> -->
    <!-- </q-card-media> -->
    <q-card-title>
      {{item.title}}{{item.id}}
      <span slot="subtitle">{{item.time}} {{item.type}}</span>
    </q-card-title>
    <q-card-separator/>
    <q-card-actions align="around">
      <q-btn flat round color="primary" icon="share"/>
      <q-btn flat round color="faded" icon="comment"/>
      <q-btn flat round color="red" icon="favorite"/>
    </q-card-actions>
  </q-card>
</template>
<script>
// import Albums from "./albums";
export default {
  name: "Card",
  components: {
    // Albums: () => import("./albums")
  },
  props: {
    item: Object
  },
  computed: {
    albumsLength() {
      return this.item.albums.length;
    }
  },
  data() {
    return {
      len: 0,
      modal: false
    };
  },
  mounted() {},
  methods: {
    fullScreen(index) {
      // console.log(this.$refs.rowImg)
      this.modal = true;
      this.$refs.carousel.goToSlide(index);
    },
    closeSilde() {
      console.log("close");
      this.modal = false;
    }
  }
};
</script>

<style>
.modal-card .modal-content {
  background: #000 !important;
}
</style>

<style scoped>
.albums {
  overflow: hidden;
}
.row-img > div {
  /* height: 100px; */
}
.row-img img {
  display: block;
  width: 100%;
  height: 0;
  padding-top: 100%;
  cursor: pointer;
  background: no-repeat center center;
  background-size: cover;
}

.q-carousel-slide {
  padding: 0;
}
.q-carousel-slide > div {
  width: 100%;
  height: 100%;
}
.q-carousel-slide img {
  width: 100%;
}
.q-carousel-slide::-webkit-scrollbar-track-piece {
  background-color: #ccc;
}
.q-carousel-slide::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}
.q-carousel-slide::-webkit-scrollbar-thumb {
  background-color: #555;
  background-clip: padding-box;
  min-height: 28px;
}
.q-carousel-slide::-webkit-scrollbar-thumb:hover {
  background-color: #444;
}
</style>


