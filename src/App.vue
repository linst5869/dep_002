<template>



  <v-container  class="ma-0 pa-0" fluid>
    <v-row class="ma-0 pa-0" > 
      <v-col class="ma-0 pa-0" >
      <v-sheet elevation="0" class="ma-0 pa-0" >
    <v-tabs
      class="ma-0 pa-0" 
      background-color="green"
      next-icon="mdi-chevron-right"
      prev-icon="mdi-chevron-left"
      flat
      show-arrows
    >
      <v-tab
        v-for="i in 6"
        :key="i"
      >
        Item {{ i }}
      </v-tab>
    </v-tabs>
  </v-sheet>
  <div class="pa-3">
    <v-alert
      class="pa-0"
      color="deep-orange"
      icon="mdi-fire"
      title="Outlined"
      variant="outlined"
    >

      Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit. Maecenas egestas arcu quis ligula mattis placerat. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.

    <v-btn color="grey" variant="outlined" @click="openFileUpload()" type="button" flat>
        <v-icon size="30" icon="mdi-plus"></v-icon>파일추가
      </v-btn>
    <input type="file" id="hiddenFile" style="visibility:hidden">
  </v-alert>
  
  </div>


</v-col>
    </v-row>
   <v-row  class="ma-0 pa-0">
      <v-col class="mt-10 ma-0 pa-0">
  <draggable
    v-model="items"
    animation="200"
    class="drg"
    item-key="id"
  >
    <template #item="{ element }">
      <div class="card" >

        <img class="img"
        @click="works(element)"         
        :class="element.id === selected.id ? 'active' : 'deactive'"
        :src="element.img">
        <!-- <div 
        @click="works(element)"
        class="img"
        :class="element.id === selected.id ? 'active' : 'deactive'"

        :style="{ backgroundImage: `url(${element.img})`}" >
        {{ element.id}} -- {{ selected.id}} 
      
      </div> -->
      
    </div>
      </template>
  </draggable>
</v-col>
</v-row>
  <div style="text-align:center; margin:10px;">
    <v-btn @click="this.snackbar != this.snackbar">asdfsadf</v-btn>
  </div>

  <v-snackbar
      v-model="snackbar"
      timeout="-1"
      position="relative"
    >
      <p>{{ text }}</p>
      <p>{{ text }}</p>
      <template v-slot:actions>
        <v-btn
          color="pink"
          variant="outlined"
        >
          Edit
        </v-btn>
      </template>
    </v-snackbar>
</v-container>
<div>
  <KakaoMapVue/>
</div>
</template>

<script>
import draggable from 'vuedraggable';
import KakaoMapVue from './components/KakaoMap.vue';


export default {
  name: 'HelloWorld',
  components:{
    draggable,
    KakaoMapVue

  },
  methods:{
    works( obj){
      console.log( "work")
      this.selected = obj
    },
    openFileUpload() {
    document.getElementById("hiddenFile").click();
}
  },
  data(){
    return{

      snackbar: true,
      text: `선택한 이미지 수정 및 텍스트넣기`,

      selected: 0,
      active:false,

      classObject: {},
      items : [
        { id:1, name: 'item1',img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_002.jpg" },
        { id:2, name: 'item2', img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_007.jpg" },
        { id:3, name: 'item3', img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_008.jpg" },
        { id:4, name: 'item4',img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_009.jpg" },
        { id:5, name: 'item5', img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_013.jpg" },
        { id:6, name: 'item6', img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_014.jpg" },
        { id:7, name: 'item7',img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_015.jpg" },
        { id:8, name: 'item8', img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_016.jpg" },
        { id:9, name: 'item9', img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_017.jpg" },
        { id:10, name: 'item10',img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_1663647906939.jpg" },
        { id:11, name: 'item11', img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_1663650307365.jpg" },
        { id:12, name: 'item12', img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_1663650613757.jpg" },
        { id:13, name: 'item13',img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_crown-vector-transparent-5.jpg" },
        { id:14, name: 'item14', img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_ultraviolet-wallpaper.jpg" },
        { id:15, name: 'item15', img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_zoritsa-valova-1498404-unsplash.jpg" },
        { id:16, name: 'item16',img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_1663650754900.jpg" },
        { id:17, name: 'item17', img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_1663651137644.jpg" },
        { id:18, name: 'item18', img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_002.jpg" },
        { id:19, name: 'item19',img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_1663647906939.jpg" },
        { id:20, name: 'item20', img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_1663650307365.jpg" },
        { id:21, name: 'item21', img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_1663650613757.jpg" },
        { id:22, name: 'item22',img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_crown-vector-transparent-5.jpg" },
        { id:23, name: 'item23', img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_ultraviolet-wallpaper.jpg" },
        { id:24, name: 'item24', img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_zoritsa-valova-1498404-unsplash.jpg" },
        { id:25, name: 'item25',img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_1663650754900.jpg" },
        { id:26, name: 'item26', img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_1663651137644.jpg" },
        { id:27, name: 'item27', img:"https://linst-s3.s3.ap-northeast-2.amazonaws.com/static/images/4/thumb/thum_002.jpg" },
      ]
    }
  }
}

</script>

<style scoped>
.drg{
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  background-color:white;
  margin:0px;
  padding:0px;
}
.card {
  flex-basis: 120px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  /* min-width:100px;
  max-width:115px;
  flex-grow:1; */
  background-color:white;
  padding:0px;
  margin:0px;
}

.img{

  /* min-width:110;
  max-width:130px;
  flex-grow:1; */
  padding:0px;
  margin: 0px;
  width:110px;
  /* height:70px; */
  filter:grayscale(100%);
  /* background-size: 100% 100%; */
  /* background-size: contain; */
  /* flex-grow:1; */
}
/* .img:hover{
  padding:0px;
  width:100%;
  height:100%;
  filter:grayscale(0%);
} */

.active {
  padding:0px;
  width:100%;
  height:100%;
  filter:grayscale(0%);
  box-shadow: 0 0 10px #07c;
  outline: 2px solid rgb(0, 138, 236);
  outline-offset: -1px;
  transition: all .0s;
  z-index: 99999
}

.deactive {
  padding:0px;
  margin: 0px;
  width:100%;
  height:100%;
  /* height:70px; */
  filter:grayscale(70%);
  /* background-size: 100% 100%; */
  z-index: 5

}

.overlaybox {
  position:relative;
  width:360px;
  height:350px;
  background:url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/box_movie.png') no-repeat;
  padding:15px 10px;
  opacity: 50%;
  border: 3px solid red
}



</style>