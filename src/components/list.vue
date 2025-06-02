<script>
export default {
    name: 'List',
    props: {
        items_prop: {
            type: Array,
            default: () => []
        },
        is_edit: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        addItem(item) {
            if (!item) {
                alert('Please enter an item');
                return;
            }
            this.items.push(item);
        },
        DltItem(index){
            this.items.splice(index, 1);
        }
    },
    data() {
        return {
            newItem: '',
            items: []
        };
    },
    mounted() {
        if (this.items_prop.length > 0) {
            this.items = this.items_prop;
        }
    }    
};


</script>


<template>

    <div class="window-body">

        <div style="display: grid; grid-template-columns: auto auto auto;">
            <li @dblclick="DltItem(index)" v-for="(item,index) in items" :key="index" style="font-size: large;">{{ item }}</li>
        </div>

        <div v-if="is_edit">
            <button @click="addItem(newItem)">add</button>
            <input type="text" v-model="newItem" placeholder="Enter new item" />
        </div>

    </div>

</template>