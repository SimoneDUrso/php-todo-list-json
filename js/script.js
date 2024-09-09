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
            const newTodo = {
                id: this.emptyTodoArray.length + 1,
                name: this.newTodoName,
                done: false
            }

            axios.post(this.url, newTodo).then((response) => {
                console.log(response.data);
                this.emptyTodoArray.push(newTodo);
                this.newTodoName = '';
            })
        }
    },

    mounted() {
        this.getTodoList();
    },
}).mount('#app');