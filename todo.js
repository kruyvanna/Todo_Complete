function TodoController($scope){
    $scope.todos = [
        {
            text: 'Learn AngularJS'
        }
    ];
    
    $scope.addTodo = function(newTodo){
        $scope.todos.push({
            text: newTodo
        });
        
        $scope.newTodo = '';
    }
    
    $scope.removeTodo = function(index){
        $scope.todos.splice(index, 1);
    }
}