import { defineStore } from "pinia";

export const useMainStore = defineStore('MainStore',{
    state: ()=>({
        data: []
    }),
    actions:{
       loadStore(data){
           this.data=data
        }
    }
});