import {useParams} from 'react-router-dom';
import PlacesList from '../components/PlacesList' 
const DummyPlaces=[
]
const UsersPlaces = () => {
    const {uid}=useParams()
    const Userplaces=DummyPlaces.filter((place)=>place.creator==uid);
    return (
       <PlacesList places={Userplaces} />
    );
};

export default UsersPlaces;