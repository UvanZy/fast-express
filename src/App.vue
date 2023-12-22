<template>

    <Header />

  <div class="container d-flex flex-column align-items-center">

    <router-view  />

  </div>
  <Footer />
  </template>




<script>
import Header from './Header.vue';
import Footer from './Footer.vue';


export default {
  components: {
    Header,
    Footer
    
  },

}
</script>




  <style>

  </style>
