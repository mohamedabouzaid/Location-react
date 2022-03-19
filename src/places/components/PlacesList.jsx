import React from 'react';
import ItemPlace from './ItemPlaces'
import './PlacesList.css'
import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/ButtonEl/Button'


const PlacesList = (props) => {
    const {places}=props

    if(places.length==0){
        return(<div className='place-list center'><Card className='place-list center'><h2>No Place Found </h2>       <Button to='/places/new'>Share Place</Button></Card>
</div>)
    }

    return (
        <ul className='place-list'>
        
       { places.map((place)=>( <ItemPlace key={place.id}  place={place} />))}
       </ul>
       
    );
};

export default PlacesList;