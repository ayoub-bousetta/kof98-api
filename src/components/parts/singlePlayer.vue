<template>
    <section class="singles">
        <div class="container">
            <div class="single">
                   <div class="infos" v-if="this.player.name && this.player.name != '' " >
                                <div class="icon">
                       
                             <img v-bind:src="this.URLstorage +'/'+ player.img">
                                </div>
                                <div class="info">
                                    <p><span>Name</span> :  {{player.name}} - <small>{{player.gender_id.name}}</small></p>
                                    <p class="striped"> <span>Birthdate</span> : {{player.birthdate}}</p>
                                    <p><span>Height</span> : {{player.height}}</p>
                                    <p class="striped"><span>Weight</span> :  {{player.weight}}</p>
                                    <p><span>Occupation</span> :  {{player.occupation}}</p>
                                    <p class="striped"><span>Blood</span> :  {{player.blood_type_id.name}}</p>

                                    <p><span>Weapon</span> :  {{(player.weapon)?player.weapon:'None'}}</p>
                                    <p class="striped"><span>Fight style</span> :  {{player.fight_style}}</p>



                                </div>
        </div>
            </div>
        </div>
     
 </section>
       
</template>

<script>
import axios from 'axios'
export default {
  name: 'singlePlayer',

  data(){
      return {
          player:[],
          URLstorage:'http://kof98api.aubbusta.co/storage'
        
      }
  },



  mounted(){
   

        axios.get('http://kof98api.aubbusta.co/api/players/one/'+this.$route.params.id).then(res=>{
           
             this.player=res.data

        
          })
       
   
        



  },

}
</script>