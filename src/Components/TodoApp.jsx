import React from 'react';
import useLocalStorageState from '../hooks/useLocalStorageState'
import useTodoState from '../hooks/useTodoState'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
// import uuid from 'uuid/v4';
function TodoApp(){
    const initialTodos = [{id: 1, task: "Pet a Monkey", completed: false}]
    const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos)

    // const [mood, setMood] = useLocalStorageState("mood", "happy")

    return(
        <Paper 
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
        >
            <AppBar 
                color="primary" 
                position="static" 
                style={{ hegiht: "64px"}} 
            >
                <Toolbar>
                    <Typography color='inherit'>
                        TODOS WITH HOOKS
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{ marginTop: "1rem"}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo}/>
                    <TodoList 
                        todos={todos} 
                        removeTodo={removeTodo} 
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp