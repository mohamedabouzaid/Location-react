import {useParams} from 'react-router-dom';
import Input from '../../shared/components/ButtonEl/Input'
import Button from '../../shared/components/ButtonEl/Button'
import {VALIDATOR_MINLENGTH,VALIDATOR_REQUIRE} from '../../shared/util/validators'
import useFormValidation from '../../shared/hook/useFormValidation';


const DummyPlaces=[{id:'p2'
    ,title:'Empire state builder',
    description:' skyscraper in Midtown Manhattan in New York City, United States. It was designed by Shreve, Lamb & Harmon ',
    imageURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/250px-Empire_State_Building_%28aerial_view%29.jpg',
    address:'20 W 34 ST,NEW YORK ,NY 10001',
    location:
    {lat:40.7484405,
    lng:-73.9856644}
    ,creator:'u1'},
    {id:'p1'
    ,title:'Empire state builder',
    description:' skyscraper in Midtown Manhattan in New York City, United States. It was designed by Shreve, Lamb & Harmon ',
    imageURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/250px-Empire_State_Building_%28aerial_view%29.jpg',
    address:'20 W 34 ST,NEW YORK ,NY 10001',
    location:
    {lat:'40.7484405',
    lng:'-73.9856644'}
    ,creator:'u2'}
]
const UpdatePlaces = () => {

 const placeid=useParams().placeid;

 const filterPlace= DummyPlaces.find((place)=>(place.id===placeid))
 const [formState, inputHandler] = useFormValidation({
   
    title: {
      value:filterPlace.title,
      isValid: true,
    },
    description: {
      value: filterPlace.description,
      isValid: true,
    },
   address: {
      value: filterPlace.address,
      isValid: true,
    
  }},
  true
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
          value={formState.inputs.title.value}
          errorText="Please enter a valid title."
          onInput={inputHandler}
          valid={true}
        />
        <Input
          id="description"
          element="textarea"
          type="text"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          value={formState.inputs.description.value}
          errorText="Please enter a description (At least 5 Characters)."
          onInput={inputHandler}
          valid={true}
        />
         <Input
          id="address"
          element="input"
          type="text"
          label="Address"
          validators={[VALIDATOR_REQUIRE()]}
          value={formState.inputs.address.value}
          errorText="Please enter a valid Address."
          onInput={inputHandler}
          valid={true}
        />
        <Button type='submit' disabled={!formState.isValid} onClick={submitHandler}>Update</Button>
        
        
      </form>
    );
};

export default UpdatePlaces;