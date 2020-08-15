import React, {useState} from 'react';
import {TodoList} from './TodoList';
import {AddTodoForm} from './AddTodoForm';
import {AddTodoListForm} from './AddTodoListForm';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import {makeStyles} from '@material-ui/core/styles';

const initialTodos: Todo[] = JSON.parse(localStorage.getItem('todos') ?? '[]');
const initialLists: TodoList[] = JSON.parse(localStorage.getItem('todoLists') ?? '[]');

function App() {
    const [todoLists, setTodoLists] = useState(initialLists);
    const [todos, setTodos] = useState(initialTodos);

    const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
        const newTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete,
                };
            }
            return todo;
        });


        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    const addTodo: AddTodo = (text: string, project: number) => {
        const newTodo = {key: todos.length + 1, text, project, complete: false};
        setTodos([...todos, newTodo]);
        localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
    };

    const addTodoList: AddTodoList = (text: string) => {
        const newTodoList = {key: todoLists.length + 1, text};
        setTodoLists([...todoLists, newTodoList]);
        localStorage.setItem('todoLists', JSON.stringify([...todoLists, newTodoList]));
    };

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }));

    const classes = useStyles();

    return (
        <>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        ToDos
                    </ListSubheader>
                }
                className={classes.root}
            >
                {todoLists.map(list => (
                    <TodoList key={list.key} project={list.key} title={list.text} todos={todos}
                              toggleTodo={toggleTodo}/>
                ))}
            </List>
            <AddTodoForm addTodo={addTodo} todoLists={todoLists}/>
            <AddTodoListForm addTodoList={addTodoList}/>
        </>
    );
}

export default App;