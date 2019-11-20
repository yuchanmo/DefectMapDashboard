<template>
<div id="vueapp" class="vue-app">
    <!-- <h1>Hello</h1> -->
    <scatter/>
    <!-- <bar v-for="s in samples" v-bind:key="s.id" v-bind:datasource="s" /> -->
</div>
</template>

<script>
/* eslint-disable */
import ScatterChart from './charts/ScatterChart.vue';
import BarChart from './charts/BarChart.vue';
// var samples_data = [
// {
//     id:1,
//             series: [{
//                 name: 'Temperature',
//                 data: [20, 25, 32],
//                 axis: "temperature"
//             },
//             {
//                 name: 'Humidity',
//                 data: [40, 50, 80],
//                 axis: "humidity"
//             }],
//             categories: ["Aug", "Sep", "Oct"],
//             axis: [{
//                 name: "temperature",
//                 labels: {
//                     format: "{0}C"
//                 }
//             },
//             {
//                 name: "humidity",
//                 labels: {
//                     format: "{0}%"
//                 }
//             }]
//         },
//         {
//     id:2,
//             series: [{
//                 name: 'Temperature',
//                 data: [20, 25, 32],
//                 axis: "temperature"
//             },
//             {
//                 name: 'Humidity',
//                 data: [40, 50, 80],
//                 axis: "humidity"
//             }],
//             categories: ["Aug", "Sep", "Oct"],
//             axis: [{
//                 name: "temperature",
//                 labels: {
//                     format: "{0}C"
//                 }
//             },
//             {
//                 name: "humidity",
//                 labels: {
//                     format: "{0}%"
//                 }
//             }]
//         },
//         {
//     id:3,
//             series: [{
//                 name: 'Temperature',
//                 data: [20, 25, 32],
//                 axis: "temperature"
//             },
//             {
//                 name: 'Humidity',
//                 data: [40, 50, 80],
//                 axis: "humidity"
//             }],
//             categories: ["Aug", "Sep", "Oct"],
//             axis: [{
//                 name: "temperature",
//                 labels: {
//                     format: "{0}C"
//                 }
//             },
//             {
//                 name: "humidity",
//                 labels: {
//                     format: "{0}%"
//                 }
//             }]
//         }
    
    
// ];
export default {
    components:{
        scatter : ScatterChart,
        bar:BarChart
    },
    data() {
        return {
            // samples:samples_data
        }
    },

}
</script>

<style>

</style>