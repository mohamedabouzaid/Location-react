import React from 'react';
import Card from '../../shared/components/UIElements/Card'
import './ItemPlaces.css'

const ItemPlaces = (props) => {
    const {place}=props
  
    return (
        <li className='place-item'>
            <Card className='place-item'>
                <div className='place-item__image'> 
                  <img src={place.imageURL} alt={place.title} />
                </div>
                <div className='place-item__info'>
                    <h2>{place.title}</h2>
                    <h3>{place.address}</h3>
                    <p>{place.description}</p>
                </div>
                <div className='place-item__actions'>
                    <button>View On Map</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </Card>
        </li>
      
    );
};

export default ItemPlaces;