<template>
    <Wellcome :myImage="img" />
    
    <h2>"Шустрый Экспресс: доставляем мгновенье в Ваши руки!"</h2>
  </template>
  
  <script>
  import Wellcome from '../Wellcome.vue';
  import wellcomeImg from "@/assets/w.png"
  
  export default {
    components: {
      Wellcome
    },
    data() {
      return {
        img: wellcomeImg
      }
    }
  }
  </script>
  
  