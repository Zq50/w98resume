<script >
import window from './components/window.vue';
import userWindowBody from './components/user_window_body.vue';
import list from './components/list.vue';
import plain_text_window from './components/plain_text_window.vue';

export default {
    name: 'App',
    components: {
        window,
        userWindowBody,
        list,
        plain_text_window

        
    },
    data() {
        return {
            userSkills: ['JavaScript', 'Vue.js', 'HTML', 'CSS'],
            phone_numbers: ['8800-555-35-35', '8-800-555-35-36', '8-800-555-35-37'],
            languages: ['English', 'Spanish', 'French'],
            editMode: false,
            buttonText: 'Edit',
        };
    },
    methods: {
        toggleEditMode() {
            this.editMode = !this.editMode;

            if (this.editMode) {
                this.buttonText = 'Save';
            } else {
                this.buttonText = 'Edit';
            }
        }


    }
};

</script>

<template>
    
    
    
    <div class="container" >
        
        
        <window title="User Data" class="item-b">
            <userWindowBody name="jhon doe" age="18" sex="male" nationality="american" :is_edit="editMode" />
        </window>
        
        
        
        <window title="Profile" class="item-c">
            <plain_text_window :is_edit="editMode"></plain_text_window>    
        </window>
        
        
        <div class="item-a">
            <window title="User skills" >
                <list :items_prop = "userSkills" :is_edit="editMode"></list>
            </window>
            
            <window title="contacts" >
                <list :items_prop = "phone_numbers" :is_edit="editMode"></list>
            </window>
            
            <window title="languages">
                <list :items_prop = "languages" :is_edit="editMode"></list>
            </window>
        </div>


        
        
    </div>

    <button @click="toggleEditMode">{{ buttonText }}</button>
    
</template>

<style scoped>

.item-a {
  grid-area: list;
}
.item-b {
  grid-area: user;
}
.item-c {
  grid-area: profile;
}


.container {
  display: grid;
  grid-template-rows: auto;
  grid-template-areas: 
    "user profile profile profile"
    "user profile profile profile"
    "list profile profile profile";
  gap: 5px;  
}

</style>
