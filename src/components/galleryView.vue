<template>
    <div>
        <div>
             <div class="image--views">
                <section class="gallery">
                    <div class="gallery__item">
                        <input type="radio" id="img-1" checked name="gallery" class="gallery__selector"/>
                        <img class="gallery__img" :src="url+'/services/photos/'+ dataObj.app_icon" alt=""/>
                        <label for="img-1" class="gallery__thumb"><img :src="url+'/services/photos/'+ dataObj.app_icon"  alt=""/></label>
                    </div>
                    <div class="gallery__item">
                        <input type="radio" id="img-2" name="gallery" class="gallery__selector"/>
                        <img class="gallery__img" :src="url+'/services/photos/'+ dataObj.photo_one" alt=""/>
                        <label for="img-2" class="gallery__thumb"><img :src="url+'/services/photos/'+ dataObj.photo_one" alt=""/></label>
                    </div>
                    <div class="gallery__item">
                        <input type="radio" id="img-3" name="gallery" class="gallery__selector"/>
                        <img class="gallery__img" :src="url+'/services/photos/'+ dataObj.photo_two" alt=""/>
                        <label for="img-3" class="gallery__thumb"><img :src="url+'/services/photos/'+ dataObj.photo_two" alt=""/></label>
                    </div>
                    <div class="gallery__item">
                        <input type="radio" id="img-4" name="gallery" class="gallery__selector"/>
                        <img class="gallery__img" :src="url+'/services/photos/'+ dataObj.photo_three" alt=""/>
                        <label for="img-4" class="gallery__thumb"><img :src="url+'/services/photos/'+ dataObj.photo_three" alt=""/></label>
                    </div>
                    <div class="gallery__item">
                        <input type="radio" id="img-5" name="gallery" class="gallery__selector"/>
                        <img class="gallery__img" :src="url+'/services/photos/'+ dataObj.photo_four" alt=""/>
                        <label for="img-5" class="gallery__thumb"><img :src="url+'/services/photos/'+ dataObj.photo_four" alt=""/></label>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   props:['dataObj'] ,
   data(){
       return {
            url: 'https://api.risingwork.com/',
       }
   }
}
</script>