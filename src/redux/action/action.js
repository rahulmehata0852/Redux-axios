import axios from "axios"
import { ADD_TODO, DELETE_TODO, GET_TODO, UPDATE_TODO } from "../constant/constant"

export const handleAddTodo = arg => {
    return async (dispatch) => {
        const { data } = await axios.post("http://localhost:5000/todos", arg)
        dispatch({
            type: ADD_TODO, payload: data
        })
    }
}


export const getAllTodos = arg => {
    return async (dispatch) => {
        const { data } = await axios.get("http://localhost:5000/todos")
        dispatch({
            type: GET_TODO, payload: data
        })
    }
}


export const handleDeleteTodo = arg => {
    return async (dispatch) => {
        const { data } = await axios.delete(`http://localhost:5000/todos/${arg}`)
        dispatch({
            type: DELETE_TODO, payload: data
        })
    }
}

export const handleEditTodos = arg => {
    return async (dispatch) => {
        const { data } = await axios.patch(`http://localhost:5000/todos/${arg.id}`, arg)
        dispatch({
            type: UPDATE_TODO, payload: data
        })
    }
}