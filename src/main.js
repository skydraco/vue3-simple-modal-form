import { createApp } from 'vue';
import { createStore } from 'vuex';
import SimpleModalStore from './storage';
import App from './App.vue';

const store = createStore({
    modules: {
        modal: SimpleModalStore
    }
});

createApp(App).use(store).mount('#app');