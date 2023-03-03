import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import 'aos/dist/aos.css'

const firebaseConfig = {
    apiKey: "AIzaSyAOS4SOeiPkFkSE-nfEplN0VU_wXQ6Bj6Y",
    authDomain: "somidam-1cacc.firebaseapp.com",
    projectId: "somidam-1cacc",
    storageBucket: "somidam-1cacc.appspot.com",
    messagingSenderId: "101690661602",
    appId: "1:101690661602:web:0cb28a0725520129825cbb",
    measurementId: "G-KHP9VW0GG4"
}

const firebase = initializeApp(firebaseConfig)
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(firebase)
const app = createApp(App)

app.use(router)

app.mount('#app')

