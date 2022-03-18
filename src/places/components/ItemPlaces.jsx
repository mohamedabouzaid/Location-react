import {useState} from 'react';
import Card from '../../shared/components/UIElements/Card'
import './ItemPlaces.css'
import Button from '../../shared/components/ButtonEl/Button'
import Modle from '../../shared/components/UIElements/Modal'

const ItemPlaces = (props) => {
    const {place}=props
  const [IsOpenModel,setOpenModel]=useState(false);
  const clickModelHandler=()=>{setOpenModel(true)}
  const cancleModelHandler=()=>{setOpenModel(false)}
    return (<>

      { IsOpenModel &&<Modle 
      show={IsOpenModel}
      onCancel={cancleModelHandler}
      header={place.address}
      contentClass='place-item__modal-content'
      footerClass='place-item__modal-actions'
      footer={<button onClick={cancleModelHandler}>Close</button>}>
      <div className='map-container'>Mapis here</div>
      
      </Modle> }
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
                    <Button onClick={clickModelHandler} inverse>View On Map</Button>
                    <Button to={`/place/${place.id}`}>Edit</Button>
                    <Button danger>Delete</Button>
                </div>
            </Card>
        </li></>
      
    );
};

export default ItemPlaces;