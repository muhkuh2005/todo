interface Todo {
    key: number;
    text: string;
    project: number;
    complete: boolean;
}

interface TodoList {
    key: number;
    text: string;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type DelTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string, project: number) => void;

type AddTodoList = (text: string) => void;