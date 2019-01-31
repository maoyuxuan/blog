<template>
  <q-page class="q-ma-lg" ref="page">
    <q-infinite-scroll :handler="getData" ref="infiniteScroll">
      <div class="row gutter-sm" id="box" ref="box">
        <div class="col-md-4 col-sm-6 col-xs-12" v-for="item in items">
          <Card :item="item"></Card>
        </div>
      </div>
      <div class="row justify-center">
        <q-spinner-dots v-if="infinite == true" slot="message" :size="40"/>
        <p v-if="infinite == false" class="q-mt-md q-mb-none text-faded">加载完成</p>
      </div>
    </q-infinite-scroll>
    <q-btn
      v-back-to-top
      round
      color="blue-grey-13"
      class="fixed-bottom-right"
      style="margin: 0 15px 15px 0"
    >
      <q-icon name="keyboard_arrow_up"/>
    </q-btn>
  </q-page>
</template>

<script>
import Card from "../../components/Card";
import { fetchList } from "../../api/transaction";
import { mapGetters } from "vuex";
export default {
  name: "PageIndex",
  components: { Card },
  data() {
    return {
      items: [],
      infinite: true
    };
  },
  computed: {
    ...mapGetters(["example"])
  },
  watch: {
    items: function() {
      let _this = this;
      _this.$nextTick(function() {
        // setTimeout(function(){
        _this.waterfall();
        // },1);
      });
    },
    // example: {
    //   get () { return this.$store.state.example.right },
    //   set (val) { console.log(val)}
    // },
    "$store.state.example.drawerState": function(val) {
      console.log(val);
      let _this = this;
      let myVar = setInterval(function() {
        _this.waterfall();
      }, 10);

      setTimeout(() => {
        clearInterval(myVar);
      }, 120);
    }
  },
  mounted() {
    window.onresize = () => {
      this.waterfall();
    };
  },
  updated() {
    // console.log(this.$refs.page)
    // this.$nextTick(function() {
    //   this.waterfall();
    // });
  },
  methods: {
    getData: function(index, done) {
      let _this = this;
      fetchList({ pageSize: 10, pageIndex: index })
        .then(result => {
          _this.items = _this.items.concat(result.list);
          if (index == result.pageCount) {
            _this.infinite = false;
            this.$refs.infiniteScroll.stop();
          }
          done();
        })
        .catch(err => {});
    },
    waterfall() {
      // var box = document.getElementById("box");
      let box = this.$refs.box;
      if(box == undefined){
        return;
      }
      var items = box.children;
      // 定义每一列之间的间隙 为10像素
      var gap = 0;
      // console.log(items);
      // console.log(items[0]);

      // 1- 确定列数  = 页面的宽度 / 图片的宽度
      var pageWidth = this.getClient().width;
      var itemWidth = items[0].offsetWidth;
      console.log(itemWidth);
      // var itemWidth = 200;
      var columns = parseInt(pageWidth / (itemWidth + gap));
      var arr = [];
      var maxHeight = 0;
      for (var i = 0; i < items.length; i++) {
        // console.log("i:" + i);
        // console.log(columns);
        if (i < columns) {
          // 2- 确定第一行
          items[i].style.top = 0;
          items[i].style.left = (itemWidth + gap) * i + "px";
          arr.push(items[i].offsetHeight);
        } else {
          // 其他行
          // 3- 找到数组中最小高度  和 它的索引
          var minHeight = arr[0];
          var index = 0;
          for (var j = 0; j < arr.length; j++) {
            if (minHeight > arr[j]) {
              minHeight = arr[j];
              index = j;
            }
            // if (maxHeight < arr[j]) {
            //   maxHeight = arr[j];
            // }
          }
          // 4- 设置下一行的第一个盒子位置
          // top值就是最小列的高度 + gap
          // console.log( arr[index] + gap)
          items[i].style.top = arr[index] + gap + "px";
          // left值就是最小列距离左边的距离
          items[i].style.left = items[index].offsetLeft + "px";

          // 5- 修改最小列的高度
          // 最小列的高度 = 当前自己的高度 + 拼接过来的高度 + 间隙的高度
          arr[index] = arr[index] + items[i].offsetHeight + gap;
        }
      }
      for (var j = 0; j < arr.length; j++) {
        if (maxHeight < arr[j]) {
          maxHeight = arr[j];
        }
      }
      box.style.height = maxHeight + "px";
    },
    getClient() {
      // console.log(this.$refs.page.$el.offsetWidth)
      return {
        width: this.$refs.page.$el.offsetWidth + 48,
        height: this.$refs.page.$el.offsetHeight + 48

        // width:
        //   window.innerWidth ||
        //   document.documentElement.clientWidth ||
        //   document.body.clientWidth,
        // height:
        //   window.innerHeight ||
        //   document.documentElement.clientHeight ||
        //   document.body.clientHeight
      };
    }
  }
};
</script>

<style scoped>
#box {
  position: relative;
}
#box > div {
  position: absolute;
}
</style>

