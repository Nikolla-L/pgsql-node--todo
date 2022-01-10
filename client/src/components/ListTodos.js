import React, { Fragment, useEffect, useState } from 'react'
import EditTodo from './EditTodo'

const ListTodos = () => {
    const [todos, setTodos] = useState([])
    

    const deleteTodo = async id => {
        try {
            const delTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: 'DELETE'
            })

            setTodos(todos.filter(todo => todo.todo_id != id))
        } catch (error) {
            console.log(error.message)
        }
    }

    const getTodos = async () => {
        try {
            const response = await fetch('http://localhost:5000/todos');
            const jsonData = await response.json();
            
            setTodos(jsonData);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getTodos();
    }, [])


    return <Fragment>
        <table className="table mt-5 text-center">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Description</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos?.map(todo => (
                        <tr key={todo?.todo_id}>
                            <th scope="row">{todo?.todo_id}</th>
                            <td>{todo?.description}</td>
                            <td>
                                <EditTodo todo={todo} />
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={()=>deleteTodo(todo?.todo_id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </Fragment>
}

export default ListTodos
