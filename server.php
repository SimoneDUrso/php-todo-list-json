<?php
$todoList = file_get_contents('./data/todo.json');
$todolist = json_decode($todoList);
var_dump($todolist);
