<template>
  <div class="albums">
    <div class="row-img row gutter-xs">
      <div v-if="albumsLength == 1" v-for="(item, index) in albums" class="col-12">
        <img :src="item.url" @click="fullScreen(index)">
      </div>
      <div
        v-if="albumsLength == 2 || albumsLength == 4"
        v-for="(item, index) in albums"
        class="col-6"
      >
        <img :src="item.url" @click="fullScreen(index)">
      </div>
      <div
        v-if="albumsLength == 3 || albumsLength > 4"
        v-for="(item, index) in albums"
        class="col-4"
      >
        <img :src="item.url" @click="fullScreen(index)">
      </div>
    </div>
    <q-modal v-model="modal" maximized>
      <q-carousel color="white" arrows quick-nav class="text-white full-height" ref="carousel">
        <q-carousel-slide
          v-for="n in albumsLength"
          :key="`full-${n}`"
          class="flex flex-center"
          :class="`bg-${colors[n % 5]}`"
        >
          <div class="q-display-3">Step {{ n }}</div>
        </q-carousel-slide>

        <q-carousel-control
          slot="control-full"
          slot-scope="carousel"
          position="bottom-right"
          :offset="[18, 22]"
        >
          <q-btn rounded push color="amber" icon="close" label="Close me" @click="modal = false"/>
        </q-carousel-control>
      </q-carousel>
    </q-modal>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    albums: Array
  },
  computed: {
    albumsLength() {
      return this.albums.length;
    }
  },
  data() {
    return {
      len: 0,
      modal: false,
      colors: ["primary", "secondary", "yellow", "red", "orange", "grey-2"]
    };
  },
  watch: {
    // albums: function() {
    //   this.$nextTick(function() {
    //     console.log(13132)
    //     this.$emit("onon");
    //   });
    // }
  },
  // mounted() {
  //   this.$nextTick(function() {
  //     this.$emit("onon");
  //   });
  // },
  methods: {
    fullScreen(index) {
      // console.log(this.$refs.rowImg)
      this.modal = true;
      this.$refs.carousel.goToSlide(index);
    }
  }
};
</script>

<style scoped>
.albums {
  overflow: hidden;
}
.row-img > div{
  height: 100px;
}
.row-img img {
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>


