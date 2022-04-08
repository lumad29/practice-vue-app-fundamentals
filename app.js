// import App from './App.vue'
const app = Vue.createApp({
    data() {
        return {
            count: 0,
            name: '',
            nameAgain: '',
            lastName: '',
            isButtonDisabled: false,
        }
    },
    computed: {
        nameAndLastName() {
            return  this.name + ' ' + this.lastName
        },
        fullName() {
            if (this.nameAgain === '') {
                return ''
            } else {
                return this.nameAgain + ' ' +  'Aloi'
            }
        },
        alertMessage() {
            !this.name || !this.lastName ? false : true
        }
    },
    methods: {
        alert() {
            alert('hi')
        },
        add(num) {
            if (this.count < 10) {
                this.count += num
            }
        },
        remove(num) {
            if (this.count > 0) {
                this.count-= num
            }
        },
        reset() {
            this.count = 0
        },
        resetName() {
            this.name = '',
            this.lastName = ''
        },
        watch: {
            data() {
                
            }
        },
    },
    // render: (h) => h(App),
});

app.mount('#app');
