<template>
    <div>
      <div class="cards">
        <form> <input type="text" v-model="filtername" v-on:input="getPlayer"></form>
    

<div class="boxs" v-if="this.players.length > 0">
<div class="box" v-for="item in this.players" :key='item.id'>
  <div class="boxinside">
 <img v-bind:src="'http://kof98api.aubbusta.co/storage/'+ item.img">
   <span v-on:click="getonePlayer(item.id)">{{ item.name }}</span>
  </div>
</div>

</div>


      


      </div>
    

    </div>
  
</template>


<script>
import axios from 'axios';
export default {
  name: 'playersUi',
  data(){
   return{
    playerList :this.players ? this.players : {},
     filtername:'',
     
   }
  },
props :['players'],



  methods: {
    getPlayer(){

    

        if(this.filtername != '' ){
        axios.get('http://kof98api.aubbusta.co/api/players/like/'+this.filtername).then(res=>{
           
             this.players=res.data

           
        
          })
        }else{
        this.players =this.playerList
        }
        
    },

    getonePlayer(id){
     
     this.$router.push('/'+id)
    }
  },
  

}
</script>