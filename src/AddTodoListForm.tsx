import React, {useState} from 'react';
import {Button} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import {List} from "@material-ui/icons";

interface Props {
    addTodoList: AddTodoList;
}

export const AddTodoListForm: React.FC<Props> = ({addTodoList}) => {
    const [text, setText] = useState('');

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

    const addList = (e: any) => {
        e.preventDefault();
        addTodoList(text);
        setText('');
    }

    const handleChange = (e: any) => {
        setText(e.target.value);
    }

    return (
        <form>
            <TextField
                variant="filled"
                className={classes.formControl}
                required
                id={"list"}
                label={"Name"}
                value={text}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <List/>
                        </InputAdornment>
                    ),
                }}
            />
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<AddIcon/>}
                type="submit"
                size="large"
                onClick={addList}
            >
                Add List
            </Button>
        </form>
    );
}
