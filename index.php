<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <link rel="stylesheet" href="./css/style.css">
    <title>ToDo list</title>
</head>

<body>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center my-4">ToDo List</h1>

                    <!-- Form per aggiungere nuovi Todo -->
                    <form @submit.prevent="addTodo">
                        <div class="mb-3">
                            <input type="text" v-model="newTodoName" placeholder="Inserisci un nuovo ToDo" class="form-control" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Aggiungi ToDo</button>
                    </form>

                    <!-- Lista di Todo -->
                    <ul class="list-group mt-4">
                        <li v-for="todo in emptyTodoArray" :key="todo.id" class="list-group-item d-flex justify-content-between align-items-center">
                            {{ todo.name }}
                            <span :class="{'text-success': todo.done, 'text-danger': !todo.done}">
                                {{ todo.done ? 'Completato' : 'Da fare' }}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <script src="./js/script.js" type="text/javascript"></script>
</body>

</html>