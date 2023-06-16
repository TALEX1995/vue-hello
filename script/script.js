console.log('JS OK', Vue)


// Destructuring createApp
const { createApp } = Vue


// Initialize vue app
const app = createApp({
    data () {
        return {
            h1Text: 'Questo testo arriva da js tramite vue',
        }
    }
})


// Insert vue inside HTML
app.mount('#root');
