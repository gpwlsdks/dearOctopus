import { createApp } from 'vue'
import App from './App.vue'
import { useKakao } from 'vue3-kakao-maps/@utils';

useKakao('API key');
createApp(App).mount('#app')

