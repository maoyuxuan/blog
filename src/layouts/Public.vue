<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header reveal>
      <q-toolbar v-ripple class="items-start text-white" color="$global-bgcolor">
        <q-btn flat dense round @click="drawer" aria-label="Menu">
          <q-icon name="menu"/>
        </q-btn>
        <q-toolbar-title>{{ pageMeta.title }}</q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <LeftSidebar></LeftSidebar>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";
import { mapState } from 'vuex'
import LeftSidebar from "./LeftSidebar";
export default {
  name: "Public",
  components: {
    LeftSidebar
  },
  computed: {
    drawerState: {
      get() {
        return this.$store.state.example.drawerState;
      },
      set(val) {
        this.$store.commit("example/updateDrawerState", val);
      }
    },
    ...mapState("example", ["pageMeta"])
  },
  mounted() {
    // console.log(this.$q.platform.is.desktop)
  },
  methods: {
    openURL,
    drawer() {
      this.drawerState = !this.drawerState;
      // this.$refs.newData.waterfall();
      // console.log(this.$refs.newData)
    }
  }
};
</script>

