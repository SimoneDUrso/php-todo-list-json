const { createApp } = Vue;

createApp({
    data() {
        return {
            url: 'server.php',
            emptyTodoArray: [],
            newTodoName: '',
        }
    },

    methods: {
        getTodoList(){
            axios.get(this.url).then((result) => {
                console.log(result.data)
                this.emptyTodoArray = result.data
            });
        },
        addTodo(){

        }
    },

    mounted() {
        this.getTodoList();
    },
}).mount('#app');