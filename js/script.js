const { createApp } = Vue;

createApp({
    data() {
        return {
            url: 'server.php',
            todoList: [],
        }
    },

    methods: {
        getTodoList(){
            axios.get(this.url).then((result) => {
                console.log(result.data)
            });
        }
    },

    mounted() {
        this.getTodoList();
    },
}).mount('#app');