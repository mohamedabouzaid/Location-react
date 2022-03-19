import React, { useCallback, useReducer } from "react";

const resucerForm = (state, action) => {
    switch (action.type) {
        case "inputChange":
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
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
        case "setUpdateData":
            return {
                ...state,
                inputs: action.inputs,
                isValid:  action.isValid,
            };

        default:
            return state;
    }
};

const useFormValidation = (initialValue, isValid) => {
    const [formState, dispatch] = useReducer(resucerForm, {
        inputs:initialValue,
        isValid: isValid,
    });
    
  const inputHandler =useCallback( (id, value, isValid) => {
    dispatch({
      type: "inputChange",
      value: value,
      isValid: isValid,
      inputId: id,
    });
   
  },[dispatch]);

  const setUpdateData =useCallback( (updateInput, isValid) => {
    dispatch({
      type: "setUpdateData",
      inputs:updateInput,
       isValid: isValid,
     
    });
   
  },[dispatch]);

    return[formState,inputHandler,setUpdateData];
};

export default useFormValidation;
