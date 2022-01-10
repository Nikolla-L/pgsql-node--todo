import React, { Fragment, useState } from 'react'

const EditTodo = ({todo}) => {
    const [description, setDescription] = useState(todo?.description)

    const updateDescription = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            })

            window.location = '/'
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Fragment>
            <button type="button" className="btn btn-info" data-toggle="modal" data-target={`#modal${todo?.todo_id}`}>
                Edit
            </button>

            <div className="modal fade" id={`modal${todo?.todo_id}`}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Todo</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <input
                            type="text"
                            className="form-control"
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button
                            type="button"
                            className="btn btn-warning"
                            onClick={e => updateDescription(e)}
                            data-dismiss="modal"
                        >
                            Save
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditTodo
