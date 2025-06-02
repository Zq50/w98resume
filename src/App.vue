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
        };
    },
};

</script>

<template>
    

    <div style="display: flex; flex-direction: column;">
        
        
            <window title="User Data">
                <userWindowBody name="pyak nikita aleksandrovich" age="21" sex="male" nationality="asian" :is_edit="true" />
            </window>
            
            <window title="User skills" >
                <list :items_prop = "userSkills" :is_edit="true"></list>
            </window>

            <window title="contacts" >
                <list :items_prop = "phone_numbers" :is_edit="false"></list>
            </window>

            <window title="Prophile">

                <plain_text_window :is_edit="true"></plain_text_window>

            </window>
            

    </div>

</template>

<style scoped>

</style>
