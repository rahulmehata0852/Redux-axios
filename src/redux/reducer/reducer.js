import { ADD_TODO, DELETE_TODO, GET_TODO, UPDATE_TODO } from "../constant/constant"

export const reducer = (state = { todos: [] }, { type, payload }) => {

    switch (type) {
        case ADD_TODO: return { todos: [...state.todos, payload] }
        case GET_TODO: return { todos: payload }
        case DELETE_TODO: return { todos: [...state.todos, payload] }
        case UPDATE_TODO: return { todos: [...state.todos, payload] }


        default: return state
    }


}