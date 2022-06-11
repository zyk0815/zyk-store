<template>
  <div class="itemOne">
    <h2>库存统计</h2>
    <div id="threeChart" class="echart">图表的容器</div>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from "vue";
export default {
  setup() {
    let data = reactive({});
    const $echarts = inject("echarts");
    const $http = inject("axios");
    const getState = async () => {
      data = await $http({ url: "/three/data" });
    };
    onMounted(() => {
      getState().then(() => {
        let myChart = $echarts.init(document.getElementById("threeChart"));
        myChart.setOption({
          legend: {
            top: "bottom",
          },
          series: [
            {
              type: "pie",
              data: data.data.chartData.chartData,
              radius: [10, 100],
              center: ["50%", "45%"],
              roseType: "area",
              itemStyle: {
                borderRadius: 10,
              },
            },
          ],
          tooltip: {
            show: true,
          },
        });
      });
    });
    return {
      data,
      $echarts,
      $http,
      getState,
    };
  },
};
</script>

<style lang="less" scoped>
.echart {
  height: 4.5rem;
}
h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  font-size: 0.25rem;
  text-align: center;
}
</style>