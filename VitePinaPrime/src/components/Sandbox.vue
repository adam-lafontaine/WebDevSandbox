<script setup lang="ts">

import { ref, onMounted } from "vue";

import { useCountingStore } from '../stores/CountingStore'
import { useChartStore } from '../stores/ChartStore'

const counter = useCountingStore();
const chart_data = useChartStore();

const styles = getComputedStyle(document.documentElement);

const set_chart_data = () => 
{
    let blue = styles.getPropertyValue('--blue-500');
    let green = styles.getPropertyValue('--green-500');
    let orange = styles.getPropertyValue('--orange-500');

    return {
        labels: chart_data.get_x,
        datasets: [
            {
                label: "Y3",
                data: chart_data.get_y3,
                type: 'line',
                borderColor: orange,
                fill: false,
                tension: 0
            },
            {
                label: "Y1",
                data: chart_data.get_y1,
                type: 'bar',
                backgroundColor: blue
            },
            {
                label: "Y2",
                data: chart_data.get_y2,
                type: 'bar',
                backgroundColor: green
            },
            
        ]
    };
};


const set_chart_options = () => 
{
    const textColor = styles.getPropertyValue('--text-color');
    const textColorSecondary = styles.getPropertyValue('--text-color-secondary');
    const surfaceBorder = styles.getPropertyValue('--surface-border');

    return {
        maintainAspectRatio: true,
        aspectRatio: 1.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
};


const chart_props_data = ref();
const chart_props_options = ref();

onMounted(() => {
    chart_props_data.value = set_chart_data();
    chart_props_options.value = set_chart_options();
});

</script>


<template>
    <Card>
        <template #title> The Store </template>
        <template #content>
            <div class="row">
                <div class="col"> {{ counter.get_count }}</div>
                <div class="col"> {{ counter.get_count_str }}</div>
            </div>

        </template>
        <template #footer>
            
            <Button 
                icon="pi pi-minus" 
                label="minus" 
                @click="counter.decrement()"
            />
            <Button 
                icon="pi pi-plus" 
                label="plus" 
                style="margin-left: 0.5em" 
                @click="counter.increment()"
            />
        </template>
  </Card>

  <div class="card">
    <Chart type="bar" :data="chart_props_data" :options="chart_props_options" class="h-30rem" />
  </div>

</template>


<style scoped>

</style>