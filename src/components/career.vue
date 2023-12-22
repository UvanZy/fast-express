<template>
    <h1>Карьера у нас</h1>
    <div class="row">
    <div v-for="(image, index) in images" :key="index" class="col-md-4 img-container">
      <img 
        :src="image.src" 
        class="img-fluid" 
        :alt="'Изображение ' + (index + 1)"
        @mouseenter="hoverIndex = index"
        @mouseleave="hoverIndex = null"
      >
      <p v-if="hoverIndex === index" class="image-text">{{ image.text }}</p>
    </div>
    <hr class="border border-primary border-3 opacity-75 mt-5">

    <h2>Ниже список вакансий</h2>
    
    <ul>
      <li v-for="(vacancy, index) in vacancies" :key="index" @click="toggleDescription(index)">
        <h3>{{ vacancy.title }}</h3>
        <p v-if="showDescriptionIndex === index">{{ vacancy.description }}</p>
        <ul v-if="showDescriptionIndex === index">
          <li v-for="(item, itemIndex) in vacancy.list" :key="itemIndex">{{ item }}</li>
        </ul>
      </li>
    </ul>
  
  </div>
  </template>
  
  <script>
  import image1 from "@/assets/img/career/image1.png";
  import image2 from "@/assets/img/career/image2.png";
  import image3 from "@/assets/img/career/image3.png";
  import image4 from "@/assets/img/career/image4.png";
  import image5 from "@/assets/img/career/image5.png";
  import image6 from "@/assets/img/career/image6.png";
  
  export default {
    data() {
  return {
    images: [
        { src: image1, text: 'Уверенный вид за рулём' },
        { src: image2, text: 'Большой оклад' },
        { src: image3, text: 'Компенсация питания в пути(алкоголь)' },
        { src: image4, text: 'Возможности для карьерного роста(увальнения)' },
        { src: image5, text: 'Прямая связь с начальством' },
        { src: image6, text: 'Бесплатный бар на стоянках(2 стопки)' },
      ],
    hoverIndex: null,
    vacancies: [
        { 
          title: 'Водитель большой машинки', 
          description: 'У нас в автопарке самые новые машины(20 лет не срок). Своевременная оплата(Пошлин) и отсутствие простоев(Некогда даже в туалет сходить) Ниже предствлены требования',
          list: [
            'Наличие категоpии CE(Желательно)',
            'Высшее или церковноприходское образование',
            'Умении определять давление в шинах на глаз',
            'Слив воды с сисемы охлаждения каждый вечер',
            'Опыт работы на поезде',
            'Готовность ехать без остановки 25часов в сутки',
            'Знать все песни про дальнобойщиков наизусть и уметь их петь',
            'Разгрузка груза(На песок и гравий лопаты не предоставляем)',
            'Земонтировать фуру, используя только инструменты из набора Лего',
            'Хорошо развитая интуицая(Использование навигатора во время рейса запрещено !)',
            'Уметь поднять прицеп голыми руками',
            'Презрение к средствам индивидуальной гигиены'
          ]
        },
        { 
          title: 'Junior web developer', 
          description: 'Мы ищем человека, который готов работать в команде, умеет оценивать свои возможности и создавать проекты, которые не стыдно показать людям и остальным . Стек :HTML, CSS, JavaScript, PHP, MySQL, MongoDB, jQuery, ReactJS, NodeJS,C++, STL, Boost, Qt, WxWidgets, wxPython, PyQt. Ниже предствлены требования',
          list: [
            '20 лет опыта разработки на ассемблере',
            'Уметь включать кампутар',
            'Многозадачность уровня Юлитй Цезарь',
            'Гуру в области интернет-маркетинга',
            'Возможность работать 24 часа в сутки 7 дней в неделю без перерыва',
            'Уметь разработать веб-сайт, который будет работать на любом устройстве, включая игровые консоли и микроволновые печи',
            'Знать все алгоритмы и структуры данных наизусть',
            'Опыт разработки веб приложениц в Microsoft Paint',
            'Знание основ астрологии и умение предсказывать будущие тренды веб-дизайна, основываясь на положении звезд и планет'
          ]
        }],
      showDescriptionIndex: null
  };
},
methods: {
    toggleDescription(index) {
      if (this.showDescriptionIndex === index) {
        this.showDescriptionIndex = null; // Скрыть описание, если оно уже показано
      } else {
        this.showDescriptionIndex = index; // Показать описание вакансии
      }
    }
  }
  };
  </script>
  
  
  <style scoped>
.img-container {
  position: relative;
  display: inline-block;
}

.image-text {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 14px;
  text-align: center;
}
</style>
  
  


