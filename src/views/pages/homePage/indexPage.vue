<template>
  <div>
    <div class="home--page">
      <div class="hero--section text-center ">
        <div class="container">
          <h1>World Class design at your service.</h1>
          <p class="w-50 mx-auto">
            We make it easy to work with professional, creative experts from
            around the world and build your brand through custom, memorable
            design.
          </p>
          <div class="input--field">
            <input type="search" name="" id="" />
            <input type="button" value="Get Started" />
          </div>
        </div>
      </div>

      <!-- Trusted By Section  -->
      <div class="trusted--by">
        <div class="container">
          <slider/>
        </div>
      </div>

      <!-- Feature Products  -->
      <div class="featured--products">
          <!-- <ul class="cards">
  <li>
    <a href="" class="card">
      <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Jessica Parker</h3>            
            <span class="card__status">1 hour ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>      
  </li>
  <li>
    <a href="" class="card">
      <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">kim Cattrall</h3>
            <span class="card__status">3 hours ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" class="card">
      <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
         
        </div>
      </div>
    </a>
  </li>
</ul> -->
      </div>
    </div>
  </div>
</template>

<script>
import slider from '@/components/static/sponsorSlider.vue'
export default {
    components:{
        slider 
    }
    
}
</script>
