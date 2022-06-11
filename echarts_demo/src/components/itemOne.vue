<template>
  <div class="itemOne">
    <h2>销售总量</h2>
    <div id="oneChart" class="echart">图表的容器</div>
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
    const setData = (val) => {
      xData = val.data.chartData.chartData.map((item) => item.title);
      yData = val.data.chartData.chartData.map((item) => item.num);
    };
    const getState = async () => {
      let oneData = await $http({ url: "/one/data" });
      setData(oneData);
    };
    onMounted(() => {
      getState().then(() => {
        let myChart = $echarts.init(document.getElementById("oneChart"));
        myChart.setOption({
          grid: {
            top: "3%",
            left: "1%",
            right: "6%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            type: "value",
            axisLabel: {
              //x轴文字的配置
              show: true,
              textStyle: {
                color: "#fff",
              },
            },
          },
          yAxis: {
            type: "category",
            data: xData,
            axisLabel: {
              //x轴文字的配置
              show: true,
              textStyle: {
                color: "#fff",
              },
            },
          },
          series: [
            {
              type: "bar",
              data: yData,
              itemStyle: {
                normal: {
                  borderRadius: [0, 20, 20, 0],
                  color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: "#005eaa",
                    },
                    {
                      offset: 0.5,
                      color: "#339ca8",
                    },
                    {
                      offset: 1,
                      color: "#cda819",
                    },
                  ]),
                },
              },
            },
          ],
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
      setData,
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
