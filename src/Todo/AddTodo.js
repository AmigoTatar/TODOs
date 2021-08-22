import React,{useState} from 'react'
import PropTypes from 'prop-types'

function useInputValue(defaulValue=''){
    const [value,setValue] = useState(defaulValue);
    return{
        value,
        onChange:event =>setValue(event.target.value)
    }
}

function AddTodo({onCreate}){
    const input= useInputValue('')

    const[value,setValue] = useState('')

    function submitHandler(event){
        event.preventDefault()

        if(input.value.trim()){
            onCreate(input.value)
            setValue('')
        }
    }
    return(
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input {...input}/*value={value} onChange={event => setValue(event.target.value)}*//>
            <button type="submit">Add Tasks</button>
            
        </form>
    )

}
AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}
export default AddTodo;