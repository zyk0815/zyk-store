<template>
  <div class="itemOne">
    <h2>周销图</h2>
    <div id="twoChart" class="echart">图表的容器</div>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from "vue";
export default {
  setup() {
    let data = reactive({});
    let xData = reactive([]);
    let yData = reactive([]);
    const $echarts = inject("echarts");
    const $http = inject("axios");
    const getState = async () => {
      data = await $http({ url: "/two/data" });
      xData = data.data.chartData.chartData.day;
      yData = data.data.chartData.chartData.num;
    };
    onMounted(() => {
      getState().then(() => {
        let myChart = $echarts.init(document.getElementById("twoChart"));
        myChart.setOption({
          grid: {
            left: "1%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#e6b600",
              },
            },
          },
          legend: {
            data: yData.map((item) => item.name),
          },
          xAxis: {
            type: "category",
            data: xData,
            boundaryGap: false,
            axisLabel: {
              //x轴文字的配置
              show: true,
              textStyle: {
                color: "#fff",
              },
            },
          },
          yAxis: {
            type: "value",
            axisLabel: {
              //x轴文字的配置
              show: true,
              textStyle: {
                color: "#fff",
              },
            },
          },
          series: yData.map((item) => {
            return {
              type: "line",
              name: item.name,
              data: item.val,
              smooth: true,
              showSymbol: false,
              stack: "Total",
              lineStyle: {
                width: 0,
              },
              emphasis: {
                focus: "series",
              },
              areaStyle: {
                opacity: 0.8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(128,255,165)",
                  },
                  {
                    offset: 1,
                    color: "rgb(1,191,236)",
                  },
                ]),
              },
            };
          }),
        });
      });
    });
    return {
      data,
      xData,
      yData,
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