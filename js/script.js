const { createApp } = Vue;

createApp({
    data() {
        return {
            url: 'server.php',
            emptyTodoArray: [],
        }
    },

    methods: {
        getTodoList(){
            axios.get(this.url).then((result) => {
                console.log(result.data)
                this.emptyTodoArray = result.data
            });
        }
    },

    mounted() {
        this.getTodoList();
    },
}).mount('#app');