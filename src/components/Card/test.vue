<template>
<div>
  <div class="waterfall px-container clearfix" v-cloak>
		<ul class="px-waterfall left" v-for="(el,i) in newWaterfallData" :key="i">
			<li v-for="(item,index) in el" :key="index">
				<div style="position: relative;"  >
	              <router-link to="/goodsdetail/1">
	                <img v-lazy="item.e_img" class="bg-img" alt="" v-loading="true">
	              </router-link>
	              <div class="px-hot-tag" v-if="item.u_img">
	                <img :src="item.u_img" alt="" >
	              </div>
				  <h3 class="font22 color-fff fh" v-if="item.e_intro"> {{item.e_intro}}</h3>
	           	 </div>
			</li>
		</ul>
	</div>
</div>
</template>
<script>
export default {
  data() {
    return {
      newWaterfallData: '',
      waterfallDataNumber:''
    }
  },
  created() {
    let [ ...waterfallData ]  = this.waterfallData
    let [ ...newWaterfallData ]= [[],[],[]]
    waterfallData.forEach((el,i) => {
      switch( i%3 ) {
        case 0 : newWaterfallData[0].push(el)
          break
        case 1: newWaterfallData[1].push(el)
          break
        case 2: newWaterfallData[2].push(el)
          break
      }
    });
    this.newWaterfallData = newWaterfallData
  },
  props: [ 'waterfallData' ]
}
</script>
