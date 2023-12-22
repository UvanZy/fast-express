<template>

    <div class="row">
<div class="col-6">
  <h3>Добро пожаловать в ТК Экспресс-Улет(Шустрый Экспресс) - инновационную компанию по доставке грузов. Мы предлагаем уникальные возможности доставки по всей России и даже в Солнечной системе с нашими кибер фурами. Наша цель - обеспечить быструю, эффективную и устойчивую доставку грузов, превосходя ожидания клиентов.</h3>
 <!----- <button type="button" class="main_btn">Расcчитать Доставку</button>-->
</div>
<div class="col-6">
  <img :src="myImage" alt="Welcome Image" class="responsive-image">
    <!--<img :src="$myImage" alt="Welcome Image" class="responsive-image">-->
  </div>
  </div>

</template>

<script>
export default {
  props: {
    myImage: {
      type: String,
      required: true
    }
  }
}
</script>




<style>
.responsive-image {
  max-width: 100%;
  height: auto;
  border-radius: 20px;
}
.main_btn{
  margin-left: 27%;
  margin-top: 20px;
background-color: rgb(230,215,135);
border-radius: 20px;
border: none;
padding: 10px;
color: cadetblue;
transition: all 500ms ease;

}
.main_btn:hover{
 color: rgb(0, 0, 0);
 box-shadow: inset 0 0 0 3px rgb(6,188,179);
 transition: all 500ms ease;
 background-color: #f5f4b2;
}
</style>

