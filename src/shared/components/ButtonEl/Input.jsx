import React,{useReducer,useEffect} from 'react';
import './input.css'
import {validate} from '../../../shared/util/validators'

const inputReducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE':
        return {
          ...state,
          value: action.val,
          isValid: validate(action.val,action.validators)
        };
        case 'Blur':
            return{
                ...state,
                blur:true
            }
      default:
        return state;
    }
  };



const Input = (props) => {
 const {id,onInput}=props

 const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.value||'',
    blur:false,
    isValid: props.valid||false
  });
  const {value,isValid}=inputState
 //validation
useEffect(()=>{
  onInput(id,value,isValid)

},[id, value, isValid,onInput])


   
    
      const changeHandler = event => {
        dispatch({ type: 'CHANGE', val: event.target.value ,validators:props.validators});
      };
      const blurHandler=()=>{
          dispatch({type:'Blur'})
      }

     
      const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onBlur={blurHandler}
        onChange={changeHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onBlur={blurHandler}
        onChange={changeHandler}
        value={inputState.value}
      />
    );

    return (
        <div className={`form-control ${!inputState.isValid &&inputState.blur && 'form-control--invalid'}`}>
        <label htmlFor={props.id}>{props.label}</label>
        {element}
        {!inputState.isValid  &&inputState.blur && <p>{props.errorText}</p>}
      </div>
    );
};

export default Input;