<template>
  <div class="homePage">
    <header>
      <h1>Vue3--echarts大数据可视化</h1>
    </header>
    <section class="container">
      <section class="left">
        <ItemPage>
          <ItemOne />
        </ItemPage>
        <ItemPage>
          <ItemTwo />
        </ItemPage>
      </section>
      <section class="mid">
        <Map />
      </section>
      <section class="right">
        <ItemPage>
          <ItemThree />
        </ItemPage>
        <ItemPage>
          <ItemFour />
        </ItemPage>
      </section>
    </section>
  </div>
</template>

<script>
import { inject } from "vue";
import ItemPage from "@/components/itemPage.vue";
import ItemOne from "@/components/itemOne.vue";
import ItemTwo from "@/components/itemTwo.vue";
import ItemThree from "@/components/itemThree.vue";
import ItemFour from "@/components/itemFour.vue";
import Map from "@/components/map.vue";
export default {
  components: {
    ItemPage,
    ItemOne,
    ItemTwo,
    ItemThree,
    ItemFour,
    Map,
  },
  setup() {
    const $echarts = inject("echarts");
    const $http = inject("axios");
    return {
      $echarts,
      $http,
    };
  },
};
</script>

<style scoped lang="less">
header {
  height: 1rem;
  width: 100%;
  background-color: rgba(0, 0, 255, 0.2);
  h1 {
    font-size: 0.375rem;
    color: #fff;
    text-align: center;
    line-height: 1rem;
  }
}
.container {
  min-width: 500px;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
  display: flex;
  .left,
  .right {
    flex: 3.5;
  }
  .mid {
    flex: 4.5;
    border: 1px solid blue;
    height: 10.5rpx;
    padding: 0.125rem;
    margin: 0.25rem;
  }
}
</style>