//import React from 'react'
import { connect } from 'react-redux'
import Todoform from '../pure/TodoForm';
import { addTodo } from '../../Store/actions/Actions.js';


const mapStateToProps = (state) => ({
    // Not necessary
})

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (text) => {
            dispatch(addTodo(text))
        }
    }
}

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(Todoform)

export default TodoFormContainer
