import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import {makeStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import InputAdornment from "@material-ui/core/InputAdornment";
import {Assignment} from "@material-ui/icons";

interface Props {
    addTodo: AddTodo;
    todoLists: TodoList[];
}

export const AddTodoForm: React.FC<Props> = ({addTodo, todoLists}) => {
    const [text, setText] = useState('');
    const [project, setProject] = useState('');

    const useStyles = makeStyles((theme) => ({
        textField: {
            margin: theme.spacing(1),
        },
        button: {
            margin: theme.spacing(2),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));

    const classes = useStyles();

    const addTodoItem = (e: any) => {
        e.preventDefault();
        addTodo(text, parseInt(project));
        setText('');
    }

    const handleChange = (e: any) => {
        setProject(e.target.value);
    }

    return (
        <form>
            <TextField
                variant="filled"
                className={classes.formControl}
                required
                id={"task"}
                label={"Task"}
                value={text}
                onChange={e => {
                    setText(e.target.value);
                }}
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                    <Assignment />
                    </InputAdornment>
                    ),
                }
                }/>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="project">Project</InputLabel>
                <Select
                    native
                    value={project}
                    onChange={handleChange}
                    inputProps={{
                        name: 'project',
                        id: 'project',
                    }}
                >
                    {todoLists.map(list => (
                        <option key={list.key} value={list.key}>{list.text}</option>
                    ))}

                </Select>
            </FormControl>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<AddIcon/>}
                type="submit"
                size="large"
                disabled={ (!parseInt(project) || !text.length) }
                onClick={addTodoItem}
            >
                Add Todo
            </Button>
        </form>
    );
};
