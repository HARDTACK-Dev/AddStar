<template>
  <div id="app">
    <div id="nav-bar">
      <router-link to="/"><img src="@/assets/logo.png" alt="LOGO"></router-link> 

      <router-link class="nav-button1" to="/" tag="button">추가하기</router-link>
      <router-link  class="nav-button2" to="/search" tag="button">검색</router-link>  
    </div>
    <router-view/>
  </div>
</template>

<style>



/* nav section */
#nav-bar{
  background-color: rgb(143, 170, 220);

  /* 로고와 버튼을 조금 내려줌 */
  padding-top: 10px;

  width: 100%;
  height: 70px;
  
}

/* nav logo image */
img{  
  width: 180px;
}

/* nav button 1 */
.nav-button1{
  font-family: 'Jua', sans-serif;
  font-size: 15px;
  background-color: rgb(157, 195, 230);
  text-decoration: none;
  border: none;

  color: white;

  width: 100px;
  height: 55px;
  border-radius: 10px;

  

  position: absolute;

  /* 버튼 호버했을때 크기 애니메이션을 위해 */
  transition: ease-in-out 0.1s;
}

.nav-button1.router-link-exact-active{
  background-color: rgb(46, 117, 181);
}

.nav-button1:hover{
  cursor: pointer;
  transform: scale(1.1);
}

/* -------------------------------------- */

/* nav button 2*/
.nav-button2{
  /* 위치조정 */
  margin-left: 110px;

  font-family: 'Jua', sans-serif;
  font-size: 15px;
  background-color: rgb(157, 195, 230);
  text-decoration: none;
  border: none;

  color: white;

  width: 100px;
  height: 55px;
  border-radius: 10px;

  

  position: absolute;

  /* 버튼 호버했을때 크기 애니메이션을 위해 */
  transition: ease-in-out 0.1s;
}

.nav-button2.router-link-exact-active{
  background-color: rgb(46, 117, 181);
}

.nav-button2:hover{
  cursor: pointer;
  transform: scale(1.1);
}




</style>
