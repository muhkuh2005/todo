import React from 'react';
import {TodoListItem} from './TodoListItem';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {ExpandLess, ExpandMore} from '@material-ui/icons';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';

interface Props {
    project: number;
    title: string;
    todos: Todo[];
    toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({project, title, todos, toggleTodo}) => {
    const listTodos = todos.filter(item => item.project === project);

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemText primary={title}/>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        listTodos.map(todo => (
                            <TodoListItem key={todo.key} todo={todo} toggleTodo={toggleTodo}/>
                        ))
                    }
                </List>
            </Collapse>
        </>
    );
};