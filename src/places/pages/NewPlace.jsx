import React, { useCallback, useReducer } from "react";
import Input from "../../shared/components/ButtonEl/Input";
import "./newplace.css";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../util/validators";
import Button from '../../shared/components/ButtonEl/Button'
const NewPlace = () => {
 
  const resucerForm = (state, action) => {
    switch (action.type) {
      case "inputChange":
        let formIsValid = true;

        
        for (const inputId in state.inputs) {
          if (inputId === action.inputId) {
            
            formIsValid = formIsValid && action.isValid;
          
          }else{
        
            formIsValid = formIsValid && state.inputs[inputId].isValid;
          
          }
          }
        
        
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.inputId]: { value: action.value, isValid: action.isValid },
          },
          isValid: formIsValid,
        };
      case "description":
        return {};

      default:
        return state;
    }
  };
  const [formState, dispatch] = useReducer(resucerForm, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
     address: {
        value: "",
        isValid: false,
      }
    },
    isValid: false,
  });
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(formState.inputs);
  }

  const inputHandler =useCallback( (id, value, isValid) => {
    dispatch({
      type: "inputChange",
      value: value,
      isValid: isValid,
      inputId: id,
    });
   
  },[dispatch]);


  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a description (At least 5 Characters)."
        onInput={inputHandler}
      />
       <Input
        id="address"
        element="input"
        type="text"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid Address."
        onInput={inputHandler}
      />
      <Button type='submit'disabled={!formState.isValid} onClick={submitHandler}>Add</Button>
      
      
    </form>
  );
};

export default NewPlace;
