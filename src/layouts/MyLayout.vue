<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header reveal>
      <q-toolbar v-ripple class="items-start text-white" color="$global-bgcolor">
        <q-btn flat dense round @click="drawer" aria-label="Menu">
          <q-icon name="menu"/>
        </q-btn>
        <q-toolbar-title>
          <div class="user-head">
            <div class="user-img">
              <img src="~assets/user.png">
            </div>
            <p>
              亚历山大&bull; 超级流浪者
              <i class="ui-icon-man"></i>
            </p>
          </div>
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs class="shadow-2" align="justify" color="white" text-color="tertiary">
        <q-route-tab to="/" exact slot="title" label="最新动态" ref="newData"/>
        <q-route-tab to="/describe" exact slot="title" label="个人介绍"/>
      </q-tabs>
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
  name: "MyLayout",
  components:{
    LeftSidebar
  },
  data() {
    return {
      // drawerState: this.$q.platform.is.desktop
    };
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
    drawer(){
      this.drawerState = !this.drawerState
      // this.$refs.newData.waterfall();
      // console.log(this.$refs.newData)
    }
    
  }
};
</script>

<style scoped>
.items-start {
  align-items: flex-start;
}
.user-head {
  margin: 3rem;
  text-align: center;
}
.user-img {
  margin: 0 auto;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  overflow: hidden;
}
.user-img img {
  width: 100%;
  height: 100%;
}
.q-layout-header-hidden {
  -webkit-transform: translateY(-83%);
  transform: translateY(-83%);
}
</style>

