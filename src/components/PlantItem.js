import CareScale from "./CareScale";
import "./style/PlantItem.css"

const PlantItem = ({ id, cover, name, water, light }) => {

    return(
        // Old thing 
        //  {isBestSale && <span>🔥</span>}

        <li key={id} className='jh-plant-item'>
            <img className='jh-plant-item-cover' src={cover} alt={`${name} cover`}/>
            {name}
            <div>
                <CareScale careType="light" scaleValue={light} />
                <CareScale careType="water" scaleValue={water} />
            </div>
        </li>
    )
}

export default PlantItem