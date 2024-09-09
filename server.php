<?php
$todoList = file_get_contents('./data/todo.json');
$todolist = json_decode($todoList);


header('Content-type: application/json');
echo json_encode($todolist);
