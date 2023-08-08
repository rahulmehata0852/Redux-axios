import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from "yup"
import { getAllTodos, handleAddTodo, handleDeleteTodo, handleEditTodos } from '../redux/action/action'

const Dasboard = () => {

    const { todos } = useSelector(state => state.store)
    const callAction = useDispatch()
    const [selected, setselected] = useState()

    const fromik = useFormik({
        initialValues: {
            name: "React",
            desc: "React is fun",
            hero: "https://getbootstrap.com/docs/5.3/assets/img/parcel.png"
        },
        validationSchema: yup.object({
            name: yup.string().required().min(2),
            desc: yup.string().required().min(2),
            hero: yup.string().required().min(2)
        }),
        onSubmit: (values, { resetForm }) => {
            callAction(handleAddTodo(values))
            callAction(getAllTodos())
        }
    })



    useEffect(() => {
        callAction(getAllTodos())
    }, [])



    const handleEditChange = e => {
        const { name, value } = e.target
        setselected({ ...selected, [name]: value })
    }



    return <>

        <div className="container mt-5">
            <div className="text-end mt-5 me-4">
                <button data-bs-toggle="modal" data-bs-target="#AddModal" type="button" className="btn btn-primary">Add Todos</button>
            </div>
        </div>






        <div className="modal fade" id="AddModal" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <pre>{JSON.stringify(fromik.values)}</pre>
                    <pre>{JSON.stringify(fromik.errors)}</pre>

                    <div className="modal-body">
                        <form onSubmit={fromik.handleSubmit}>

                            <div>
                                <input {...fromik.getFieldProps("name")} className="form-control" type="text" name="name" /><br />
                            </div>
                            <div>

                                <input {...fromik.getFieldProps("desc")} className="form-control" type="text" name="desc" /><br />
                            </div>
                            <div>

                                <input {...fromik.getFieldProps("hero")} className="form-control" type="text" name="hero" /><br />
                            </div>

                            <button data-bs-dismiss="modal" type="submit" className="btn btn-primary">Add Now</button>

                        </form>
                    </div>

                </div>
            </div>
        </div>





        <table className="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Desc</th>
                    <th scope="col">IMG</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map((item, i) =>
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.desc}</td>
                            <td>
                                <img src={item.hero} alt="hero hu beta itna jladi nhi harunga " />
                            </td>
                            <td>
                                <button onClick={e => setselected(item)} data-bs-toggle="modal" data-bs-target="#editModal" type="button" className="btn btn-warning mx-2">Edit</button>
                                <button onClick={e => (callAction(handleDeleteTodo(item.id)), callAction(getAllTodos()))} type="button" className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>



        <div class="modal fade" id="editModal" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <input onChange={handleEditChange} name='name' value={selected && selected.name} className='form-control' type="text" /><br />
                        <input onChange={handleEditChange} name='desc' value={selected && selected.desc} className='form-control' type="text" /><br />
                        <input onChange={handleEditChange} name='hero' value={selected && selected.hero} className='form-control' type="text" /><br />


                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button data-bs-dismiss="modal" onClick={e => (callAction(handleEditTodos(selected)), callAction(getAllTodos()))} type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>





    </>
}

export default Dasboard