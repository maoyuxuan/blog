<template>
  <q-page padding class="page-describe docs-input row justify-center">
    <div style="width: 1000px; max-width: 90vw;">
      <p class="caption">基本信息</p>
      <q-card-separator/>
      <div class="row-list">
        <div class="row">
          <div class="col-4">姓名</div>
          <div class="col-8">毛雨轩</div>
        </div>
        <div class="row">
          <div class="col-4">性别</div>
          <div class="col-8">男</div>
        </div>
        <div class="row">
          <div class="col-4">出生日期</div>
          <div class="col-8">1993年10月15日</div>
        </div>
        <div class="row">
          <div class="col-4">地区</div>
          <div class="col-8">杭州</div>
        </div>
        <div class="row">
          <div class="col-4">星座</div>
          <div class="col-8">天秤座</div>
        </div>
        <div class="row">
          <div class="col-4">身高</div>
          <div class="col-8">171cm</div>
        </div>
        <div class="row">
          <div class="col-4">体重</div>
          <div class="col-8">63kg</div>
        </div>
      </div>
      <p class="caption">兴趣爱好</p>
      <q-card-separator/>
      <div class="row-list">
        <div class="row">
          <div class="col-4">
            <i class="ui-icon-motion text-teal"></i>
          </div>
          <div class="col-8">
            <q-chip small color="teal">爬山</q-chip>
            <q-chip small color="teal">跑步</q-chip>
            <q-chip small color="teal">游泳</q-chip>
            <q-chip small color="teal">骑行</q-chip>
            <q-chip small color="teal">摄影</q-chip>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <i class="ui-icon-music text-pink-6"></i>
          </div>
          <div class="col-8">
            <q-chip small color="pink-6">摇滚</q-chip>
            <q-chip small color="pink-6">民谣</q-chip>
            <q-chip small color="pink-6">轻音乐</q-chip>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <i class="ui-icon-cate text-light-blue-9"></i>
          </div>
          <div class="col-8">
            <q-chip small color="light-blue-9">烤肉</q-chip>
            <q-chip small color="light-blue-9">海鲜</q-chip>
            <q-chip small color="light-blue-9">浙江菜</q-chip>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <i class="ui-icon-books text-green-8"></i>
          </div>
          <div class="col-8">
            <q-chip small color="green-8">人类简史</q-chip>
            <q-chip small color="green-8">搭车去柏林</q-chip>
            <q-chip small color="green-8">解忧杂货店</q-chip>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <i class="ui-icon-movie text-amber-8"></i>
          </div>
          <div class="col-8">
            <q-chip small color="amber-8">阿甘正传</q-chip>
            <q-chip small color="amber-8">霸王别姬</q-chip>
            <q-chip small color="amber-8">这个杀手不太冷</q-chip>
          </div>
        </div>
      </div>
      <p class="caption">个人介绍</p>
      <q-card-separator/>
      <div class="row-list">
        <div class="row">
          生活不止眼前的苟且，还有诗和远方的田野。你赤手空拳来到人世间，为找到那片海不顾一切。
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.caption {
  padding: 0 2rem;
}
.page-describe .row-list {
  margin: 1rem 0;
}
.page-describe .row-list > .row {
  padding: 0 0 0 2rem;
}
.page-describe .row > div {
  line-height: 3;
}
.page-describe .row > div > i {
  font-size: 1.5rem;
}
.page-describe .q-chip {
  margin: 5px;
}
</style>

<script>
export default {
  name: "Describe"
};
</script>
