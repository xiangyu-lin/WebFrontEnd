<template>
<div>
    <div :option="chartOption"> {{ chartOption.data }}</div>
</div>

</template>

<script>
    import request from "../../utils/request"
    export default {
    data() {
        return {
            chartOption: {}
        };
    },
    mounted() {
        this.getChartData();
        this.interval = setInterval(() => {
        this.getChartData();
        }, 30000);
    },
  methods: {
    getChartData() {
      request({
        url: "https://autumnfish.cn/api/joke",
        method: "get",
        // data:{ "k1": 123},
        // params: { ID: 12345 }
      }).then(response => {
        this.chartOption = {
            data: response.data
        };
      });
    }
  },

    }
</script>

<style></style>