import React from 'react';
import ItemPlace from './ItemPlaces'
import './PlacesList.css'
import Card from '../../shared/components/UIElements/Card'

const PlacesList = (props) => {
    const {places}=props

    if(places.length==0){
        return(<Card className='place-list center'>No Place Found</Card>)
    }

    return (
        <ul className='place-list'>
        
       { places.map((place)=>( <ItemPlace key={place.id}  place={place} />))}
       </ul>
       
    );
};

export default PlacesList;