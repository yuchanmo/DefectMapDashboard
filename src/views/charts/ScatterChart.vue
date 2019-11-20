<template>
  <div id="vueapp" class="vue-app">
    <kendo-chart ref="chart"
                 :title-text="'Charge current vs. charge time'"
                 :legend-visible="true"
                 :series-defaults-type="'scatterLine'"
                 :x-axis-max="90"
                 :x-axis-title-text="'Time'"
                 :x-axis-labels-format="'{0}m'"
                 :y-axis-max="100"
                 :y-axis-title-text="'Charge'"
                 :y-axis-labels-format="'{0}%'"
                 :tooltip-visible="true"
                 :tooltip-format="'{1}% in {0} minutes'"
                 :theme="'sass'">
        <kendo-chart-series-item :name="'0.8C'"
                                 :data="[[10, 10], [15, 20], [20, 25], [32, 40], [43, 50], [55, 60], [60, 70], [70, 80], [90, 100]]">
        </kendo-chart-series-item>
        <kendo-chart-series-item :name="'1.6C'"
                                 :data="[[10, 40], [17, 50], [18, 70], [35, 90], [47, 95], [60, 100]]">
        </kendo-chart-series-item>
        <kendo-chart-series-item :name="'3.1C'"
                                 :data="[[10, 70], [13, 90], [25, 100]]">
        </kendo-chart-series-item>
    </kendo-chart>
</div>
</template>

<script>
/* eslint-disable */
var samples = [

];
export default {
    data() {
        return {
            comment:"Hello This is a Trend viewer component"
        }
    },

}
</script>

<style>

</style>