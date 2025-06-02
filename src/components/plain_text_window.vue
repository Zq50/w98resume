
<script>
export default {
    name: 'PlainTextWindow',
    props: {
        title: {
            is_edit: {
                type: Boolean,
                default: true
            },
        }
    },
    data() {
        return {
            paragraphs_count: 0,
        };
    },
    methods: {
        addParagraph() {
            this.paragraphs_count++;
        },
    },
};

</script>


<template>
    <div class="window_body">
        <div style="display: flex; flex-direction: column;">
            
            <textarea name="" id="" v-for="paragraph in paragraphs_count" :key="paragraph" style="margin-bottom: 10px;"></textarea>


            <div >
                <button  @click="addParagraph">Add New paragraph</button>
            </div>

        </div>


    </div>
</template>

<style scoped>
textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}
</style>