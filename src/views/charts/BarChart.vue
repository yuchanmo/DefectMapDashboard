<template>
<div id="vueapp" class="vue-app">
    <kendo-chart :title-text="'Kendo Chart Example'"
                 :legend-position="'bottom'"
                 :series="datasource.series"
                 :category-axis-categories="datasource.categories"
                 :value-axis="datasource.axis"
                 :theme="'sass'"
                 @axislabelclick="onAxisLabelClick">
    </kendo-chart>
</div>
</template>

<script>
/* eslint-disable */
export default {
props:[datasource]
}
</script>

<style>

</style>