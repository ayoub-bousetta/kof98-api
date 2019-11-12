<template>

    <playersUi v-bind:players="this.players" />


</template>

<script>
import playersUi from './playersUi'
import axios from 'axios';
export default {
  name: 'players',

  components:{
    playersUi,
  },
  data(){
   return{
     players:{}
   }
  },

   mounted() {

   axios.get('http://kof98api.aubbusta.co/api/players').then(res=>{
    this.players=res.data
    })
    
  },
 
}
</script>
