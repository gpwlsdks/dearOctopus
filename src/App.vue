<template>
  
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 날짜 표시 -->
  <article>
    <div>
      <h1> {{ date1.format('YYYY / MM / DD') }} </h1>
      <h4> {{ date1.format('dddd') }}</h4>
    </div>

    <!-- 첫번째 메인 이미지  -->
    <div class="img1">
      <img src="./assets/marrge2.jpg">
    </div>

    <!-- 첫번째 메인글 ( 결혼식 정보 )  -->
    <div class = "">
        <p> H 스퀘어 어쩌구저쩌구  </p>
    </div>

    <!-- 두번째 글 ( 초대문구 )  -->
    <div>
        <p> 우리가 이런이런이런 과정을 통해 결혼을 합니다 와서 축하해종</p>
    </div>
    <!-- 두번째 이미지   -->
     <div class="img1">
        <img src="./assets/marrge2.jpg">
    </div>
  </article>

</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue';

import dayjs from "dayjs";

const date1 = dayjs("2024-11-02", "YYYY-MM-DD"); // 결혼날짜
const date2 = dayjs();                           // 현재시각


date1.format("YYYY-MM-DD HH:mm:ss"); 
date2.format("YYYY-MM-DD HH:mm:ss"); 



</script>


<style>

@font-face {
    font-family: 'HancomMalangMalang-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2406-1@1.0/HancomMalangMalang-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}


#app {
  font-family: 'HancomMalangMalang-Regular';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

article {padding: 52px 3% 0;}
article .block {padding: 20px; min-height: 500px;}
article .block p {line-height: 22px; color: #fff; font-size: 16px; font-weight: 600;}
article .block:nth-child(2n+1) {background: #999;}
article .block:nth-child(2n) {background: #222;}

</style>
