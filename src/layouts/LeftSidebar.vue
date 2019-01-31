<template>
  <q-layout-drawer
    v-model="drawerState"
    :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
  >
    <q-list no-border link inset-delimiter>
      <q-item to="/" exact>
        <i class="ui-icon-new text-pink"></i>
        <q-item-main label="最新动态" sublabel="这里有我的最新动态"/>
      </q-item>
      <q-item to="/public/build" exact>
        <i class="ui-icon-travel text-primary"></i>
        <q-item-main label="旅行记录" sublabel="世界这么大我想去看看"/>
      </q-item>
      <q-item to="/public/build" exact>
        <i class="ui-icon-album text-positive"></i>
        <q-item-main label="光的艺术" sublabel="一个摄影师的养成记"/>
      </q-item>
      <q-item to="/public/build" exact>
        <i class="ui-icon-video text-warning"></i>
        <q-item-main label="自制视频" sublabel="一些逗逼的时光"/>
      </q-item>
      <q-item to="/public/build" exact>
        <i class="ui-icon-knowledge text-cyan-5"></i>
        <q-item-main label="知识分享" sublabel="程序猿的进化之路"/>
      </q-item>
      <q-item to="/public/build" exact>
        <i class="ui-icon-project text-purple-5"></i>
        <q-item-main label="项目案例" sublabel="这些年撸的一些代码"/>
      </q-item>
      <q-item to="/public/setting" exact>
        <i class="ui-icon-seting text-faded"></i>
        <q-item-main label="设置" sublabel="。。。。。。"/>
      </q-item>
    </q-list>
  </q-layout-drawer>
</template>

<script>
import { mapState } from "vuex";
import { getSkin } from '../utils/skin'
export default {
  name: "LeftSidebar",
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
    getSkin();
  }
};
</script>

<style scoped>
.q-layout-drawer i {
  margin-right: 1rem;
  font-size: 1.5rem;
}
</style>

