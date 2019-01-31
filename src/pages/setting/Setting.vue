<template>
  <q-page padding class="page-describe docs-input row justify-center">
    <div style="width: 1000px; max-width: 90vw;">
      <p class="caption">基本设置</p>
      <q-card-separator/>
      <div class="row-list">
        <div class="row">
          <div class="col-4">字号</div>
          <div class="col-8 fontSize">
            <q-slider v-model="marker" :min="0" :max="10" :step="2.5" snap markers/>
            <div class="row">
              <div class="col">极小</div>
              <div class="col">小</div>
              <div class="col">中</div>
              <div class="col">大</div>
              <div class="col">极大</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-4">字体</div>
          <div class="col-8">
            <q-radio v-model="fontfamily" val="1" label="微软雅黑" class="q-mr-md"/>
            <q-radio v-model="fontfamily" val="2" label="黑体" class="q-mr-md"/>
            <q-radio v-model="fontfamily" val="3" label="宋体"/>
          </div>
        </div>
        <div class="row">
          <div class="col-4">字体颜色</div>
          <div class="col-8">
            <q-color
              v-model="textColor"
              inverted
              :style="{width :'60%', background : textColor + '!important'}"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-4">背景颜色</div>
          <div class="col-8">
            <q-color
              v-model="bgColor"
              inverted
              :style="{width :'60%', background : bgColor + '!important'}"
            />
          </div>
        </div>
      </div>
      <p class="caption">音乐设置</p>
      <q-card-separator/>
      <div class="row-list">
        <div class="row">
          <div class="col-4">歌曲选择</div>
          <div class="col-8">
            <q-select v-model="select" :options="selectOptions"/>
          </div>
        </div>
        <div class="row">
          <div class="col-4">模式选择</div>
          <div class="col-8">
            <q-radio v-model="musicMode" val="1" label="单曲循环" class="q-mr-md"/>
            <q-radio v-model="musicMode" val="2" label="列表循环" class="q-mr-md"/>
            <q-radio v-model="musicMode" val="3" label="随机播放"/>
          </div>
        </div>
        <div class="row">
          <div class="col-4">音乐开关</div>
          <div class="col-8">
            <q-toggle v-model="musicChecked"/>
          </div>
        </div>
      </div>
      <p class="caption">高级设置</p>
      <q-card-separator/>
      <div class="row-list">
        <div class="row">
          <div class="col-4">重置并清理</div>
          <div class="col-8">
            <q-btn flat icon="sync" color="primary" label="还原为原始默认设置" @click="reset"/>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { colors } from "quasar";
import {getToken, setToken, removeToken } from "../../utils/auth";
const { lighten, setBrand } = colors;
export default {
  name: "Setting",
  data() {
    return {
      marker: 5,
      fontfamily: "1",
      textColor: "#0c0c0c",
      bgColor: "#78909c",
      select: "1",
      selectOptions: [
        {
          label: "陌生城市的早晨",
          value: "1"
        },
        {
          label: "公路之歌",
          value: "2"
        },
        {
          label: "热河",
          value: "3"
        }
      ],
      musicMode: "1",
      musicChecked: true
    };
  },
  watch: {
    marker(newQuestion, oldQuestion) {
      let fontsize = "1rem";
      let fontsizeLarge = "1.25rem";
      if (newQuestion == 0) {
        fontsize = ".5rem";
        fontsizeLarge = 0.5 * 1.25 + "rem";
      }
      if (newQuestion == 2.5) {
        fontsize = ".75rem";
        fontsizeLarge = 0.75 * 1.25 + "rem";
      }
      if (newQuestion == 5) {
        fontsize = "1rem";
        fontsizeLarge = 1 * 1.25 + "rem";
      }
      if (newQuestion == 7.5) {
        fontsize = "1.25rem";
        fontsizeLarge = 1.25 * 1.25 + "rem";
      }
      if (newQuestion == 10) {
        fontsize = "1.5rem";
        fontsizeLarge = 1.5 * 1.25 + "rem";
      }
      setBrand("global-fontsize", fontsize);
      setBrand("global-fontsize-large", fontsizeLarge);
      setToken("global-fontsize", fontsize);
      setToken("global-fontsize-large", fontsizeLarge);
      setToken("fontsize", newQuestion);
    },
    fontfamily(newQuestion, oldQuestion) {
      let fontfamily = "Microsoft YaHei";
      if (newQuestion == 1) {
        fontfamily = "Microsoft YaHei";
      }
      if (newQuestion == 2) {
        fontfamily = "SimHei";
      }
      if (newQuestion == 3) {
        fontfamily = "SimSun";
      }
      setBrand("global-fontfamily", fontfamily);
      setToken("global-fontfamily", fontfamily);
      setToken("fontfamily", newQuestion);
    },
    textColor(newQuestion, oldQuestion) {
      let colorDarken = lighten(newQuestion, 30);
      setBrand("global-color", newQuestion);
      setBrand("global-color-darken", colorDarken);
      setToken("global-color", newQuestion);
      setToken("global-color-darken", colorDarken);
    },
    bgColor(newQuestion, oldQuestion) {
      setBrand("global-bgcolor", newQuestion);
      setToken("global-bgcolor", newQuestion);
    }
  },
  mounted() {
    this.marker = parseFloat(getToken('fontsize')) || 5;
    this.fontfamily = getToken('fontfamily') || 1;
    this.textColor = getToken('global-color') || "#0c0c0c";
    this.bgColor = getToken('global-bgcolor') || "#78909c";
  },
  methods: {
    reset() {
      this.$q
        .dialog({
          title: "重置设置",
          message: "这将重置您的所有的设置，恢复默认状态.",
          ok: "确定",
          cancel: "取消"
        })
        .then(() => {
          setBrand("global-fontsize", "");
          setBrand("global-fontsize-large", "");
          setBrand("global-fontfamily", "");
          setBrand("global-color", "");
          setBrand("global-color-darken", "");
          setBrand("global-bgcolor", "");
          this.marker = 5;
          this.fontfamily = 1;
          this.textColor = "#0c0c0c";
          this.bgColor = "#78909c";
          removeToken("global-fontsize");
          removeToken("global-fontsize-large");
          removeToken("global-fontfamily");
          removeToken("global-color");
          removeToken("global-color-darken");
          removeToken("global-bgcolor");
        })
        .catch(() => {
          this.$q.notify("取消");
        });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~variables'
// .page-describe
// color $global-color !important
// $primary-darkened = $primary;

// :root {
// --q-color-primary-darkened: $primary-darkened;
// }

// .page-describe {
// color: $global-color !important;
// color: var(--q-color-global-color) !important;
// font-size : $global-fontsize !important;
// font-size : var(--q-color-global-fontsize) !important;
// }

// .bg-primary-darkened {
// background: $primary-darkened !important;
// background: var(--q-color-primary-darkened) !important;
// }
.caption
  padding 0 2rem
.page-describe .row-list
  margin 1rem 0
.page-describe .row-list > .row
  padding 0 0 0 2rem
.page-describe .row > div
  line-height 3
@media screen and (min-width: 400px)
  .fontSize
    margin-left -4%
.fontSize .q-slider
  padding 0 10%
.fontSize .row
  text-align center
</style>
