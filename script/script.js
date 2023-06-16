console.log('JS OK', Vue)


// Destructuring createApp
const { createApp } = Vue


// Initialize vue app
const app = createApp({
    data: () => {
        return {
            name: '',
            h1Text: 'Questo testo arriva da js tramite vue',
            immagine: 'https://media.istockphoto.com/id/1201041782/photo/alpaca.jpg?s=612x612&w=0&k=20&c=aHFfLZMuyEyyiJux4OghXfdcc40Oa6L7_cE0D7zvbtY='
        }
    },

    methods: {
        nameAlert() {
            alert(`Il tuo nome è ${this.name}`)
        }
    }
});


// Insert vue inside HTML
app.mount('#root');
