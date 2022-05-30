<template>
    <div>
        <div>
             <div class="image--views">
                <section class="gallery">
                    <div class="gallery__item">
                        <input type="radio" id="img-6" checked name="gallery" class="gallery__selector"/>
                        <img class="gallery__img" :src="url+'services/photos/'+ dataObj2.app_icon" alt=""/>
                        <label for="img-6" class="gallery__thumb"><img :src="url+'services/photos/'+ dataObj2.app_icon"  alt=""/></label>
                    </div>
                    <div class="gallery__item">
                        <input type="radio" id="img-7" name="gallery" class="gallery__selector"/>
                        <img class="gallery__img" :src="url+'services/photos/'+ dataObj2.photo_one" alt=""/>
                        <label for="img-7" class="gallery__thumb"><img :src="url+'services/photos/'+ dataObj2.photo_one" alt=""/></label>
                    </div>
                    <div class="gallery__item">
                        <input type="radio" id="img-8" name="gallery" class="gallery__selector"/>
                        <img class="gallery__img" :src="url+'services/photos/'+ dataObj2.photo_two" alt=""/>
                        <label for="img-8" class="gallery__thumb"><img :src="url+'services/photos/'+ dataObj2.photo_two" alt=""/></label>
                    </div>
                    <div class="gallery__item">
                        <input type="radio" id="img-9" name="gallery" class="gallery__selector"/>
                        <img class="gallery__img" :src="url+'services/photos/'+ dataObj2.photo_three" alt=""/>
                        <label for="img-9" class="gallery__thumb"><img :src="url+'services/photos/'+ dataObj2.photo_three" alt=""/></label>
                    </div>
                    <div class="gallery__item">
                        <input type="radio" id="img-10" name="gallery" class="gallery__selector"/>
                        <img class="gallery__img" :src="url+'services/photos/'+ dataObj2.photo_four" alt=""/>
                        <label for="img-10" class="gallery__thumb"><img :src="url+'services/photos/'+ dataObj2.photo_four" alt=""/></label>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   props:['dataObj2'] ,
   data(){
       return {
            url: 'https://api.risingwork.com/',
       }
   }
}
</script>