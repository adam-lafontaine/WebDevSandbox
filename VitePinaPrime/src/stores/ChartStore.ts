import { defineStore } from "pinia";

const N_ELEMENTS = 10;
const LABELS = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ];


export const useChartStore = defineStore("ChartStore", {
    
    state: () => {

        return {
            x_labels: LABELS,

            data_1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            data_2: [5, 6, 7, 8, 9, 10, 9, 8, 7, 6],
            data_3: [8, 7, 6, 5, 4, 5, 6, 7, 8, 7],
        };
    },


    getters: {
        get_x: state => state.x_labels,
        get_y1: state => state.data_1,
        get_y2: state => state.data_2,
        get_y3: state => state.data_3
    },


    actions: {
        
        start(): void {},


        stop(): void {}
    }
});