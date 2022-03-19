import React, { useReducer } from "react";
import useFormValidation from '../../shared/hook/useFormValidation'
import Input from "../../shared/components/ButtonEl/Input";
import "./newplace.css";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import Button from '../../shared/components/ButtonEl/Button'
const NewPlace = () => {
 
  
  const [formState, inputHandler] = useFormValidation({
   
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
      
    }},
    false
  );

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(formState.inputs);
  }



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
