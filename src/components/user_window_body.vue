<script>

export default {
  name: 'UserWindowBody',
  props: {
    name: {
      type: String,
      default: 'jhon doe doevich'
    },
    age: {
      type: Number,
      default: 0
    },
    nationality: {
      type: String,
      default: 'none'

    },
    sex: {
      type: String,
      default: 'none'

    },
    imgUrl: {
      type: String,
      default: ''
    },
    is_edit: {
      type: Boolean,
      default: true
    }
 },
 methods: {

    openimg(event) {
        var pic = document.getElementById('image')
        let imgurl = URL.createObjectURL(event.target.files[0]);
        this.imgSrc = imgurl;
        }

 },
 data() {
    return {
      imgSrc: this.imgUrl 
    };
  }
    
      


}

</script>


<template >

            <div class="window-body" style="display: flex; flex-direction: row; gap: 2%; " >

              <div style="display: flex; flex-direction: column; gap: 2%;">
                <img :src="imgSrc" alt="" id="image">
                <input v-if="is_edit" type="file" accept="image/*" @change="openimg">

              </div>
                
                

                <div>
                    <p style="font-size: large;">{{ name }}</p>
                    <p>age - {{ age }}</p>
                    <p>sex - {{ sex }}</p>
                    <p>nationality - {{ nationality }}</p>

                </div>

            </div>

</template>


<style scoped>

img {
    width: 250px;
    height: 250px;
    border-radius: 4px;
    padding: 10px;
    border: 1px solid #ddd
}

p {
    font-size: medium;
}

</style>