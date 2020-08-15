import React from 'react';
import {ListItem, ListItemText} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({todo, toggleTodo}) => {

    const useStyles = makeStyles((theme) => ({
        textField: {
            margin: theme.spacing(1),
        },
        button: {
            margin: theme.spacing(1),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
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
    const [checked, setChecked] = React.useState([0]);

    const stored: any = JSON.parse(localStorage.getItem('todos') || "");

    stored.filter((storedTodo: any) => storedTodo.complete).map((storedTodo: any) => (
        checked.push(storedTodo.key)
    ))

    const handleToggle = (value: number) => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        toggleTodo(todo);
        setChecked(newChecked);
    };

    return (
        <ListItem key={todo.key} role={undefined} dense button className={classes.nested}
                  onClick={() => handleToggle(todo.key)}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={checked.indexOf(todo.key) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{'aria-labelledby': todo.text}}
                />
            </ListItemIcon>
            <ListItemText primary={todo.text}/>
        </ListItem>
    );
};