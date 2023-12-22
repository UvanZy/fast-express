<script setup>

</script>

<template>
 <nav class="navbar navbar-expand">
    <ul class="navbar-nav w-100">
      <li class="nav-item flex-fill text-center">
        <a class="nav-link" href="/fast-express">Услуги доставки </a>
      </li>

      <li class="nav-item flex-fill text-center">
        <router-link class="nav-link" to="fast-express/career">Вакансии</router-link>
      </li>
      <li class="nav-item flex-fill text-center">
        <router-link class="nav-link" to="fast-express/about">О нас</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
    .navbar {
      background: none;
    }

    .navbar .nav-link {
      color: rgb(1.6%,51%,50.2%);
      padding: 10px;
    }

    .navbar .nav-link:hover {
      background-color: #bbb;
      color: #fff;
    }
</style>
