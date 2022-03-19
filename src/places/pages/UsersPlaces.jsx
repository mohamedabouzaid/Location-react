import {useParams} from 'react-router-dom';
import PlacesList from '../components/PlacesList' 
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
const UsersPlaces = () => {
    const {uid}=useParams()
    const Userplaces=DummyPlaces.filter((place)=>place.creator==uid);
    return (
       <PlacesList places={Userplaces} />
    );
};

export default UsersPlaces;