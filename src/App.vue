<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  <HomeIndex></HomeIndex>-->
    <equipment-price-calculator></equipment-price-calculator>

</template>

<script>
// import HomeIndex from "@/pages/HomeIndex.vue";
import EquipmentPriceCalculator from "@/pages/equipment-price-calculator.vue";

export default {
  name: 'App',
  components: {
    EquipmentPriceCalculator
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
