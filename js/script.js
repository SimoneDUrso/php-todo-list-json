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

            axios.post(this.url, newTodo, { headers: {'Content-Type': 'multipart/form-data'}}).then((response) => {
                this.emptyTodoArray.push(newTodo);
                this.newTodoName = '';
                console.log(this.emptyTodoArray);
            })
        }
    },

    mounted() {
        this.getTodoList();
    },
}).mount('#app');