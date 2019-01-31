<template>
  <Test :waterfallData = "waterfallData"></Test>
</template>
<script>
import Test from "../../components/Card/test";
export default {
  name: "Test",
  components: {
    Test
  },
  data() {
    return {
      waterfallData: [
        {
          e_img: "test.jpg",
          // 图片
          e_intro: "描述信息",
          u_img: "test.jpeg",
          // 标记图
          u_name: "开发者"
        },
        {
          e_img: "test.jpg",
          e_intro: "描述信息",
          u_img: "test.jpeg",
          u_name: "开发者"
        }
      ]
    };
  }
};
</script>
