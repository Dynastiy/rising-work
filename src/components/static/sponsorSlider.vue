<template>
  <div>
    <div class="body">
      <div class="slider">
        <div class="slide-track">
          <div class="slide"><img
                src="https://www.designsharkllc.com/images/sponsored-brands/sp-01.svg"
                alt=""
              /></div>
          <div class="slide"><img src="https://www.designsharkllc.com/images/sponsored-brands/sp-02.svg" alt=""></div>
          <div class="slide"><img src="https://www.designsharkllc.com/images/sponsored-brands/sp-03.svg" alt=""></div>
          <div class="slide"><img src="https://www.designsharkllc.com/images/sponsored-brands/sp-04.svg" alt=""></div>
          <div class="slide"><img src="https://www.designsharkllc.com/images/sponsored-brands/sp-05.svg" alt=""></div>
          <div class="slide"><img src="https://www.designsharkllc.com/images/sponsored-brands/sp-06.svg" alt=""></div>
           <div class="slide"><img
                src="https://www.designsharkllc.com/images/sponsored-brands/sp-01.svg"
                alt=""
              /></div>
          <div class="slide"><img src="https://www.designsharkllc.com/images/sponsored-brands/sp-02.svg" alt=""></div>
          <div class="slide"><img src="https://www.designsharkllc.com/images/sponsored-brands/sp-03.svg" alt=""></div>
          <div class="slide"><img src="https://www.designsharkllc.com/images/sponsored-brands/sp-04.svg" alt=""></div>
          <div class="slide"><img src="https://www.designsharkllc.com/images/sponsored-brands/sp-05.svg" alt=""></div>
          <div class="slide"><img src="https://www.designsharkllc.com/images/sponsored-brands/sp-06.svg" alt=""></div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.body {
  align-items: center;
  /* background: #E3E3E3; */
  display: flex;
  /* height: 100vh; */
  justify-content: center;
}

@-webkit-keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}
.slider {
  /* background: white; */
  /* border-radius: 30px; */
  /* box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125); */
  /* height: 100px; */
  margin: auto;
  overflow: hidden;
  position: relative;

  width: auto;
}
.slider::before,
.slider::after {
  /* background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%); */
  content: "";
  height: 80px;
  position: absolute;
  width: 200px;
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  -webkit-animation: scroll 40s linear infinite;
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
}
/* .slider .slide {
    height: 100px;
    width: 250px;
  } */
.slide-track {
  display: flex;
  align-items: center;
  gap: var(--spacer)
}
</style>
