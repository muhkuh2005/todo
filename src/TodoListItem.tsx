import React from 'react';
import {ListItem, ListItemText} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import {usePersistedState} from "./hooks/usePersistedState";

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
    const [inputChecked, setInputChecked] = usePersistedState("checkbox_" + todo.key, false);

    return (
        <ListItem key={todo.key} role={undefined} dense button className={classes.nested}
                  onClick={() => setInputChecked(!inputChecked)}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={inputChecked}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{'aria-labelledby': todo.text}}
                />
            </ListItemIcon>
            <ListItemText primary={todo.text}/>
        </ListItem>
    );
};