

<script>
export default {
  name: 'Window',
  props: {
    title: {
      type: String,
      default: 'Window Title'
    }
  },
  methods:{
    minimize(){
      this.is_showed = !this.is_showed;
    }
  },
  data(){
    return {
      is_showed: true
    }
  }
}


</script>

<template >

    <div class="window" >

        <div class="title-bar">
            <div class="title-bar-text">{{ title }}</div>
            <div class="title-bar-controls">
                <button aria-label="Minimize" @click="minimize"></button>
            </div>
        </div>

        <div v-show="is_showed">
          <slot>
          
          </slot>
        </div>




    </div>

</template>

<style scoped>
</style>