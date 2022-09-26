<template>
    <div id="map" style="width:300;height:300px;position:relative;">



</div>
<v-btn @click="showPlace()">asdf</v-btn>    
</template>

<script>
export default {
  name: "KakaoMap",
  components:{
  },
  data() {
    return {
      markers: [],
      keyword : "",
      infowindow : null,
      mapContainer : null,
      mapOption : null,
      map : null,
      ps : null,


      data :[],
      list: [
        { name: "John", id: 0 },
        { name: "Joao", id: 1 },
        { name: "Jean", id: 2 }
      ],
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=16bfc6e61d7d17a10783625bfc8f3239&libraries=services";
      document.head.appendChild(script);
    }
  },
  methods: {

    initMap() {
      this.mapContainer = document.getElementById("map");
      this.mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 5,
      }
      this.map = new kakao.maps.Map(this.mapContainer, this.mapOption); 
      this.ps = new window.kakao.maps.services.Places();
      this.infowindow = new kakao.maps.InfoWindow({zIndex:1});
    },

    searchPlaces(){
      var keyword = document.getElementById('keyword').value;

      if (!keyword.replace(/^\s+|\s+$/g, '')) {
        alert('키워드를 입력해주세요!');
        return false;
      }
      this.ps.keywordSearch( keyword, (data, status, pgn) =>{ 
      this.data = data
      this.status = status
      this.pgn =  pgn
      })

    },
  showPlace(){
    var moveLatLon = new kakao.maps.LatLng(33.450701, 126.570667);
    this.map.setCenter(moveLatLon);


    var content = '<div class="overlaybox">' +
    '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
    '    <span class="title">구의야구공원</span>' +
    '  </a>' +
    '</div>';

    var customOverlay = new kakao.maps.CustomOverlay({
    map: this.map,
    position: moveLatLon,
    content: content,
    yAnchor: 1 
  });

  customOverlay.setMap(this.map);







    // var infowindow = new kakao.maps.InfoWindow({
    // content : content, 
    // })

    // kakao.maps.event.addListener(infowindow, 'click', () => {
    //     //마커 position을 출력합니다.
    //     console.log("works");
    // });







  },


  fdfd(){
      console.log("works")
    }
  },
};
</script>
<style scoped>

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
